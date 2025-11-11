import { Search as SearchIcon } from "lucide-react";

export function EmptyState({ onReset }) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-md p-12 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <SearchIcon className="text-gray-400" size={32} />
      </div>
      <h3 className="text-lg font-medium text-zinc-100 mb-2">
        No companies found
      </h3>
      <p className="text-zinc-100 mb-4">
        Try adjusting your filters or search term
      </p>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
}
