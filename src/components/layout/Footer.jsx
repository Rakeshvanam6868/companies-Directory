export function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-lg border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-zinc-100 text-md">
          © {new Date().getFullYear()} Frontlines Media. Companies Directory
          Technical Assessment.
        </p>
      </div>
    </footer>
  );
}
