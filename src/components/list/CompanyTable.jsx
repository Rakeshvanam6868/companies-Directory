import { ChevronUp, ChevronDown } from "lucide-react";

export function CompanyTable({ companies, sortConfig, onSort }) {
  const SortIcon = ({ col }) =>
    sortConfig.key === col ? (
      sortConfig.direction === "asc" ? (
        <ChevronUp className="ml-1" size={14} />
      ) : (
        <ChevronDown className="ml-1" size={14} />
      )
    ) : null;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              { key: "name", label: "Company" },
              { key: "location", label: "Location" },
              { key: "industry", label: "Industry" },
              { key: "founded", label: "Founded" },
            ].map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort(col.key)}
              >
                <div className="flex items-center">
                  {col.label}
                  <SortIcon col={col.key} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-blue-800">
                      {c.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {c.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {c.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {c.industry}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                {c.founded}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
