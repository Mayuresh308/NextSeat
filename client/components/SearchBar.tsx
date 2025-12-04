import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="w-full px-1 sm:px-0">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
            size={18}
          />
          <input
            type="text"
            placeholder="Search events, artists, teams, and more"
            className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-full
                       bg-white/90 dark:bg-black/60
                       text-sm sm:text-base text-gray-900 dark:text-white
                       placeholder-gray-500 dark:placeholder-gray-400
                       border border-gray-200/70 dark:border-white/10
                       shadow-md backdrop-blur-md
                       focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
                       transition-all"
          />
        </div>
      </div>
    </div>
  );
}
