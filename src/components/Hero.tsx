import React from 'react';
import { ChevronDown, MapPin, Clock, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#apropos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Photo professionnelle */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1753533479~exp=1753537079~hmac=d6f9585ef981b6c4c078c142d12e720a504d315fa67d506d84520693e9e792f2&w=1380"
                  alt="Photo professionnelle"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Présentation */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-blue-600 dark:text-blue-400">Souad </span> El Amrani
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Candidate motivée pour le poste d'
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Agent de Centre d'Appels
            </span>{' '}
          </p>

          {/* Call to action */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Disponible immédiatement • Français courant • Anglais apprécié
            </p>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir mon profil
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
