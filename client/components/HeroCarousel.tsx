import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  bgColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Featured Championships & Major Events',
    subtitle: 'Discover the biggest games and shows coming to your city',
    image: '🏈',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'NBA Playoffs',
    subtitle: 'Watch the most exciting basketball moments live',
    image: '🏀',
    bgColor: 'bg-gradient-to-br from-orange-500 to-red-600',
  },
  {
    id: 3,
    title: 'World Tours',
    subtitle: 'Experience the hottest concerts and live performances',
    image: '🎤',
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAutoPlay(false);
  };

  const slide = heroSlides[current];

  return (
    <div className="w-full bg-white dark:bg-gray-950 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text and CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {slide.subtitle}
            </p>
            <button className="w-fit px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
              See Tickets
            </button>
          </div>

          {/* Right Section - Event Card with Carousel */}
          <div className="relative">
            {/* Event Card */}
            <div
              className={cn(
                'w-full aspect-square rounded-2xl flex items-center justify-center text-center overflow-hidden shadow-xl',
                slide.bgColor
              )}
            >
              <div className="text-9xl">{slide.image}</div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prev}
                onMouseEnter={() => setAutoPlay(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrent(index);
                      setAutoPlay(false);
                    }}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all',
                      current === index
                        ? 'bg-purple-600 dark:bg-purple-400 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={next}
                onMouseEnter={() => setAutoPlay(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
