import { useState, useEffect } from "react";
import { X, Mail, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już widział newsletter
    const hasSeenNewsletter = localStorage.getItem('newsletterShown');
    const newsletterSubmitted = localStorage.getItem('newsletterSubmitted');
    
    if (hasSeenNewsletter || newsletterSubmitted) {
      console.log('Newsletter już pokazany lub zapisany');
      return;
    }

    let timeoutId;
    let exitIntentTriggered = false;

    // Exit-intent detection
    const handleMouseMove = (e) => {
      // Wykryj wyjście kursora z górnej części strony (exit-intent)
      if (e.clientY <= 10 && !exitIntentTriggered && !hasSeenNewsletter) {
        exitIntentTriggered = true;
        setShowNewsletter(true);
        localStorage.setItem('newsletterShown', 'true');
        console.log('Exit-intent triggered!');
      }
    };

    // Fallback: pokaż po 15 sekundach jeśli nie było exit-intent
    timeoutId = setTimeout(() => {
      if (!exitIntentTriggered && !hasSeenNewsletter) {
        setShowNewsletter(true);
        localStorage.setItem('newsletterShown', 'true');
        console.log('Timeout triggered after 15s');
      }
    }, 15000);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = () => {
    setShowNewsletter(false);
  };

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      localStorage.setItem('newsletterSubmitted', 'true');
      
      setTimeout(() => {
        setShowNewsletter(false);
      }, 2500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (!showNewsletter) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      style={{
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(4px)'
      }}
      onClick={handleClose}
    >
      <div 
        className="relative bg-neutral-800/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full border border-gray-700 p-8 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 hover:rotate-90 transform transition-transform"
          aria-label="Zamknij"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex justify-center mb-6">
              <div className="bg-[var(--color-accent)]/20 p-4 rounded-full">
                <Mail size={48} className="text-[var(--color-accent)]" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white text-center mb-3">
              Dołącz do Naszej Społeczności
            </h2>
            
            <p className="text-gray-300 text-center mb-6">
              Otrzymuj najnowsze informacje o turniejach, treningach i wydarzeniach szachowych
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Twój adres email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[var(--color-accent)] hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Zapisz się do Newslettera
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Możesz zrezygnować w każdej chwili. Szanujemy Twoją prywatność.
            </p>
          </>
        ) : (
          <div className="text-center py-8 animate-fadeIn">
            <div className="flex justify-center mb-4">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Dziękujemy!
            </h3>
            <p className="text-gray-300">
              Potwierdzenie zostało wysłane na Twój email
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Newsletter;