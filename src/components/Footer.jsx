const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Keen Keeper
            </h2>

            <p className="text-white/70 leading-7 max-w-sm">
              Your personal shelf of meaningful connections.
              Browse, tend, and nurture the relationships
              that matter most.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-white/70">

              <a href="/">Home</a>

              <a href="/timeline">
                Timeline
              </a>

              <a href="/stats">
                Stats
              </a>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">
              Social Links
            </h3>

            <div className="flex gap-4">

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="/src/assets/facebook.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="/src/assets/instagram.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <img
                  src="/src/assets/twitter.png"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">

          <p>
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;