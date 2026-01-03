import { useState } from "react";
import { Search, Users, Trophy, Crown } from "lucide-react";

const Members = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    { id: 1, name: "Adam Towarek", elo: 800, rank: "Początkujący" },
    { id: 2, name: "Anna Kowalska", elo: 1450, rank: "Średniozaawansowany" },
    { id: 3, name: "Bartosz Nowak", elo: 1820, rank: "Zaawansowany" },
    { id: 4, name: "Celina Wiśniewska", elo: 2100, rank: "Ekspert" },
    { id: 5, name: "Damian Lewandowski", elo: 1650, rank: "Średniozaawansowany" },
    { id: 6, name: "Ewa Kamińska", elo: 1950, rank: "Zaawansowany" },
    { id: 7, name: "Filip Zieliński", elo: 2250, rank: "Mistrz" },
    { id: 8, name: "Grzegorz Szymański", elo: 1300, rank: "Początkujący" },
    { id: 9, name: "Helena Dąbrowska", elo: 1780, rank: "Zaawansowany" },
    { id: 10, name: "Igor Woźniak", elo: 2050, rank: "Ekspert" },
    { id: 11, name: "Joanna Kozłowska", elo: 1520, rank: "Średniozaawansowany" },
    { id: 12, name: "Krzysztof Jankowski", elo: 2180, rank: "Ekspert" },
    { id: 13, name: "Laura Wojciechowska", elo: 1890, rank: "Zaawansowany" },
    { id: 14, name: "Michał Kamiński", elo: 1420, rank: "Średniozaawansowany" },
    { id: 15, name: "Natalia Krawczyk", elo: 2300, rank: "Mistrz" },
    { id: 16, name: "Oskar Piotrowski", elo: 1680, rank: "Średniozaawansowany" },
    { id: 17, name: "Patrycja Grabowska", elo: 1950, rank: "Zaawansowany" },
    { id: 18, name: "Robert Pawłowski", elo: 2150, rank: "Ekspert" },
    { id: 19, name: "Sara Michalska", elo: 1550, rank: "Średniozaawansowany" },
    { id: 20, name: "Tomasz Zając", elo: 1850, rank: "Zaawansowany" }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRankColor = (elo) => {
    if (elo >= 2200) return "text-purple-400";
    if (elo >= 2000) return "text-yellow-400";
    if (elo >= 1800) return "text-blue-400";
    if (elo >= 1400) return "text-green-400";
    return "text-gray-400";
  };

  const getRankIcon = (elo) => {
    if (elo >= 2200) return <Crown size={20} className="text-purple-400" />;
    if (elo >= 2000) return <Trophy size={20} className="text-yellow-400" />;
    return <Users size={20} className="text-gray-400" />;
  };

  // Sortowanie po ELO malejąco
  const sortedMembers = [...filteredMembers].sort((a, b) => b.elo - a.elo);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users size={64} className="text-[var(--color-accent)]" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Nasi <span className="text-[var(--color-accent)]">Członkowie</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Lista wszystkich członków klubu wraz z ich rankingiem ELO
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Wyszukaj członka po imieniu..."
              className="w-full pl-12 pr-4 py-3 bg-neutral-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
            />
          </div>

          {/* Results count */}
          <p className="text-gray-400 mt-4">
            Znaleziono: <span className="text-[var(--color-accent)] font-semibold">{sortedMembers.length}</span> {sortedMembers.length === 1 ? 'członek' : 'członków'}
          </p>
        </div>

        {/* Members List */}
        <div className="space-y-4">
          {sortedMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-neutral-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-[var(--color-accent)]/10"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* Rank Number */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center">
                    <span className="text-xl font-bold text-[var(--color-accent)]">
                      #{index + 1}
                    </span>
                  </div>

                  {/* Name and Rank */}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {getRankIcon(member.elo)}
                      <span className={`text-sm font-semibold ${getRankColor(member.elo)}`}>
                        {member.rank}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ELO Score */}
                <div className="flex items-center gap-3 bg-neutral-900/50 px-6 py-3 rounded-lg">
                  <span className="text-gray-400 font-semibold">ELO:</span>
                  <span className={`text-3xl font-bold ${getRankColor(member.elo)}`}>
                    {member.elo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedMembers.length === 0 && (
          <div className="text-center py-20">
            <Users size={64} className="text-gray-600 mx-auto mb-4" />
            <p className="text-2xl text-gray-400 mb-2">
              Nie znaleziono członków
            </p>
            <p className="text-gray-500">
              Spróbuj wyszukać innego członka
            </p>
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Trophy size={24} className="text-[var(--color-accent)]" />
            Legenda Rankingów
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Crown size={20} className="text-purple-400" />
              <span className="text-purple-400 font-semibold">Mistrz (2200+)</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy size={20} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Ekspert (2000-2199)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-blue-400" />
              <span className="text-blue-400 font-semibold">Zaawansowany (1800-1999)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-400" />
              <span className="text-green-400 font-semibold">Średniozaawansowany (1400-1799)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-gray-400" />
              <span className="text-gray-400 font-semibold">Początkujący (&lt;1400)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;