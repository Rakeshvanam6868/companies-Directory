import React from "react";
import { useCompanies } from "./hooks/useCompanies";
import { Header } from "./components/layout/Header";
import { Filters } from "./components/filters/Filters";
import { ResultsInfo } from "./components/list/ResultsInfo";
import { EmptyState } from "./components/list/EmptyState";
import { CompanyGrid } from "./components/list/CompanyGrid";
import { CompanyTable } from "./components/list/CompanyTable";
import { Pagination } from "./components/list/Pagination";
import { Loader } from "./components/feedback/Loader";
import { ErrorState } from "./components/feedback/ErrorState";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const { state, data, actions } = useCompanies();
  const {
    view,
    searchTerm,
    selectedLocation,
    selectedIndustry,
    sortConfig,
    currentPage,
    itemsPerPage,
    isLoading,
    error,
  } = state;

  const {
    locations,
    industries,
    paginatedCompanies,
    totalPages,
    totalFiltered,
  } = data;
  const {
    setView,
    setSearchTerm,
    setSelectedLocation,
    setSelectedIndustry,
    setItemsPerPage,
    handleSort,
    resetFilters,
    nextPage,
    prevPage,
    goToPage,
    setCurrentPage,
  } = actions;

  if (isLoading) return <Loader />;
  if (error) return <ErrorState />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header totalCount={20} view={view} onChangeView={setView} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Filters
          searchTerm={searchTerm}
          locations={locations}
          industries={industries}
          selectedLocation={selectedLocation}
          selectedIndustry={selectedIndustry}
          onSearch={(v) => {
            setSearchTerm(v);
            setCurrentPage(1);
          }}
          onLocation={(v) => {
            setSelectedLocation(v);
            setCurrentPage(1);
          }}
          onIndustry={(v) => {
            setSelectedIndustry(v);
            setCurrentPage(1);
          }}
          onReset={resetFilters}
        />

        {totalFiltered === 0 ? (
          <EmptyState onReset={resetFilters} />
        ) : (
          <>
            <ResultsInfo
              pageCount={totalPages}
              totalFiltered={totalFiltered}
              pageItems={paginatedCompanies.length}
              itemsPerPage={itemsPerPage}
              onItemsPerPage={(n) => {
                setItemsPerPage(n);
                setCurrentPage(1);
              }}
            />

            {view === "grid" ? (
              <CompanyGrid companies={paginatedCompanies} />
            ) : (
              <CompanyTable
                companies={paginatedCompanies}
                sortConfig={sortConfig}
                onSort={handleSort}
              />
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={prevPage}
              onNext={nextPage}
              onGoTo={goToPage}
            />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
