import { useMemo, useState, useEffect } from "react";
import { mockCompanies } from "../data/companies";

export function useCompanies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate API loading delay (300ms) and potential error (5% chance)
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      if (Math.random() < 0.05)
        setError("Failed to load company data. Please try again.");
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const locations = useMemo(
    () => [...new Set(mockCompanies.map((c) => c.location))].sort(),
    []
  );
  const industries = useMemo(
    () => [...new Set(mockCompanies.map((c) => c.industry))].sort(),
    []
  );

  const filteredCompanies = useMemo(() => {
    if (error || isLoading) return [];
    return mockCompanies
      .filter(
        (company) =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedLocation ? company.location === selectedLocation : true) &&
          (selectedIndustry ? company.industry === selectedIndustry : true)
      )
      .sort((a, b) => {
        const { key, direction } = sortConfig;
        let aValue = a[key];
        let bValue = b[key];
        if (typeof aValue === "number") {
          return direction === "asc" ? aValue - bValue : bValue - aValue;
        }
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
        return 0;
      });
  }, [
    searchTerm,
    selectedLocation,
    selectedIndustry,
    sortConfig,
    isLoading,
    error,
  ]);

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage) || 1;
  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCompanies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCompanies, currentPage, itemsPerPage]);

  const setSort = (key, direction) => setSortConfig({ key, direction });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setSelectedIndustry("");
    setCurrentPage(1);
  };

  const range = (() => {
  if (!filteredCompanies.length) return { from: 0, to: 0, total: 0 };
  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, filteredCompanies.length);
  return { from, to, total: filteredCompanies.length };
})();

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    state: {
      searchTerm,
      selectedLocation,
      selectedIndustry,
      sortConfig,
      currentPage,
      itemsPerPage,
      isLoading,
      error,
    },
    data: {
      locations,
      industries,
      filteredCompanies,
      paginatedCompanies,
      totalPages,
      totalFiltered: filteredCompanies.length,
      range,
    },
    actions: {
      setSearchTerm,
      setSelectedLocation,
      setSelectedIndustry,
      setSortConfig,
      setCurrentPage,
      setItemsPerPage,
      resetFilters,
      nextPage,
      prevPage,
      goToPage,
      setSort,
    },
  };
}
