// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { SearchBar } from "./SearchBar";
// import { FilterPills } from "./FilterPills";

// interface HeroSlide {
//   id: number;
//   title: string;
//   subtitle: string;
//   image: string; // path to image in /public
// }

// const heroSlides: HeroSlide[] = [
//   {
//     id: 1,
//     title: "ICC Champions Trophy 2025",
//     subtitle: "Witness international cricket battles live on the big stage",
//     image: "/HeroCarousel/Icc.jpg",
//   },
//   {
//     id: 2,
//     title: "UFC Fight Night",
//     subtitle: "Experience high-energy combat and elite MMA action",
//     image: "/HeroCarousel/UFC.png",
//   },
//   {
//     id: 3,
//     title: "Taylor Swift | Eras Tour",
//     subtitle: "Join the record-breaking world tour live in arenas worldwide",
//     image: "/HeroCarousel/TaylorSwift.png",
//   },
//   {
//     id: 4,
//     title: "Coldplay: Music of the Spheres",
//     subtitle: "Feel the magic of one of the biggest concerts of the decade",
//     image: "/HeroCarousel/Coldplay.jpg",
//   },
//   {
//     id: 5,
//     title: "Avengers: Secret Wars",
//     subtitle: "The Marvel universe returns with an epic multiverse showdown",
//     image: "/HeroCarousel/Avengers.jpg",
//   },
//   {
//     id: 6,
//     title: "The Batman: Part II",
//     subtitle: "Dive into Gotham’s darkest and most thrilling new chapter",
//     image: "/HeroCarousel/Batman.png",
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);
//   const [displayedTitle, setDisplayedTitle] = useState("");
//   const [charIndex, setCharIndex] = useState(0);
//   const [subtitleVisible, setSubtitleVisible] = useState(false);
//   const [fade, setFade] = useState(true);

//   const slide = heroSlides[current];

//   // Reset states when slide changes
//   useEffect(() => {
//     setDisplayedTitle("");
//     setCharIndex(0);
//     setSubtitleVisible(false);

//     setFade(false);
//     const t = setTimeout(() => setFade(true), 50);
//     return () => clearTimeout(t);
//   }, [current]);

//   // Typing animation for title
//   useEffect(() => {
//     let t: number;

//     if (charIndex < slide.title.length) {
//       t = window.setTimeout(() => {
//         setDisplayedTitle((prev) => prev + slide.title.charAt(charIndex));
//         setCharIndex((prev) => prev + 1);
//       }, 40);
//     } else if (!subtitleVisible) {
//       setSubtitleVisible(true);
//     }

//     return () => clearTimeout(t);
//   }, [charIndex, slide.title, subtitleVisible]);

//   // 5-second timer AFTER subtitle is visible
//   useEffect(() => {
//     if (!subtitleVisible) return;

//     const timer = setTimeout(() => {
//       handleNext();
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [subtitleVisible]);

//   const handleNext = () =>
//     setCurrent((prev) => (prev + 1) % heroSlides.length);
//   const handlePrev = () =>
//     setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
//   const handleDotClick = (index: number) => setCurrent(index);

//   return (
//     <div className="relative w-full px-4 pb-6 -mt-4 overflow-hidden">
//       {/* Background Image */}
//       <div
//         className={cn(
//           "absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-700",
//           fade ? "opacity-40" : "opacity-0"
//         )}
//         style={{
//           backgroundImage: `url(${slide.image})`,
//           filter: "blur(12px)",
//         }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Foreground content */}
//       <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-6rem)] flex flex-col gap-4 justify-center">
//         {/* Search Bar */}
//         <SearchBar />
        

//         {/* Hero main content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full">
//           {/* LEFT */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
//               {displayedTitle}
//             </h2>

//             <p
//               className={cn(
//                 "text-lg text-white/80 mb-6 min-h-[2rem] transition-all duration-500",
//                 subtitleVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 -translate-y-2"
//               )}
//             >
//               {slide.subtitle}
//             </p>

//             <button className="w-fit px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
//               See Tickets
//             </button>
//           </div>

//           {/* RIGHT */}
//           <div className="flex flex-col items-center w-full">
//             <div
//               className={cn(
//                 "w-full max-w-3xl h-96 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700",
//                 fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//               )}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>

