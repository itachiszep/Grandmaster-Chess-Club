import { useForm, ValidationError } from '@formspree/react';
import photo7 from '../images/photo7.jpg?url';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgovzkqd");

  return (
    <>
      <div className="relative w-full h-screen">
        <img 
          src={photo7} 
          alt="Chess hero image" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          
          {state.succeeded ? (
            <div className="w-full max-w-2xl mt-24 px-6 md:px-0">
              <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-8"> 
                <h3 className="text-2xl font-bold mb-4">Dziękujemy za wiadomość!</h3>
                <p className="text-lg">Odpowiemy najszybciej jak to możliwe.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-24 px-6 md:px-0">
              <div className="mb-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Imię i nazwisko"
                  className="w-full bg-transparent border-0 border-b-2 border-white/50 text-white placeholder-white/70 py-3 px-0 focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 text-lg"
                />
                <ValidationError 
                  prefix="Imię"
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 block text-left"
                />
              </div>

              <div className="mb-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Adres e-mail"
                  className="w-full bg-transparent border-0 border-b-2 border-white/50 text-white placeholder-white/70 py-3 px-0 focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 text-lg"
                />
                <ValidationError 
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 block text-left"
                />
              </div>

              <div className="mb-8">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Numer telefonu"
                  pattern="[0-9+\s\-()]*"
                  title="Tylko cyfry, spacje, +, - i nawiasy"
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9+\s\-()]/g, '')}
                  className="w-full bg-transparent border-0 border-b-2 border-white/50 text-white placeholder-white/70 py-3 px-0 focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 text-lg"
                />
                <ValidationError 
                  prefix="Telefon"
                  field="phone"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 block text-left"
                />
              </div>

              <div className="mb-8">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  placeholder="Twoja wiadomość"
                  className="w-full bg-transparent border-0 border-b-2 border-white/50 text-white placeholder-white/70 py-3 px-0 focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 resize-none text-lg"
                ></textarea>
                <ValidationError 
                  prefix="Wiadomość"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1 block text-left"
                />
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={state.submitting}  
                  className="font-bold px-16 py-3 rounded-lg transition bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Wysyłanie...' : 'Wyślij'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Nasza lokalizacja</h2>
          <p className="text-center text-text-muted mb-12 text-lg">Zapraszamy do naszego klubu</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20165.592020039643!2d19.061145600000003!3d50.818215249999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b65b313e7d2b%3A0xb5d8d1eca68b5efe!2sPrimary%20School%20No.%2013!5e0!3m2!1sen!2spl!4v1766926352318!5m2!1sen!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Grandmaster Chess Club"
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Adres</h3>
                <p className="text-text-muted">
                  ul. Wręczycka 111/115<br />
                  42-202 Częstochowa<br />
                  Polska
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Telefon</h3>
                <p className="text-text-muted">
                  <a href="tel:+48343628633" className="hover:text-[var(--color-accent)] transition-colors">
                    +48 34 362 86 33
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">E-mail</h3>
                <p className="text-text-muted">
                  <a href="mailto:kontakt@grandmasterchess.pl" className="hover:text-[var(--color-accent)] transition-colors">
                    kontakt@grandmasterchess.pl
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Godziny otwarcia</h3>
                <p className="text-text-muted">
                  Poniedziałek - Piątek: 14:00 - 22:00<br />
                  Sobota - Niedziela: 10:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;