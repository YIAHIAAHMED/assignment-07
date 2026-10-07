const Footer = () => {
  return (
    <footer className="bg-[#245646] text-white border-t-2 border-[#2B9C9C]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Main Footer */}
        <div className="text-center py-8">

          <h2 className="text-3xl md:text-4xl font-bold">
            KeenKeeper
          </h2>

          <p className="text-[9px] text-white/60 mt-2">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div className="mt-4">

            <p className="text-[11px] text-white mb-2">
              Social Links
            </p>

            <div className="flex justify-center gap-2">

              {/* YouTube */}
              <a
                href="#"
                className="w-5 h-5 rounded-full bg-white text-[#245646] flex items-center justify-center text-[9px] font-bold hover:bg-gray-200 transition"
              >
                ▶
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-5 h-5 rounded-full bg-white text-[#245646] flex items-center justify-center text-[10px] font-bold hover:bg-gray-200 transition"
              >
                f
              </a>

              {/* X */}
              <a
                href="#"
                className="w-5 h-5 rounded-full bg-white text-[#245646] flex items-center justify-center text-[9px] font-bold hover:bg-gray-200 transition"
              >
                X
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-4">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-[9px] text-white/40">
              © 2026 KeenKeeper. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a
                href="#"
                className="text-[9px] text-white/40 hover:text-white/70 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[9px] text-white/40 hover:text-white/70 transition"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-[9px] text-white/40 hover:text-white/70 transition"
              >
                Cookies
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
