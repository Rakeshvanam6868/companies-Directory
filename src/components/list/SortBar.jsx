import { ArrowUpAZ, ArrowDownAZ } from "lucide-react";

export default function SortBar({
  sortKey,
  direction,
  onKey,
  onDir,
  total,
  range,
}) {
  return (
    <div className="bg-white/20 backdrop-blur-sm shadow-xl rounded-xl  shadow-card px-4 py-3 mb-4 flex items-center justify-between">
      <div className="text-lg text-zinc-50">
        Showing{" "}
        <span className="font-medium">
          {range.from}-{range.to}
        </span>{" "}
        of <span className="font-medium">{total}</span>
      </div>
      <div className="flex items-center gap-3">
        <label className="text-lg text-zinc-50">Sort by</label>
        <select
          aria-label="Sort by"
          value={sortKey}
          onChange={(e) => onKey(e.target.value)}
          className="h-9 rounded-lg cursor-pointer border border-soft-border bg-zinc-300 px-3 text-sm "
        >
          <option value="name">Company</option>
          <option value="location">Location</option>
          <option value="industry">Industry</option>
          <option value="founded">Founded</option>
        </select>

        <button
          aria-label={direction === "asc" ? "Ascending" : "Descending"}
          title={direction === "asc" ? "Ascending" : "Descending"}
          onClick={() => onDir(direction === "asc" ? "desc" : "asc")}
          className="h-9 px-3 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-soft-border bg-zinc-300 hover:bg-zinc-100 text-sm"
        >
          {direction === "asc" ? (
            <ArrowUpAZ size={16} />
          ) : (
            <ArrowDownAZ size={16} />
          )}
          {direction === "asc" ? "Asc" : "Desc"}
        </button>
      </div>
    </div>
  );
}
