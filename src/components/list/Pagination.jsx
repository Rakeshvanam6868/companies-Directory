import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onGoTo,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 bg-white rounded-b-xl">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={`ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of{" "}
            <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={onPrev}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  onClick={() => onGoTo(page)}
                  className={`${
                    isActive
                      ? "z-10 bg-blue-600 border-blue-600 text-white"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                >
                  {page}
                </button>
              );
            })}
            <button
              onClick={onNext}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
