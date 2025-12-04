import { Music } from "lucide-react";

export function IntegrationBanner() {
  return (
    <div className="w-full px-4 py-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Rounded Banner Box */}
        <div className="w-full bg-black rounded-2xl px-6 md:px-10 py-6 md:py-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* LEFT: Spotify Icon + Name */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DB954]">
                <Music size={22} className="text-black" />
              </div>
              <span className="text-white text-xl font-semibold leading-none">
                Spotify
              </span>
            </div>

            {/* MIDDLE: Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-white text-base md:text-lg font-semibold">
                Connect your Spotify account and sync your favorite artists
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Discover events from who you actually listen to
              </p>
            </div>

            {/* RIGHT: Button */}
            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <button className="px-6 md:px-8 py-2.5 bg-[#1DB954] hover:bg-[#18a747] text-black font-semibold rounded-full text-sm md:text-base transition-colors">
                Connect Spotify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
