import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { name: "Home", to: "home" },
  { name: "Project", to: "project" },
  { name: "About", to: "about" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="
        fixed top-4 left-1/2 -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
        h-16
        px-5 md:px-8
        flex items-center justify-between
        rounded-2xl
        border border-slate-200
        bg-white/70
        backdrop-blur-xl
        shadow-lg shadow-slate-300/20
      "
      >
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
          ISHI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-blue-600"
                className="
                cursor-pointer
                text-slate-700
                font-medium
                relative
                transition-colors
                duration-300
                hover:text-blue-600
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-blue-600
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-slate-700"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden
        fixed
        top-24
        left-1/2
        -translate-x-1/2
        w-[95%]
        rounded-2xl
        bg-white/90
        backdrop-blur-xl
        border border-slate-200
        shadow-xl
        transition-all
        duration-300
        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
      >
        <ul className="flex flex-col items-center py-3">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="
                block
                px-6
                py-4
                text-slate-700
                font-medium
                cursor-pointer
                hover:bg-blue-50
                hover:text-blue-600
                transition-colors
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;