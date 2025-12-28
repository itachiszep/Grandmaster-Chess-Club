import React from 'react';
import { Trophy, BookOpen, Coffee } from 'lucide-react';
import { heroCards } from '../constants/index.js';

const Hero = () => {
  const iconMap = {
    Trophy: Trophy,
    BookOpen: BookOpen,
    Coffee: Coffee
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heroCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <div 
                key={index}
                className="bg-surface border-2 border-board-light rounded-lg p-8 hover:bg-surface-elevated transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-accent p-4 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-background" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-text">
                    {card.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;