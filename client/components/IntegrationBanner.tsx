import { Music } from 'lucide-react';

export function IntegrationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-900 dark:to-purple-800 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Icon */}
          <div className="flex justify-center md:justify-start">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center">
              <Music size={48} className="text-white" />
            </div>
          </div>

          {/* Right Side - Text and Button */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-3">
              Connect your music to find events you'll love
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Sync your favorite artists and get personalized concert recommendations tailored just for you.
            </p>
            <button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
              Connect Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
