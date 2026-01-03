import { useState } from "react";
import { Calendar, Clock, Users, Trophy, Filter } from "lucide-react";

const Tournaments = () => {
  const [selectedType, setSelectedType] = useState("Wszystkie");
  const [sortBy, setSortBy] = useState("data");

  const tournaments = [
    {
      id: 1,
      name: "Szybki Blitz Mistrzostw",
      type: "Blitz",
      date: "2026-01-15",
      time: "18:00",
      participants: 32,
      maxParticipants: 40,
      prize: "500 PLN",
      description: "Szybki turniej blitz - 3 minuty + 2 sekundy na ruch"
    },
    {
      id: 2,
      name: "Turniej Rapid Weekend",
      type: "Rapid",
      date: "2026-01-20",
      time: "10:00",
      participants: 24,
      maxParticipants: 30,
      prize: "800 PLN",
      description: "Turniej rapid - 15 minut + 10 sekund na ruch"
    },
    {
      id: 3,
      name: "Bullet Mayhem",
      type: "Bullet",
      date: "2026-01-12",
      time: "20:00",
      participants: 45,
      maxParticipants: 50,
      prize: "300 PLN",
      description: "Ekstremalnie szybki turniej - 1 minuta na całą partię"
    },
    {
      id: 4,
      name: "Klasyczny Turniej Mistrzowski",
      type: "Klasyczne",
      date: "2026-02-01",
      time: "09:00",
      participants: 16,
      maxParticipants: 20,
      prize: "2000 PLN",
      description: "Turniej klasyczny - 90 minut + 30 sekund na ruch"
    },
    {
      id: 5,
      name: "Blitz Battle",
      type: "Blitz",
      date: "2026-01-25",
      time: "19:00",
      participants: 28,
      maxParticipants: 35,
      prize: "600 PLN",
      description: "Intensywny turniej blitz dla zaawansowanych"
    },
    {
      id: 6,
      name: "Rapid Championship",
      type: "Rapid",
      date: "2026-02-10",
      time: "11:00",
      participants: 18,
      maxParticipants: 25,
      prize: "1000 PLN",
      description: "Prestiżowy turniej rapid z nagrodami"
    },
    {
      id: 7,
      name: "Speed Bullet Tournament",
      type: "Bullet",
      date: "2026-01-18",
      time: "21:00",
      participants: 40,
      maxParticipants: 50,
      prize: "400 PLN",
      description: "Najszybszy turniej w miesiącu"
    },
    {
      id: 8,
      name: "Grand Prix Klasyczny",
      type: "Klasyczne",
      date: "2026-02-15",
      time: "10:00",
      participants: 12,
      maxParticipants: 16,
      prize: "3000 PLN",
      description: "Elitarny turniej z długim czasem na namysł"
    }
  ];

  const types = ["Wszystkie", "Blitz", "Rapid", "Bullet", "Klasyczne"];

  const typeColors = {
    Blitz: "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/50",
    Rapid: "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/50",
    Bullet: "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/50",
    Klasyczne: "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/50"
  };

  const filteredTournaments = tournaments
    .filter(t => selectedType === "Wszystkie" || t.type === selectedType)
    .sort((a, b) => {
      if (sortBy === "data") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "uczestnicy") {
        return b.participants - a.participants;
      }
      return 0;
    });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 mt-24">
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Nadchodzące <span className="text-[var(--color-accent)]">Turnieje</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dołącz do turniejów szachowych i pokaż swoje umiejętności w różnych formatach rozgrywek
          </p>
        </div>

        {/* Filters */}
        <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Type Filter */}
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
              <div className="flex items-center gap-2 text-gray-300">
                <Filter size={20} />
                <span className="font-semibold">Filtruj po typie:</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      selectedType === type
                        ? 'bg-[var(--color-accent)] text-white scale-105'
                        : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-gray-300 font-semibold">Sortuj:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-neutral-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              >
                <option value="data">Po dacie</option>
                <option value="uczestnicy">Po liczbie uczestników</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map(tournament => (
            <div
              key={tournament.id}
              className="bg-neutral-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--color-accent)]/20"
            >
              {/* Type Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${typeColors[tournament.type]}`}>
                  {tournament.type}
                </span>
                <Trophy size={24} className="text-gray-400" />
              </div>

              {/* Tournament Name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {tournament.name}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {tournament.description}
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={18} className="text-[var(--color-accent)]" />
                  <span>{formatDate(tournament.date)}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock size={18} className="text-[var(--color-accent)]" />
                  <span>{tournament.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users size={18} className="text-[var(--color-accent)]" />
                  <span>{tournament.participants}/{tournament.maxParticipants} uczestników</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Trophy size={18} className="text-[var(--color-accent)]" />
                  <span className="font-semibold text-[var(--color-accent)]">{tournament.prize}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="bg-neutral-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[var(--color-accent)] h-full transition-all duration-500"
                    style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1 text-right">
                  {Math.round((tournament.participants / tournament.maxParticipants) * 100)}% zapełnienia
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[var(--color-accent)] hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                Zapisz się
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTournaments.length === 0 && (
          <div className="text-center py-20">
            <Trophy size={64} className="text-gray-600 mx-auto mb-4" />
            <p className="text-2xl text-gray-400">
              Brak turniejów dla wybranego filtru
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournaments;