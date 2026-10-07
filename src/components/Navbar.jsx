import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import {
  Home as HomeIcon,
  Clock3,
  BarChart3,
  Menu,
  X,
} from 'lucide-react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: HomeIcon,
    },
    {
      name: 'Timeline',
      path: '/timeline',
      icon: Clock3,
    },
    {
      name: 'Stats',
      path: '/stats',
      icon: BarChart3,
    },
  ];

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? 'bg-[#E7F1EC] text-[#244D3F]'
        : 'text-[#64748B] hover:bg-gray-100 hover:text-[#244D3F]'
    }`;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-lg bg-[#244D3F] text-white flex items-center justify-center font-bold">
            K
          </div>

          <span className="text-xl font-bold text-[#244D3F]">
            KeenKeeper
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">

          {navItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={navClass}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#244D3F]"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4">

          <nav className="flex flex-col gap-2">

            {navItems.map((item) => {

              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={navClass}
                >
                  <Icon size={18} />
                  {item.name}
                </NavLink>
              );
            })}

          </nav>

        </div>
      )}

    </header>
  );
};

export default Navbar;