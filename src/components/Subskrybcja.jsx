import { useState } from 'react';
import { Check } from 'lucide-react';

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedTier, setSelectedTier] = useState('skoczek');

  const prices = {
    pionek: { monthly: 49, yearly: 470 },
    skoczek: { monthly: 99, yearly: 950 },
    krol: { monthly: 199, yearly: 1910 }
  };

  const tiers = [
    {
      id: 'pionek',
      name: 'Pionek',
      icon: '♟',
      features: [
        'Dostęp do treningów grupowych',
        'Udział w turniejach klubowych',
        'Dostęp do sali szachowej',
        'Newsletter z analizami partii'
      ]
    },
    {
      id: 'skoczek',
      name: 'Skoczek',
      icon: '♞',
      popular: true,
      features: [
        'Wszystko z planu Pionek',
        'Indywidualne konsultacje (2h/miesiąc)',
        'Dostęp do biblioteki szachowej',
        'Analiza partii przez trenera',
        'Priorytetowy zapis na warsztaty'
      ]
    },
    {
      id: 'krol',
      name: 'Król',
      icon: '♚',
      features: [
        'Wszystko z planu Skoczek',
        'Nieograniczone konsultacje',
        'Indywidualny plan treningowy',
        'Udział w wyjazdowych turniejach',
        'Dostęp do ekskluzywnych masterclassów',
        'Osobisty mentor szachowy'
      ]
    }
  ];

  const getPrice = (tierId) => {
    return prices[tierId][billingCycle];
  };

  const getMonthlyPrice = (tierId) => {
    if (billingCycle === 'monthly') {
      return prices[tierId].monthly;
    }
    return Math.round(prices[tierId].yearly / 12);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4  mt-24">
            Wybierz Swoją <span className="text-[var(--color-accent)]">Drogę</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dołącz do naszej społeczności szachistów
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-full p-2 inline-flex gap-2 border border-gray-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Miesięcznie
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Rocznie
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`relative bg-neutral-800/70 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 border ${
                selectedTier === tier.id
                  ? 'border-[var(--color-accent)] shadow-2xl shadow-[var(--color-accent)]/20'
                  : 'border-gray-700 hover:border-[var(--color-accent)]/50'
              } ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[var(--color-accent)] text-white text-sm font-bold px-4 py-1 rounded-full">
                    NAJPOPULARNIEJSZY
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white transition-all duration-500">
                    {getMonthlyPrice(tier.id)}
                  </span>
                  <span className="text-gray-400">zł/mies</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-gray-400 mt-2">
                    Płatność roczna: {getPrice(tier.id)} zł
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedTier === tier.id
                    ? 'bg-[var(--color-accent)] text-white hover:opacity-90'
                    : 'bg-neutral-700 text-white hover:bg-neutral-600'
                }`}
              >
                {selectedTier === tier.id ? 'Wybrany' : 'Wybierz plan'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Wszystkie plany zawierają 14-dniowy okres próbny
          </p>
          <button className="bg-[var(--color-accent)] text-white font-bold px-12 py-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Rozpocznij Teraz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;