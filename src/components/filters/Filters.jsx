import { Search, Filter, ChevronDown } from "lucide-react";

export function Filters({
  searchTerm,
  locations,
  industries,
  selectedLocation,
  selectedIndustry,
  onSearch,
  onLocation,
  onIndustry,
  onReset,
}) {
  return (
    <div className="bg-white/20 backdrop-blur-sm shadow-xl rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-semibold text-zinc-50 flex items-center">
          <Filter className="mr-2" size={30} />
          Filters
        </h2>
        <button
          onClick={onReset}
          className="text-md bg-zinc-100 brightness-90 cursor-pointer hover:bg-black hover:text-zinc-100 p-2 rounded-lg font-medium flex items-center"
        >
          <span>Reset All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label
            htmlFor="search"
            className="block text-lg font-medium text-zinc-100 mb-1"
          >
            Company Name
          </label>
          <div className="relative">
            <Search
              className="absolute left-3 cursor-pointer top-1/2 transform -translate-y-1/2 text-zinc-500"
              size={16}
            />
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search companies..."
              className="w-full pl-10 pr-4 py-2 border border-gray-500 bg-zinc-300 rounded-lg "
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-lg font-medium text-zinc-50 mb-1"
          >
            Location
          </label>
          <div className="relative">
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => onLocation(e.target.value)}
              className="w-full pl-3 pr-10 py-2 border cursor-pointer border-gray-500 bg-zinc-300 rounded-lg appearance-none"
            >
              <option value="">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500"
              size={16}
            />
          </div>
        </div>

        {/* Industry */}
        <div>
          <label
            htmlFor="industry"
            className="block text-lg font-medium text-zinc-50 mb-1"
          >
            Industry
          </label>
          <div className="relative">
            <select
              id="industry"
              value={selectedIndustry}
              onChange={(e) => onIndustry(e.target.value)}
              className="w-full pl-3 pr-10 py-2 border cursor-pointer border-gray-500 bg-zinc-300 rounded-lg appearance-none"
            >
              <option value="">All Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
