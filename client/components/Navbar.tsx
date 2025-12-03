import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Heart, Ticket } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { href: '#sports', label: 'Sports' },
    { href: '#concerts', label: 'Concerts' },
    { href: '#theater', label: 'Theater' },
    { href: '#festivals', label: 'Festivals' },
    { href: '#cities', label: 'Top Cities' },
  ];

  const rightNavLinks = [
    { href: '#gifts', label: 'Gift Cards' },
    { href: '#explore', label: 'Explore' },
    { href: '#sell', label: 'Sell' },
  ];

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled
          ? 'bg-white dark:bg-gray-950 shadow-md border-b border-gray-200 dark:border-gray-800'
          : 'bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Left Section - Logo and Left Navigation */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <h1 className="hidden sm:block text-lg font-bold text-gray-900 dark:text-white">NextSeat</h1>
              </div>
            </Link>

            {/* Left Navigation - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {leftNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Right Navigation - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {rightNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Favorites and My Tickets */}
            <button className="hidden md:flex items-center gap-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
              <Heart size={18} />
              <span className="hidden lg:inline">Favorites</span>
            </button>
            <button className="hidden md:flex items-center gap-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
              <Ticket size={18} />
              <span className="hidden lg:inline">My Tickets</span>
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            )}

            {/* Sign In Button */}
            <button className="hidden sm:block px-4 sm:px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="px-4 py-4 space-y-2">
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-3 flex flex-col gap-2">
              <button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-full py-2">
                <Heart size={18} />
                <span>Favorites</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-full py-2">
                <Ticket size={18} />
                <span>My Tickets</span>
              </button>
              <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
