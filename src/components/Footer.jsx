import { Github, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Historia', href: '/historia' },
    { name: 'Kontakt', href: '/kontakt' }
  ];

  const clubLinks = [
    { name: 'O klubie', href: '/o-klubie' },
    { name: 'Członkowie', href: '/czlonkowie' },
    { name: 'Turnieje', href: '/turnieje' },
    { name: 'Zajęcia', href: '/zajecia' }
  ];

  const contactInfo = {
    email: 'kontakt@grandmasterchess.pl',
    phone: '+48343628633',
    phoneDisplay: '+48 34 362 86 33',
    address: {
      street: 'ul. Wręczycka 111/115',
      city: '42-202 Częstochowa'
    }
  };

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/itachiszep'
  };
  
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
                    className="transition-colors duration-200 hover:text-gray-300"
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
                      className="transition-colors duration-200 hover:text-gray-300"
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
                  className="transition-colors duration-200 hover:text-gray-300"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="transition-colors duration-200 hover:text-gray-300"
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
            &copy; {currentYear} Grandmaster Chess Club. Wszelkie prawa zastrzeżone.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-4">
            <a 
              href={socialLinks.facebook || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href={socialLinks.instagram || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={socialLinks.twitter || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href={socialLinks.linkedin || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
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