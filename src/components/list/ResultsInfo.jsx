export function ResultsInfo({
  pageCount,
  totalFiltered,
  pageItems,
  itemsPerPage,
  onItemsPerPage,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div className="text-gray-700">
        Showing <span className="font-semibold">{pageItems}</span> of{" "}
        <span className="font-semibold">{totalFiltered}</span> companies
      </div>
      <div className="mt-2 md:mt-0">
        <label htmlFor="itemsPerPage" className="text-sm text-gray-600 mr-2">
          Items per page:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPage(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
        </select>
      </div>
    </div>
  );
}
