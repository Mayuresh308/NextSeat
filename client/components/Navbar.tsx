// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Moon, Sun, Heart, Ticket } from 'lucide-react';
// import { useTheme } from '@/hooks/useTheme';
// import { cn } from '@/lib/utils';

// export function Navbar() {
//   const { theme, toggleTheme, mounted } = useTheme();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const leftNavLinks = [
//     { href: '#sports', label: 'Sports' },
//     { href: '#concerts', label: 'Concerts' },
//     { href: '#theater', label: 'Theater' },
//     { href: '#festivals', label: 'Festivals' },
//     { href: '#cities', label: 'Top Cities' },
//   ];

//   const rightNavLinks = [
//     { href: '#gifts', label: 'Gift Cards' },
//     { href: '#explore', label: 'Explore' },
//     { href: '#sell', label: 'Sell' },
//   ];

//   return (
//     <nav
//       className={cn(
//         'sticky top-0 z-50 w-full transition-all duration-200',
//         isScrolled
//           ? 'bg-white dark:bg-gray-950 shadow-md border-b border-gray-200 dark:border-gray-800'
//           : 'bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800'
//       )}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-4">
//           {/* Left Section - Logo and Left Navigation */}
//           <div className="flex items-center gap-6">

//             {/* Dynamic Logo */}
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               {mounted && (
//                 <img
//                   src={theme === "light" ? "/LightNextSeatLogo.png" : "/DarkNextSeatLogo.png"}
//                   alt="NextSeat Logo"
//                   className="h-14 w-auto object-contain transition-all duration-300"
//                 />
//               )}
//             </Link>

//             {/* Left Navigation */}
//             <div className="hidden lg:flex items-center gap-6">
//               {leftNavLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center gap-2 sm:gap-4">

//             {/* Right Navigation */}
//             <div className="hidden lg:flex items-center gap-6">
//               {rightNavLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>

//             {/* Favorites & Tickets */}
//             <button className="hidden md:flex items-center gap-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
//               <Heart size={18} />
//               <span className="hidden lg:inline">Favorites</span>
//             </button>
//             <button className="hidden md:flex items-center gap-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
//               <Ticket size={18} />
//               <span className="hidden lg:inline">My Tickets</span>
//             </button>

//             {/* Theme Switch */}
//             {mounted && (
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                 aria-label="Toggle theme"
//               >
//                 {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
//               </button>
//             )}

//             {/* Sign In */}
//             <button className="hidden sm:block px-4 sm:px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
//               Sign In
//             </button>

//             {/* Mobile Menu */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
//           <div className="px-4 py-4 space-y-2">
//             {[...leftNavLinks, ...rightNavLinks].map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-2 transition-colors"
//               >
//                 {link.label}
//               </a>
//             ))}
//             <div className="border-t border-gray-200 dark:border-gray-800 pt-3 flex flex-col gap-2">
//               <button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-full py-2">
//                 <Heart size={18} />
//                 <span>Favorites</span>
//               </button>
//               <button className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-full py-2">
//                 <Ticket size={18} />
//                 <span>My Tickets</span>
//               </button>
//               <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Heart, Ticket } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

type LeftNavKey = "sports" | "concerts" | "theater" | "festivals" | "cities";
type RightId = "gifts" | "explore" | "sell";
type DropdownKey = LeftNavKey | "sell" | "myTickets";

const leftNavLinks: { id: LeftNavKey; href: string; label: string }[] = [
  { id: "sports", label: "Sports", href: "#sports" },
  { id: "concerts", label: "Concerts", href: "#concerts" },
  { id: "theater", label: "Theater", href: "#theater" },
  { id: "festivals", label: "Festivals", href: "#festivals" },
  { id: "cities", label: "Top Cities", href: "#cities" },
];

const rightNavLinks: { id: RightId; href: string; label: string }[] = [
  { id: "gifts", href: "#gifts", label: "Gift Cards" },
  { id: "explore", href: "#explore", label: "Explore" },
  { id: "sell", href: "#sell", label: "Sell" },
];

const dropdownConfig: Record<
  DropdownKey,
  { items: string[]; gridClass: string }
> = {
  sports: {
    gridClass: "grid-cols-4",
    items: [
      "MLB",
      "NBA",
      "NFL",
      "NHL",
      "MLS",
      "Tennis",
      "Golf",
      "Rodeo",
      "United States F1 GP",
      "Fight",
      "Rugby",
      "Horse Racing",
      "Cricket",
      "College Sports",
      "Volleyball",
      "All Sports",
    ],
  },
  concerts: {
    gridClass: "grid-cols-4",
    items: [
      "Alternative Music",
      "Country",
      "Dance and Electronic Music",
      "Experimental",
      "Folk",
      "Funk",
      "Heavy Metal",
      "Latin Music",
      "Pop",
      "Rap and Hip-Hop Music",
      "RB and Soul Music",
      "Reggae",
      "Religious",
      "Rock Music",
      "Vocal",
      "All Concerts",
    ],
  },
  theater: {
    gridClass: "grid-cols-5",
    items: [
      "Broadway Shows",
      "Classical Music and Opera",
      "Comedy",
      "Dance / Ballet",
      "Family",
      "Festivals and Fairs",
      "Musicals",
      "Plays",
      "Speaking Tour / Convention",
      "All Theater",
    ],
  },
  festivals: {
    gridClass: "grid-cols-4",
    items: [
      "BottleRock Napa Valley",
      "CMA Fest",
      "Coachella Music Festival",
      "Dreamville Festival",
      "Joni Jam",
      "Lovers & Friends Festival",
      "Rolling Loud",
      "Stagecoach Country Music Festival",
      "Summerfest",
      "Tortuga Music Festival",
      "Two Step Inn Festival",
      "Under The Big Sky Festival",
      "When We Were Young",
      "All Festivals",
    ],
  },
  cities: {
    gridClass: "grid-cols-4",
    items: [
      "Atlanta",
      "Chicago",
      "Los Angeles Metro",
      "New York Metro",
      "SF Bay Area",
      "Boston",
      "Houston",
      "Las Vegas",
      "Denver",
      "Detroit",
      "Nashville",
      "Miami / S. Florida",
      "Philadelphia",
      "Seattle",
      "Portland",
      "Toronto",
    ],
  },
  sell: {
    gridClass: "grid-cols-1",
    items: ["Sell tickets", "My tickets", "My sales"],
  },
  myTickets: {
    gridClass: "grid-cols-1",
    items: ["Orders", "My listings", "My sales", "Payments"],
  },
};

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null
  );

  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      closeTimeoutRef.current = null;
    }, 120); // small delay so you can move into the panel
  };

  const renderDropdown = (key: DropdownKey) => {
    if (activeDropdown !== key) return null;

    const config = dropdownConfig[key];
    const small = key === "sell" || key === "myTickets";

    return (
      <div
        className={cn(
          "absolute left-0 top-full mt-3 z-40",
          "transition-all duration-150 origin-top",
          "animate-in fade-in-0 zoom-in-95"
        )}
        onMouseEnter={() => openDropdown(key)}
        onMouseLeave={scheduleCloseDropdown}
      >
        {/* pointer */}
        <div className="absolute left-10 -top-2 w-4 h-4 bg-white dark:bg-gray-950 border border-purple-500/70 border-b-0 border-r-0 rotate-45" />
        {/* panel */}
        <div
          className={cn(
            "rounded-2xl border border-purple-500/70 bg-white dark:bg-gray-950 shadow-2xl px-5 py-4",
            small ? "min-w-[220px]" : "min-w-[520px] max-w-3xl"
          )}
        >
          <div
            className={cn(
              "grid gap-x-6 gap-y-1 text-sm",
              config.gridClass
            )}
          >
            {config.items.map((item) => (
              <button
                key={item}
                className="text-left text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 py-1"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav
        className={cn(
          "transition-all duration-200",
          isScrolled
            ? "bg-white dark:bg-gray-950 shadow-md border-b border-gray-200 dark:border-gray-800"
            : "bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left Section - Logo and Left Navigation */}
            <div className="flex items-center gap-6">
              {/* Dynamic Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                {mounted && (
                  <img
                    src={
                      theme === "light"
                        ? "/LightNextSeatLogo.png"
                        : "/DarkNextSeatLogo.png"
                    }
                    alt="NextSeat Logo"
                    className="h-14 w-auto object-contain transition-all duration-300"
                  />
                )}
              </Link>

              {/* Left Navigation (desktop) */}
              <div className="hidden lg:flex items-center gap-3">
                {leftNavLinks.map((link) => (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => openDropdown(link.id)}
                    onMouseLeave={scheduleCloseDropdown}
                  >
                    <button
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium transition-all",
                        activeDropdown === link.id
                          ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {link.label}
                    </button>
                    {renderDropdown(link.id)}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Right Navigation (desktop) */}
              <div className="hidden lg:flex items-center gap-4">
                {rightNavLinks.map((link) => {
                  if (link.id === "sell") {
                    return (
                      <div
                        key={link.id}
                        className="relative"
                        onMouseEnter={() => openDropdown("sell")}
                        onMouseLeave={scheduleCloseDropdown}
                      >
                        <button
                          className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium transition-all",
                            activeDropdown === "sell"
                              ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          )}
                        >
                          {link.label}
                        </button>
                        {renderDropdown("sell")}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* Favorites */}
              <button className="hidden md:flex items-center gap-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
                <Heart size={18} />
                <span className="hidden lg:inline">Favorites</span>
              </button>

              {/* My Tickets with dropdown */}
              <div
                className="hidden md:flex items-center relative"
                onMouseEnter={() => openDropdown("myTickets")}
                onMouseLeave={scheduleCloseDropdown}
              >
                <button className="flex items-center gap-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors whitespace-nowrap">
                  <Ticket size={18} />
                  <span className="hidden lg:inline">My Tickets</span>
                </button>
                {renderDropdown("myTickets")}
              </div>

              {/* Theme Switch */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              )}

              {/* Sign In */}
              <button className="hidden sm:block px-4 sm:px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                Sign In
              </button>

              {/* Mobile Menu Toggle */}
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
                  key={link.id}
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
    </div>
  );
}
