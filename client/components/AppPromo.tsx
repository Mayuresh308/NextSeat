import { Download } from 'lucide-react';

export function AppPromo() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Download our app
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Discover and manage your tickets on the go. Get instant notifications and exclusive mobile-only deals.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
                <Download size={20} />
                App Store
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors">
                <Download size={20} />
                Google Play
              </button>
            </div>

            {/* QR Code */}
            <div className="mt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Or scan the QR code:</p>
              <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-600">
                <span className="text-xs">QR Code</span>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-48 h-96 bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl shadow-2xl flex items-center justify-center border-8 border-gray-900 dark:border-gray-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
              <div className="text-center text-white">
                <div className="text-5xl mb-4">🎫</div>
                <p className="text-sm font-semibold">Your Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
