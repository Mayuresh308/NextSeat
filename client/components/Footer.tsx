import { Shield, Clock, Zap } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');
  const [selectedCurrency, setCurrency] = useState('USD');

  return (
    <footer className="w-full bg-gray-950 dark:bg-black text-gray-100 dark:text-gray-300">
      {/* Main Footer Content */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Trust Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Buy and sell with confidence</h3>
                <p className="text-sm text-gray-400">Secure transactions and verified sellers</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Support through your event</h3>
                <p className="text-sm text-gray-400">24/7 customer support and assistance</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Every order guaranteed</h3>
                <p className="text-sm text-gray-400">100% guaranteed authentic tickets</p>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Our Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Our Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#partners" className="hover:text-purple-400 transition-colors">Partners</a></li>
                <li><a href="#affiliate" className="hover:text-purple-400 transition-colors">Affiliate Program</a></li>
                <li><a href="#investors" className="hover:text-purple-400 transition-colors">Investors</a></li>
                <li><a href="#careers" className="hover:text-purple-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-semibold text-white mb-4">Help</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#help-center" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#gift-cards" className="hover:text-purple-400 transition-colors">Gift Cards</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#terms" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#cookies" className="hover:text-purple-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#accessibility" className="hover:text-purple-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>

            {/* Settings */}
            <div>
              <h4 className="font-semibold text-white mb-4">Settings</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block text-gray-400 text-xs mb-1">Country</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-500 text-xs"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-500 text-xs"
                  >
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1">Currency</label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:border-purple-500 text-xs"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>INR</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-800">
            <p>
              &copy; 2024 TicketHub. All rights reserved. Terms of Service | Privacy Policy | Cookie Preferences
            </p>
            <p className="mt-2">
              Your tickets are guaranteed authentic and backed by our customer protection guarantee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
