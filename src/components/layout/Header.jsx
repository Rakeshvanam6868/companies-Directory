

export function Header({ totalCount }) {
  return (
    <header className="flex justify-center items-center bg-white/20 backdrop-blur-sm shadow-xl rounded-xl max-w-[80%] mx-auto  ">
    
    <div className="rounded-lg px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-zinc-50">
              Companies Directory
            </h1>
            <p className="mt-1 text-zinc-100">
              Explore {totalCount} innovative companies worldwide
            </p>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
}
