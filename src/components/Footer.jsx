import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-16">

      <div className="max-w-7xl mx-auto px-5 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-2xl font-bold">
              KeenKeeper
            </h2>

            <p className="text-white/70 mt-4 leading-7 max-w-sm">
              Keep your friendships alive by staying
              connected with the people who matter most.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-white/70">

              <Link to="/">
                Home
              </Link>

              <Link to="/timeline">
                Timeline
              </Link>

              <Link to="/stats">
                Stats
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              KeenKeeper
            </h3>

            <p className="text-white/70 leading-7">
              A simple friendship management app
              built with React.
            </p>

          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-sm text-white/60 text-center">

          © 2026 KeenKeeper. All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;