// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useRef } from 'react';

// interface Category {
//   id: number;
//   name: string;
//   emoji: string;
//   color: string;
// }

// const categories: Category[] = [
//   { id: 1, name: 'Concert Tickets', emoji: '🎤', color: 'from-purple-500 to-pink-600' },
//   { id: 2, name: 'MLB', emoji: '⚾', color: 'from-red-500 to-orange-600' },
//   { id: 3, name: 'NBA', emoji: '🏀', color: 'from-orange-500 to-yellow-600' },
//   { id: 4, name: 'NFL', emoji: '🏈', color: 'from-blue-500 to-cyan-600' },
// ];

// export function CategoryCards() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 300;
//       scrollContainerRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="w-full bg-white dark:bg-gray-950 px-4 py-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
//           Popular categories
//         </h2>

//         {/* Desktop Carousel */}
//         <div className="relative hidden md:block">
//           <button
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 transition-all"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
//             style={{ scrollBehavior: 'smooth' }}
//           >
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${category.color} flex items-center justify-center text-7xl`}
//                 >
//                   {category.emoji}
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
//                   <div className="p-6 w-full">
//                     <h3 className="text-xl font-bold text-white">{category.name}</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 transition-all"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* Mobile Grid */}
//         <div className="md:hidden grid grid-cols-2 gap-4">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//             >
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${category.color} flex items-center justify-center text-5xl`}
//               >
//                 {category.emoji}
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
//                 <div className="p-4 w-full">
//                   <h3 className="text-lg font-bold text-white">{category.name}</h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: "Concert Tickets", image: "/category/Concert.jpg" },
  { id: 2, name: "MLB", image: "/category/MLB.jpg" },
  { id: 3, name: "NBA", image: "/category/NBA.jpg" },
  { id: 4, name: "NFL", image: "/category/NFL.jpg" },
  { id: 5, name: "NHL", image: "/category/NHL.jpg" },
  { id: 6, name: "MLS", image: "/category/MLS.jpg" },
  { id: 7, name: "Theater", image: "/category/Theater.jpg" },
];

export function CategoryCards() {
  // index of the left-most visible card
  const [currentIndex, setCurrentIndex] = useState(0);

  const VISIBLE_COUNT = 4;
  const maxIndex = Math.max(0, categories.length - VISIBLE_COUNT); // 7 - 4 = 3

  const goLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const atStart = currentIndex === 0;
  const atEnd = currentIndex === maxIndex;

  return (
    <div className="w-full bg-white dark:bg-gray-950 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Popular categories
        </h2>

        {/* DESKTOP SLIDER (shows 4 cards, smooth slide, no scrollbars) */}
        <div className="relative hidden md:block">
          {/* Left button */}
          <button
            onClick={goLeft}
            disabled={atStart}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-3 rounded-full shadow-lg transition-all
              ${atStart
                ? "bg-gray-200 dark:bg-gray-800/60 text-gray-400 cursor-default"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-xl"
              }`}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Filmstrip */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / VISIBLE_COUNT}%)`,
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="w-1/4 flex-shrink-0 px-2"
                >
                  <div className="relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute left-4 bottom-4">
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right button */}
          <button
            onClick={goRight}
            disabled={atEnd}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-3 rounded-full shadow-lg transition-all
              ${atEnd
                ? "bg-gray-200 dark:bg-gray-800/60 text-gray-400 cursor-default"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-xl"
              }`}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* MOBILE GRID (no slider, just 2 columns) */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-40 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute left-3 bottom-3">
                <h3 className="text-lg font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
