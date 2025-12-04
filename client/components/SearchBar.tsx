// import { Search } from 'lucide-react';

// export function SearchBar() {
//   return (
//     <div className="w-full bg-white dark:bg-gray-950 py-6 px-4">
//       <div className="max-w-3xl mx-auto">
//         <div className="relative">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
//           <input
//             type="text"
//             placeholder="Search events, artists, teams, and more"
//             className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-3xl">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
            size={20}
          />
          <input
            type="text"
            placeholder="Search events, artists, teams, and more"
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/90 dark:bg-black/60 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
