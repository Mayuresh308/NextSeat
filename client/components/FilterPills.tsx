// import { useState } from 'react';
// import { MapPin, Calendar, Grid3X3 } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const filterCategories = [
//   { id: 'location', label: 'Nagpur', icon: MapPin },
//   { id: 'date', label: 'All dates', icon: Calendar },
//   { id: 'type', label: 'All types', icon: Grid3X3 },
// ];

// const categoryPills = ['Sports', 'Concerts', 'Theater & Comedy'];

// export function FilterPills() {
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);

//   const toggleFilter = (id: string) => {
//     setActiveFilters((prev) =>
//       prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="w-full bg-white dark:bg-gray-950 px-4 py-4 border-b border-gray-200 dark:border-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-wrap gap-2 md:gap-3">
//           {/* Filter Selectors */}
//           {filterCategories.map((filter) => {
//             const Icon = filter.icon;
//             return (
//               <button
//                 key={filter.id}
//                 onClick={() => toggleFilter(filter.id)}
//                 className={cn(
//                   'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
//                   activeFilters.includes(filter.id)
//                     ? 'bg-purple-600 text-white dark:bg-purple-500'
//                     : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-400'
//                 )}
//               >
//                 <Icon size={16} />
//                 <span>{filter.label}</span>
//               </button>
//             );
//           })}

//           {/* Category Pills */}
//           {categoryPills.map((category) => (
//             <button
//               key={category}
//               onClick={() => toggleFilter(category)}
//               className={cn(
//                 'px-4 py-2 rounded-full text-sm font-medium transition-all',
//                 activeFilters.includes(category)
//                   ? 'bg-purple-600 text-white dark:bg-purple-500'
//                   : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-400'
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import { MapPin, Calendar, Grid3X3 } from "lucide-react";
import { cn } from "@/lib/utils";

const filterCategories = [
  { id: "location", label: "Pune", icon: MapPin },
  { id: "date", label: "All dates", icon: Calendar },
  { id: "type", label: "All types", icon: Grid3X3 },
];

const categoryPills = ["Sports", "Concerts", "Theater & Comedy"];

export function FilterPills() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 md:gap-3">
        {/* Filter Selectors */}
        {filterCategories.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilters.includes(filter.id)
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-white border border-white/20 hover:border-purple-300/80"
              )}
            >
              <Icon size={16} />
              <span>{filter.label}</span>
            </button>
          );
        })}

        {/* Category Pills */}
        {categoryPills.map((category) => (
          <button
            key={category}
            onClick={() => toggleFilter(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeFilters.includes(category)
                ? "bg-purple-600 text-white"
                : "bg-white/10 text-white border border-white/20 hover:border-purple-300/80"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
