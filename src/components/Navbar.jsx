import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { links } from "../constants/index.js";

const Navbar = ({ currentPath }) => {
  const [open, setOpen] = useState(false);
  const isActive = (path) => currentPath === path;

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl text-[var(--color-accent)] font-bold whitespace-nowrap">
            Grandmaster Chess Club
          </h1>
        </div>
        <ul className="text-xl hidden lg:flex gap-6 absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
          {links.map((link) => (
            <li key={link.href} className="whitespace-nowrap">
              <a 
                className={`transition ${isActive(link.href) ? 'text-[var(--color-accent)] font-bold' : ''}`} 
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden !text-white !bg-transparent flex-shrink-0"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="text-xl lg:hidden text-center px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className={`transition ${isActive(link.href) ? 'text-[var(--color-accent)] font-bold' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;