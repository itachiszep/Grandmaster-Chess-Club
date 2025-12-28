import photo2 from '../images/photo2.jpg?url';

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={photo2} 
        alt="Chess hero image" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 ">
        <h1 className="text-5xl md:text-5xl font-bold mb-4">
          Klub Szachowy
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Pasja, strategia, wspólnota
        </p>
        <button className=" font-bold px-8 py-3 rounded-lg transition">
          Dołącz do nas
        </button>
      </div>
    </div>
  );
};

export default Banner;