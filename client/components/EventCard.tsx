import { MapPin, Calendar } from 'lucide-react';

interface EventCardProps {
  id: number;
  name: string;
  location: string;
  date: string;
  emoji: string;
  color: string;
}

export function EventCard({ name, location, date, emoji, color }: EventCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer bg-white dark:bg-gray-900">
      {/* Image Section */}
      <div className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center text-6xl`}>
        {emoji}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2">
          {name}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>

        <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm">
          See Tickets
        </button>
      </div>
    </div>
  );
}
