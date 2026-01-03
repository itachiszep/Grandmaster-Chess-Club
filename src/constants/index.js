import photo2 from '../images/photo2.jpg?url';
import photo4 from '../images/photo4.jpeg?url';

export const links = [
  { name: 'Home', href: '/' },
  { name: 'Historia', href: '/historia' },
  { name: 'Kontakt', href: '/kontakt' }
  
];

export const clubLinks = [
  { name: 'O klubie', href: '/o-klubie' },
  { name: 'Członkowie', href: '/czlonkowie' },
  { name: 'Turnieje', href: '/turnieje' },
  { name: 'Zajęcia', href: '/zajecia' }
];



export const contactInfo = {
  email: 'kontakt@grandmasterchess.pl',
  phone: '+48343628633',
  phoneDisplay: '+48 34 362 86 33',
  address: {
    street: 'ul. Wręczycka 111/115',
    city: '42-202 Częstochowa'
  }
};

export const socialLinks = {
  github: 'https://github.com/itachiszep'
};

export const images = {
  bannerHero: photo2,
  historyHero: photo2,
  clubPhoto: photo4
};

export const heroCards = [
  {
    icon: 'Trophy',
    title: 'Turnieje',
    description: 'Weź udział w regularnych turniejach szachowych dla wszystkich poziomów zaawansowania.'
  },
  {
    icon: 'BookOpen',
    title: 'Nauka',
    description: 'Rozwijaj swoje umiejętności pod okiem doświadczonych trenerów i arcymistrzów.'
  },
  {
    icon: 'Coffee',
    title: 'Kawiarnia',
    description: 'Relaksuj się przy kawie i graj w szachy w przyjaznej, klubowej atmosferze.'
  }
];