import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const items = [
  { name: "HOME", to: "home" },
  { name: "PROJECT", to: "project" },
  { name: "ABOUT", to: "about" },
  { name: "CONTACT", to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[70%] md:w-[80%] max-w-7xl h-16 px-6 flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/10 ">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold bg-linear-to-l from-purple-500 to-indigo-500 text-transparent bg-clip-text tracking-wide transition-transform duration-300 hover:scale-105 cursor-pointer">
        ISHI
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {items.map((item) => (
          <li
            key={item.to}
            className="relative cursor-pointer font-medium text-slate-700 transition-colors duration-300 hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            <Link
              to={item.to}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              activeClass="text-blue-500"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg hover:bg-white/50 transition duration-300"
      >
        {open ? <RxCross2 size={26} /> : <GiHamburgerMenu size={26} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 mt-4 w-full rounded-2xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl overflow-hidden md:hidden transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-2">
          {items.map((item) => (
            <li
              key={item.to}
              className="py-4 text-center font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-500 transition-all duration-300"
            >
              <Link
                to={item.to}
                smooth={true}
                spy={true}
                duration={500}
                offset={-80}
                activeClass="text-blue-500"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;