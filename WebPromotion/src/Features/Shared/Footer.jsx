import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Footer() {
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "ALL PRODUCTS", href: "/products" },
    { label: "FAQ", href: "/faq" },
    { label: "GUIDELINES", href: "/guidelines" },
  ];

  return (
    <section className="w-full py-8 md:py-4 bg-[#BF9398] px-4 md:px-16">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl px-8 py-10 md:px-10 md:py-6 shadow-sm">

        {/* MOBILE: stacked layout */}
        <div className="flex flex-col md:hidden">
          {/* LOGO */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="logo" className="w-32 object-contain" />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-6">
            {/* LINKS */}
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-bold mb-1">LINKS</p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-medium underline hover:text-[#8B333D] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* LOCATION */}
            <div className="text-sm">
              <p className="font-bold mb-2">LOCATION</p>
              <p className="mb-1">Contact No.: +63 XXXXX</p>
              <p className="leading-snug">Phase 4 Pkg 2 Blk 15 Lot 4 Brgy 176 Caloocan</p>
            </div>

            {/* SOCIAL */}
            <div className="col-span-2 text-sm flex flex-col gap-3">
              <p className="font-bold">SOCIAL</p>
              <p className="leading-snug">Contact us on Facebook & Messenger:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100070071061317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
                >f</a>
                <a
                  href="https://www.facebook.com/profile.php?id=100070071061317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:scale-110 transition"
                >💬</a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            Athalia Essentials ©2026. All rights reserved.
          </div>
        </div>

        {/* MD+: single row layout */}
        <div className="hidden md:flex md:flex-row md:items-center md:gap-8">
          
          {/* LOGO */}
          <div className="shrink-0">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-1 text-sm min-w-30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-medium underline hover:text-[#8B333D] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="w-px self-stretch bg-gray-200" />

          {/* LOCATION */}
          <div className="text-sm flex-1">
            <p className="font-bold mb-1">LOCATION</p>
            <p className="mb-0.5">Contact No.: +63 XXXXX</p>
            <p className="leading-snug">Phase 4 Pkg 2 Blk 15 Lot 4 Brgy 176 Caloocan</p>
          </div>

          {/* DIVIDER */}
          <div className="w-px self-stretch bg-gray-200" />

          {/* SOCIAL */}
          <div className="text-sm shrink-0">
            <p className="font-bold mb-1">SOCIAL</p>
            <p className="leading-snug mb-2">Contact us on Facebook & Messenger:</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100070071061317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
              >f</a>
              <a
                href="https://www.facebook.com/profile.php?id=100070071061317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-black hover:scale-110 transition"
              >💬</a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT md only */}
        <div className="hidden md:block mt-4 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
          Athalia Essentials ©2026. All rights reserved.
        </div>

      </div>
    </section>
  );
}

export default Footer;