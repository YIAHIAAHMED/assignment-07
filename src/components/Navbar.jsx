import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const activeClass = "text-[#103d33] font-semibold bg-emerald-50 px-3 py-2 rounded-lg transition-all";
  const inactiveClass = "text-gray-600 hover:text-[#103d33] px-3 py-2 rounded-lg transition-all";

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo from assets */}
          <NavLink to="/" className="flex items-center">
            <img src={assets.logo} alt="KeenKeeper Logo" className="h-7 w-auto object-contain" />
          </NavLink>

          <div className="flex items-center gap-2 sm:gap-6 font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Home
            </NavLink>
            <NavLink to="/timeline" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Timeline
            </NavLink>
            <NavLink to="/stats" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Stats
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;