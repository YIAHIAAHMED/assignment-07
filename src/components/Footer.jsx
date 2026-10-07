import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center gap-3">
          <img src={assets.logoXl} alt="KeenKeeper Logo" className="h-6 w-auto brightness-200" />
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={assets.facebookIcon} alt="Facebook" className="w-5 h-5 object-contain filter invert" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={assets.instagramIcon} alt="Instagram" className="w-5 h-5 object-contain filter invert" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={assets.twitterIcon} alt="Twitter" className="w-5 h-5 object-contain filter invert" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;