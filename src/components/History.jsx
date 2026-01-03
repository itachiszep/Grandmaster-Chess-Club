import photo2 from '../images/photo2.jpg?url';
import photo4 from '../images/photo4.jpeg?url';

const History = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-screen">
        <img 
          src={photo2} 
          alt="Chess hero image" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Szachy to coś więcej niż gra
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            to sztuka, nauka i sport w jednym.
          </p>
          <button className="font-bold px-8 py-3 rounded-lg transition">
            Dołącz do nas
          </button>
        </div>
      </div>
      <div className="align-center justify-center flex mt-16 ">
        <img 
          className='border-2 border-board-light rounded-lg' 
          src={photo4} 
          alt="Chess club photo" 
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Opis Klubu</h1>
        <p className="text-lg leading-relaxed">
          Grandmaster Chess Club to miejsce, w którym szachy przestają być tylko grą, a stają się drogą rozwoju umysłu, charakteru i strategicznego myślenia.
          Łączymy tradycję królewskiej gry z nowoczesnym podejściem do nauki i rywalizacji. Nasz klub powstał z pasji do szachów — zarówno tych rozgrywanych przy drewnianej szachownicy w ciszy skupienia, jak i dynamicznych partii turniejowych, w których liczy się precyzja, odwaga i wizja.
          Tworzymy przestrzeń dla graczy na każdym poziomie zaawansowania — od początkujących po ambitnych zawodników, którzy chcą doskonalić swoje umiejętności pod okiem doświadczonych szachistów. Wierzymy, że szachy uczą cierpliwości, odpowiedzialności za decyzje i myślenia kilka ruchów naprzód — nie tylko na planszy, ale i w życiu.
          Grandmaster Chess Club to społeczność, atmosfera skupienia i elegancji oraz szacunek do gry, która od wieków kształtuje największe umysły świata.
        </p>
      </div>
      <div className="align-center justify-center flex mb-16">
        <button 
          onClick={() => window.location.href = '/subskrybcja'}
        className="font-bold px-8 py-3 rounded-lg transition bg-amber-500 hover:bg-amber-400 text-slate-900"
        >   
        Dołącz do nas
      </button>
      </div>
    </div>
  );
};

export default History;