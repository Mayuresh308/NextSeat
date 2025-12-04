import { Navbar } from '@/components/Navbar';
import { SearchBar } from '@/components/SearchBar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { FilterPills } from '@/components/FilterPills';
import { CategoryCards } from '@/components/CategoryCards';
import { IntegrationBanner } from '@/components/IntegrationBanner';
import { ContentSection } from '@/components/ContentSection';
import { SubscriptionStrip } from '@/components/SubscriptionStrip';
import { AppPromo } from '@/components/AppPromo';
import { Footer } from '@/components/Footer';

const concertEvents = [
  {
    id: 1,
    name: 'Taylor Swift Concert Tour',
    location: 'Madison Square Garden, NY',
    date: 'Apr 15, 2024',
    emoji: '🎤',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 2,
    name: 'The Weeknd Live',
    location: 'Crypto.com Arena, LA',
    date: 'May 2, 2024',
    emoji: '🎵',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 3,
    name: 'Coldplay World Tour',
    location: 'United Center, Chicago',
    date: 'Jun 10, 2024',
    emoji: '🎸',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 4,
    name: 'Billie Eilish Tour',
    location: 'Staples Center, LA',
    date: 'Jul 8, 2024',
    emoji: '🎧',
    color: 'from-green-500 to-emerald-600',
  },
];

const sportsEvents = [
  {
    id: 5,
    name: 'Super Bowl LVIII',
    location: 'Allegiant Stadium, Las Vegas',
    date: 'Feb 11, 2024',
    emoji: '🏈',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 6,
    name: 'NBA Finals Game 1',
    location: 'TD Garden, Boston',
    date: 'Jun 1, 2024',
    emoji: '🏀',
    color: 'from-orange-500 to-yellow-600',
  },
  {
    id: 7,
    name: 'World Series Game 3',
    location: 'Yankee Stadium, NY',
    date: 'Oct 28, 2024',
    emoji: '⚾',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 8,
    name: 'Stanley Cup Finals',
    location: 'American Airlines Center, Dallas',
    date: 'Jun 24, 2024',
    emoji: '🏒',
    color: 'from-red-600 to-red-700',
  },
];

const theaterEvents = [
  {
    id: 9,
    name: 'Hamilton on Broadway',
    location: 'Richard Rodgers Theatre, NY',
    date: 'Ongoing',
    emoji: '🎭',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 10,
    name: 'The Lion King',
    location: 'Minskoff Theatre, NY',
    date: 'Ongoing',
    emoji: '🦁',
    color: 'from-orange-500 to-yellow-600',
  },
  {
    id: 11,
    name: 'Wicked on Broadway',
    location: 'Gershwin Theatre, NY',
    date: 'Ongoing',
    emoji: '✨',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 12,
    name: 'Chicago the Musical',
    location: 'Ambassador Theatre, NY',
    date: 'Ongoing',
    emoji: '💃',
    color: 'from-red-500 to-pink-600',
  },
];

const comedyEvents = [
  {
    id: 13,
    name: 'Dave Chappelle Stand-up',
    location: 'Radio City Music Hall, NY',
    date: 'Mar 15, 2024',
    emoji: '😂',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 14,
    name: 'John Mulaney Comedy Tour',
    location: 'Beacon Theatre, NY',
    date: 'Apr 20, 2024',
    emoji: '🎤',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 15,
    name: 'Tiffany Haddish Live',
    location: 'Hollywood Bowl, LA',
    date: 'May 5, 2024',
    emoji: '🎬',
    color: 'from-pink-500 to-red-600',
  },
  {
    id: 16,
    name: 'Louis C.K. Stand-up',
    location: 'Fillmore Auditorium, Denver',
    date: 'Jun 3, 2024',
    emoji: '🎪',
    color: 'from-indigo-500 to-purple-600',
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      {/* <SearchBar /> */}

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Filter Pills */}
      {/* <FilterPills /> */}

      {/* Popular Categories */}
      <CategoryCards />

      {/* Integration Banner */}
      <IntegrationBanner />

      {/* Concerts Section */}
      <ContentSection
        title="Concerts"
        exploreLink="#concerts"
        events={concertEvents}
      />

      {/* Sports Section */}
      <ContentSection
        title="Sports"
        exploreLink="#sports"
        events={sportsEvents}
      />

      {/* Theater Section */}
      <ContentSection
        title="Theater"
        exploreLink="#theater"
        events={theaterEvents}
      />

      {/* Comedy Section */}
      <ContentSection
        title="Comedy"
        exploreLink="#comedy"
        events={comedyEvents}
      />

      {/* Subscription Strip */}
      <SubscriptionStrip />

      {/* App Promotion */}
      <AppPromo />

      {/* Footer */}
      <Footer />
    </div>
  );
}
