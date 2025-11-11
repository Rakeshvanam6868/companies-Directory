function highlight(text, query) {
  if (!query) return text;
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-yellow-100 rounded px-0.5">
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  );
}

export function CompanyCard({ company, searchTerm }) {
  return (
    <div className="bg-white/20 backdrop-blur-md cursor-pointer shadow-xl rounded-xl  hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-14 h-14 bg-blue-600 backdrop-opacity-10 brightness-60 rounded-lg flex items-center justify-center">
            <span className="font-bold text-xl text-blue-100">
              {company.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="ml-4">
            <h3 className="text-[20px] font-semibold text-zinc-50">
              {highlight(company.name, searchTerm)}{" "}
            </h3>
            <p className="text-zinc-50 text-sm mt-1">{company.industry}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-zinc-100">
            <span className="text-sm">{company.location}</span>
          </div>
          <div className="flex items-center text-zinc-100">
            <span className="text-sm">Est. {company.founded}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
