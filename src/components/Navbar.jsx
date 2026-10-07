import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? 'text-[#244D3F] font-semibold'
        : 'text-[#64748B] hover:text-[#244D3F]'
    }`;

  return (
    <header className="bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 h-[78px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-[#244D3F]"
        >
          Keen Keeper
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={navClass}
          >
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={navClass}
          >
            Stats
          </NavLink>

        </nav>

        {/* Sign In */}
        <Link
          to="/signin"
          className="px-5 py-2.5 rounded-lg bg-[#244D3F] text-white text-sm font-medium hover:bg-[#1d3f34] transition"
        >
          Sign In
        </Link>

      </div>

    </header>
  );
};

export default Navbar;