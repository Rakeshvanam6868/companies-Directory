import { useCompanies } from "./hooks/useCompanies";
import { Header } from "./components/layout/Header";
import { Filters } from "./components/filters/Filters";
import { ResultsInfo } from "./components/list/ResultsInfo";
import { EmptyState } from "./components/list/EmptyState";
import { CompanyGrid } from "./components/list/CompanyGrid";
import { Pagination } from "./components/list/Pagination";
import { Loader } from "./components/feedback/Loader";
import { ErrorState } from "./components/feedback/ErrorState";
import { Footer } from "./components/layout/Footer";
import { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import SortBar from "./components/list/SortBar";
import ActiveChips from "./components/filters/ActiveChips";

export default function App() {
  const { state, data, actions } = useCompanies();
  const {
    searchTerm,
    selectedLocation,
    selectedIndustry,
    sortConfig,
    currentPage,
    itemsPerPage,
    isLoading,
    error,
  } = state;
  const [searchInput, setSearchInput] = useState(searchTerm);
  const debounced = useDebounce(searchInput, 300);

  const {
    locations,
    industries,
    paginatedCompanies,
    totalPages,
    totalFiltered,
  } = data;
  const {
    setSearchTerm,
    setSelectedLocation,
    setSelectedIndustry,
    setItemsPerPage,
    resetFilters,
    nextPage,
    prevPage,
    goToPage,
    setCurrentPage,
  } = actions;

  useEffect(() => {
    setSearchTerm(debounced);
    setCurrentPage(1);
  }, [debounced, setSearchTerm, setCurrentPage]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorState />;

  return (
    <div className="min-h-screen bg-linear-to-br  from-[#234C6A] to-[#1B3C53] pt-5">
      <Header totalCount={data.filteredCompanies.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Filters
          searchTerm={searchInput}
          locations={locations}
          industries={industries}
          selectedLocation={selectedLocation}
          selectedIndustry={selectedIndustry}
          onSearch={(v) => {
            // update the local input; App's effect will apply debounced value to the real searchTerm
            setSearchInput(v);
            // do not immediately change currentPage here; the effect below will set current page when debounced changes
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

        <SortBar
          sortKey={sortConfig.key}
          direction={sortConfig.direction}
          onKey={(k) => actions.setSort(k, sortConfig.direction)}
          onDir={(d) => actions.setSort(sortConfig.key, d)}
          total={totalFiltered}
          range={data.range}
        />

        <ActiveChips
          search={searchTerm}
          location={selectedLocation}
          industry={selectedIndustry}
          onClear={(k) => {
            if (k === "search") actions.setSearchTerm("");
            if (k === "location") actions.setSelectedLocation("");
            if (k === "industry") actions.setSelectedIndustry("");
            actions.setCurrentPage(1);
          }}
          onClearAll={() => {
            actions.resetFilters();
            setSearchInput(""); // keep the input in sync with debounced search
          }}
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

            <CompanyGrid companies={paginatedCompanies} searchTerm={searchTerm} />

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
