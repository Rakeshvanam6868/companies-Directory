import { Grid, List } from "lucide-react";

export function Header({ totalCount, view, onChangeView }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Companies Directory
            </h1>
            <p className="mt-1 text-gray-600">
              Explore {totalCount} innovative companies worldwide
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button
              onClick={() => onChangeView("grid")}
              className={`p-2 rounded-lg ${
                view === "grid"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => onChangeView("list")}
              className={`p-2 rounded-lg ${
                view === "list"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
