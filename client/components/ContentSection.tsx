import { EventCard } from './EventCard';
import { ChevronRight } from 'lucide-react';

interface ContentSectionProps {
  title: string;
  exploreLink: string;
  events: Array<{
    id: number;
    name: string;
    location: string;
    date: string;
    emoji: string;
    color: string;
  }>;
}

export function ContentSection({ title, exploreLink, events }: ContentSectionProps) {
  return (
    <div className="w-full bg-white dark:bg-gray-950 px-4 py-12 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <a
            href={exploreLink}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
          >
            Explore {title}
            <ChevronRight size={20} />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
