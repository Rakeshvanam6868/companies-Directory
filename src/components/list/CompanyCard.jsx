export function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="font-bold text-blue-800">
              {company.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {company.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{company.industry}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <span className="text-sm">{company.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-sm">Est. {company.founded}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
