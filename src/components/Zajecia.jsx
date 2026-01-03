import { useState } from "react";
import { Calendar, Clock, Users, MapPin, ChevronDown, ChevronUp } from "lucide-react";

const Classes = () => {
  const [expandedClass, setExpandedClass] = useState(null);

  const schedule = {
    "Poniedziałek": [
      {
        id: 1,
        time: "16:00 - 17:30",
        name: "Zajęcia dla Początkujących",
        instructor: "Anna Kowalska",
        level: "Początkujący",
        participants: "12/15",
        room: "Sala A",
        description: "Podstawy gry w szachy, otwarcia, taktyka dla początkujących. Idealne dla osób, które dopiero rozpoczynają przygodę z szachami.",
        topics: ["Podstawy ruchów", "Proste kombinacje", "Obrona króla"]
      },
      {
        id: 2,
        time: "18:00 - 19:30",
        name: "Zaawansowana Taktyka",
        instructor: "Krzysztof Jankowski",
        level: "Zaawansowany",
        participants: "8/10",
        room: "Sala B",
        description: "Zaawansowane kombinacje taktyczne, studia końcówek, analiza partii mistrzowskich.",
        topics: ["Kombinacje matowe", "Końcówki wieżowe", "Analiza partii"]
      }
    ],
    "Wtorek": [
      {
        id: 3,
        time: "17:00 - 18:30",
        name: "Zajęcia dla Dzieci",
        instructor: "Michał Kamiński",
        level: "Dzieci 6-12 lat",
        participants: "15/15",
        room: "Sala C",
        description: "Zajęcia dla dzieci w formie zabawy. Nauka podstaw szachów przez gry i zadania taktyczne.",
        topics: ["Zabawy szachowe", "Mini turnieje", "Nagrody i motywacja"]
      },
      {
        id: 4,
        time: "19:00 - 20:30",
        name: "Blitz Training",
        instructor: "Filip Zieliński",
        level: "Średniozaawansowany",
        participants: "10/12",
        room: "Sala A",
        description: "Intensywny trening szybkich partii blitz. Rozwój szybkiego myślenia i intuicji szachowej.",
        topics: ["Gry blitz 3+2", "Analiza błędów", "Trening czasowy"]
      }
    ],
    "Środa": [
      {
        id: 5,
        time: "16:00 - 17:30",
        name: "Otwarcia Szachowe",
        instructor: "Celina Wiśniewska",
        level: "Średniozaawansowany",
        participants: "9/12",
        room: "Sala B",
        description: "Szczegółowe omówienie popularnych otwarć szachowych. Teoria i praktyka.",
        topics: ["Obrona Sycylijska", "Gambity", "Otwarcia zamknięte"]
      },
      {
        id: 6,
        time: "18:00 - 19:30",
        name: "Turniej Klubowy",
        instructor: "Robert Pawłowski",
        level: "Wszystkie poziomy",
        participants: "20/24",
        room: "Sala Główna",
        description: "Cotygodniowy turniej klubowy. Gra turniejowa z kontrolą czasu 15+10.",
        topics: ["Partia turniejowa", "Ranking klubowy", "Nagrody"]
      }
    ],
    "Czwartek": [
      {
        id: 7,
        time: "17:00 - 18:30",
        name: "Końcówki Szachowe",
        instructor: "Igor Woźniak",
        level: "Zaawansowany",
        participants: "7/10",
        room: "Sala A",
        description: "Zaawansowane studia końcówek. Technika realizacji przewagi materialnej.",
        topics: ["Końcówki pionowe", "Końcówki wieżowe", "Teoria Philidora"]
      },
      {
        id: 8,
        time: "19:00 - 20:30",
        name: "Analiza Partii",
        instructor: "Natalia Krawczyk",
        level: "Ekspert",
        participants: "6/8",
        room: "Sala B",
        description: "Szczegółowa analiza partii członków klubu. Identyfikacja błędów i obszarów do poprawy.",
        topics: ["Analiza z komputerem", "Plany strategiczne", "Typowe błędy"]
      }
    ],
    "Piątek": [
      {
        id: 9,
        time: "16:00 - 17:30",
        name: "Szachy dla Seniorów",
        instructor: "Bartosz Nowak",
        level: "Początkujący/Średniozaawansowany",
        participants: "10/12",
        room: "Sala C",
        description: "Zajęcia dostosowane do tempa seniorów. Przyjazna atmosfera i nauka w komfortowym tempie.",
        topics: ["Powtórka podstaw", "Gra towarzyska", "Analiza partii"]
      },
      {
        id: 10,
        time: "18:00 - 20:00",
        name: "Wieczór Gry Swobodnej",
        instructor: "Wolny dostęp",
        level: "Wszystkie poziomy",
        participants: "∞",
        room: "Wszystkie sale",
        description: "Swobodna gra między członkami klubu. Brak prowadzącego - przyjdź i graj!",
        topics: ["Gry towarzyskie", "Simultanka", "Networking"]
      }
    ],
    "Sobota": [
      {
        id: 11,
        time: "10:00 - 12:00",
        name: "Warsztaty Weekendowe",
        instructor: "Filip Zieliński",
        level: "Wszystkie poziomy",
        participants: "18/20",
        room: "Sala Główna",
        description: "Dwugodzinne warsztaty tematyczne. Każdy weekend inny temat szachowy.",
        topics: ["Temat weekendu", "Praktyka", "Q&A"]
      },
      {
        id: 12,
        time: "14:00 - 16:00",
        name: "Turniej Rapid",
        instructor: "Natalia Krawczyk",
        level: "Wszystkie poziomy",
        participants: "16/20",
        room: "Sala Główna",
        description: "Cotygodniowy turniej rapid (15+10). Oficjalny ranking klubowy.",
        topics: ["Gra rapid", "Punktacja rankingowa", "Ceremonia nagród"]
      }
    ],
    "Niedziela": [
      {
        id: 13,
        time: "11:00 - 13:00",
        name: "Szachy Rodzinne",
        instructor: "Damian Lewandowski",
        level: "Rodziny",
        participants: "12/15",
        room: "Sala C",
        description: "Zajęcia dla całych rodzin. Nauka i zabawa razem z dziećmi.",
        topics: ["Gry rodzinne", "Zadania dla dzieci", "Wspólna nauka"]
      }
    ]
  };

  const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

  const getLevelColor = (level) => {
    if (level.includes("Początkujący")) return "bg-green-500/20 text-green-400 border-green-500/50";
    if (level.includes("Średniozaawansowany")) return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    if (level.includes("Zaawansowany")) return "bg-purple-500/20 text-purple-400 border-purple-500/50";
    if (level.includes("Ekspert")) return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    if (level.includes("Dzieci")) return "bg-pink-500/20 text-pink-400 border-pink-500/50";
    return "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/50";
  };

  const toggleClass = (classId) => {
    setExpandedClass(expandedClass === classId ? null : classId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
             
          </div>
          <h1 className="text-5xl font-bold text-white mt-24">
            Grafik <span className="text-[var(--color-accent)]">Zajęć</span>
          </h1>
          
        </div>

        {/* Weekly Schedule */}
        <div className="space-y-8">
          {days.map((day) => (
            <div key={day} className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              {/* Day Header */}
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-[var(--color-accent)] rounded-full"></div>
                {day}
              </h2>

              {/* Classes for this day */}
              <div className="space-y-4">
                {schedule[day] && schedule[day].length > 0 ? (
                  schedule[day].map((classItem) => (
                    <div
                      key={classItem.id}
                      className="bg-neutral-900/50 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]"
                    >
                      {/* Class Header - Clickable */}
                      <div
                        onClick={() => toggleClass(classItem.id)}
                        className="p-5 cursor-pointer hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex items-center gap-4 flex-1">
                            {/* Time */}
                            <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold min-w-[140px]">
                              <Clock size={20} />
                              <span>{classItem.time}</span>
                            </div>

                            {/* Class Info */}
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {classItem.name}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                Prowadzący: {classItem.instructor}
                              </p>
                            </div>
                          </div>

                          {/* Level Badge & Expand Icon */}
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getLevelColor(classItem.level)}`}>
                              {classItem.level}
                            </span>
                            {expandedClass === classItem.id ? (
                              <ChevronUp size={24} className="text-[var(--color-accent)]" />
                            ) : (
                              <ChevronDown size={24} className="text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          expandedClass === classItem.id
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-5 pb-5 border-t border-gray-700 pt-4">
                          {/* Description */}
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {classItem.description}
                          </p>

                          {/* Details Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Users size={18} className="text-[var(--color-accent)]" />
                              <span className="text-sm">
                                Uczestnicy: <span className="font-semibold">{classItem.participants}</span>
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPin size={18} className="text-[var(--color-accent)]" />
                              <span className="text-sm">
                                Lokalizacja: <span className="font-semibold">{classItem.room}</span>
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Clock size={18} className="text-[var(--color-accent)]" />
                              <span className="text-sm">
                                Czas trwania: <span className="font-semibold">90 min</span>
                              </span>
                            </div>
                          </div>

                          {/* Topics */}
                          <div className="bg-neutral-800/50 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                              <div className="w-1 h-4 bg-[var(--color-accent)] rounded-full"></div>
                              Tematy zajęć:
                            </h4>
                            <ul className="space-y-1">
                              {classItem.topics.map((topic, index) => (
                                <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Button */}
                          <button className="mt-4 w-full bg-[var(--color-accent)] hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105">
                            Zapisz się na zajęcia
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">Brak zajęć w tym dniu</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;