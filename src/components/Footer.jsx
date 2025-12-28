import { Github } from "lucide-react";
import { links, clubLinks, contactInfo, socialLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 mt-auto">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white py-12 px-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-lg">
              {links.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Klub Szachowy</h3>
            <ul className="space-y-2 text-lg">
              {clubLinks && clubLinks.length > 0 ? (
                clubLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className=" transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))
              ) : (
                <li> </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-lg">
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className=" transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className=" transition-colors duration-200"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="text-gray-400">
                {contactInfo.address.street}<br />
                {contactInfo.address.city}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center text-white py-6 px-4">
          <p className="text-gray-400 mb-4">
            &copy; 2025 Grandmaster Chess Club. Wszelkie prawa zastrzeżone.
          </p>
          <p className="flex items-center justify-center gap-1 text-sm text-gray-300">
            Created by 
            <span className="text-[var(--color-red)] font-semibold">Itachi</span>
            <span className="text-white font-semibold">Szep</span>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 hover:text-gray-300 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;