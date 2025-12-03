import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface Category {
  id: number;
  name: string;
  emoji: string;
  color: string;
}

const categories: Category[] = [
  { id: 1, name: 'Concert Tickets', emoji: '🎤', color: 'from-purple-500 to-pink-600' },
  { id: 2, name: 'MLB', emoji: '⚾', color: 'from-red-500 to-orange-600' },
  { id: 3, name: 'NBA', emoji: '🏀', color: 'from-orange-500 to-yellow-600' },
  { id: 4, name: 'NFL', emoji: '🏈', color: 'from-blue-500 to-cyan-600' },
];

export function CategoryCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-950 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Popular categories
        </h2>

        {/* Desktop Carousel */}
        <div className="relative hidden md:block">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} flex items-center justify-center text-7xl`}
                >
                  {category.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} flex items-center justify-center text-5xl`}
              >
                {category.emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-lg font-bold text-white">{category.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