//             <div className="flex items-center justify-center gap-6 mt-4">
//               <button
//                 onClick={handlePrev}
//                 className="p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition"
//               >
//                 <ChevronLeft size={26} />
//               </button>

//               <div className="flex gap-2">
//                 {heroSlides.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => handleDotClick(i)}
//                     className={cn(
//                       "h-2 rounded-full transition-all",
//                       current === i ? "bg-white w-8" : "bg-white/50 w-2"
//                     )}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={handleNext}
//                 className="p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition"
//               >
//                 <ChevronRight size={26} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Filter Pills at the bottom */}
//         <div className="mt-4">
//           <FilterPills />
//         </div>
//       </div>
//     </div>
//   );
// }




// client/components/HeroCarousel.tsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "./SearchBar";
import { FilterPills } from "./FilterPills";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string; // path to image in /public
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "ICC Champions Trophy 2025",
    subtitle: "Witness international cricket battles live on the big stage",
    image: "/HeroCarousel/Icc.jpg",
  },
  {
    id: 2,
    title: "UFC Fight Night",
    subtitle: "Experience high-energy combat and elite MMA action",
    image: "/HeroCarousel/UFC.png",
  },
  {
    id: 3,
    title: "Taylor Swift | Eras Tour",
    subtitle: "Join the record-breaking world tour live in arenas worldwide",
    image: "/HeroCarousel/TaylorSwift.png",
  },
  {
    id: 4,
    title: "Coldplay: Music of the Spheres",
    subtitle: "Feel the magic of one of the biggest concerts of the decade",
    image: "/HeroCarousel/Coldplay.jpg",
  },
  {
    id: 5,
    title: "Avengers: Secret Wars",
    subtitle: "The Marvel universe returns with an epic multiverse showdown",
    image: "/HeroCarousel/Avengers.jpg",
  },
  {
    id: 6,
    title: "The Batman: Part II",
    subtitle: "Dive into Gotham’s darkest and most thrilling new chapter",
    image: "/HeroCarousel/Batman.png",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [fade, setFade] = useState(true);

  const slide = heroSlides[current];

  // Reset states when slide changes
  useEffect(() => {
    setDisplayedTitle("");
    setCharIndex(0);
    setSubtitleVisible(false);

    setFade(false);
    const t = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(t);
  }, [current]);

  // Typing animation for title
  useEffect(() => {
    let t: number;

    if (charIndex < slide.title.length) {
      t = window.setTimeout(() => {
        setDisplayedTitle((prev) => prev + slide.title.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 40);
    } else if (!subtitleVisible) {
      setSubtitleVisible(true);
    }

    return () => clearTimeout(t);
  }, [charIndex, slide.title, subtitleVisible]);

  // 5-second timer AFTER subtitle is visible
  useEffect(() => {
    if (!subtitleVisible) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [subtitleVisible]);

  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const handleDotClick = (index: number) => setCurrent(index);

  return (
    <div className="relative w-full px-4 pb-8 overflow-hidden">
      {/* Background Image */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-700",
          fade ? "opacity-40" : "opacity-0"
        )}
        style={{
          backgroundImage: `url(${slide.image})`,
          filter: "blur(12px)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground content */}
      <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-6rem)] flex flex-col gap-5 sm:gap-6 pt-4 pb-6 sm:pb-10 justify-start sm:justify-center">
        {/* Search Bar */}
        <SearchBar />

        {/* Hero main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-full">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              {displayedTitle}
            </h2>

            <p
              className={cn(
                "text-base sm:text-lg text-white/80 mb-6 min-h-[2rem] transition-all duration-500",
                subtitleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              )}
            >
              {slide.subtitle}
            </p>

            <button className="w-full sm:w-fit px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
              See Tickets
            </button>
          </div>

          {/* RIGHT – poster */}
          <div className="flex flex-col items-center w-full">
            <div
              className={cn(
                "w-full max-w-md sm:max-w-lg md:max-w-3xl rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700",
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-72 sm:h-80 md:h-96 object-cover"
              />
            </div>

            {/* Dots / controls */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition"
              >
                <ChevronLeft size={26} />
              </button>

              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      current === i ? "bg-white w-8" : "bg-white/50 w-2"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition"
              >
                <ChevronRight size={26} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter pills below hero on all sizes */}
        <div className="mt-2 sm:mt-4">
          <FilterPills />
        </div>
      </div>
    </div>
  );
}
