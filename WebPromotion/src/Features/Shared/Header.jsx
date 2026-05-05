import logo from "../../assets/images/logo.svg";
import {
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navBar = [
    { label: "Home",         href: "/"           },
    { label: "About Us",     href: "/About"      },
    { label: "All Products", href: "/Products"   },
    { label: "FAQ",          href: "/faq"        },
  ];

  const navStyle = "px-4 py-2 rounded-md font-inter text-base md:text-lg transition-colors duration-200 hover:bg-[#8b333d] hover:text-white";

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      {/* DESKTOP / TABLET BAR */}
      <div className="w-full mx-auto px-3 flex justify-between items-center">

        {/* LOGO — slightly bigger */}
        <img
          className="h-28 w-40 md:w-auto object-contain md:ml-30"
          src={logo}
          alt="Logo"
        />

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-15 mr-30">
          <nav>
            <ul className="flex gap-8 text-lg">
              {navBar.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={navStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/guidelines">
            <QuestionMarkCircleIcon className="h-8 hover:text-orange-500 transition" />
          </Link>
          
        </div>

        {/* BURGER BUTTON — mobile only */}
        <button
          className="md:hidden text-[#8B333D] shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4">
          <nav>
            <ul className="flex flex-col gap-4 text-lg">
              {navBar.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={navStyle}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/guidelines" className={navStyle} onClick={() => setIsOpen(false)}>
            Guidelines
          </Link>
       
        </div>
      )}
    </header>
  );
}