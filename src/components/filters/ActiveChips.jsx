import { X } from "lucide-react";

export default function ActiveChips({ search, location, industry, onClear, onClearAll }) {
  const chips = [];
  if (search) chips.push({ k: "search", label: `Search: "${search}"` });
  if (location) chips.push({ k: "location", label: location });
  if (industry) chips.push({ k: "industry", label: industry });

  if (chips.length === 0) return null;

  return (
    <div className="flex items-center flex-wrap gap-2 mb-4">
      {chips.map((c) => (
        <span key={c.k} className="inline-flex items-center gap-1 text-xs px-2.5 py-1  rounded-full bg-blue-50 border border-blue-200 text-blue-700">
          {c.label}
          <button aria-label={`Clear ${c.k}`} onClick={() => onClear(c.k)} className="p-0.5 rounded cursor-pointer hover:bg-blue-100">
            <X size={12} />
          </button>
        </span>
      ))}
      <button onClick={onClearAll} className="text-xs text-zinc-100 hover:text-zinc-200 cursor-pointer underline ml-1">Clear all</button>
    </div>
  );
}
