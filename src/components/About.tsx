import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    {
      icon: Heart,
      title: 'Empathie',
      description: 'Comprendre et répondre aux besoins des clients avec bienveillance'
    },
    {
      icon: Target,
      title: 'Orientée résultats',
      description: 'Atteindre les objectifs fixés tout en maintenant la satisfaction client'
    },
    {
      icon: Users,
      title: 'Esprit d\'équipe',
      description: 'Collaborer efficacement avec mes collègues pour un service optimal'
    },
    {
      icon: Zap,
      title: 'Réactivité',
      description: 'Répondre rapidement et efficacement aux demandes des clients'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte de présentation */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Ma motivation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Passionnée par la relation client, je souhaite mettre mes compétences en communication 
                et mon sens du service au profit de votre centre d'appels. Mon objectif est de 
                contribuer à l'excellence de votre service client tout en développant mes compétences 
                dans un environnement dynamique.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mon approche centrée sur l'écoute active et la résolution de problèmes me permet 
                de transformer chaque interaction client en une expérience positive, contribuant 
                ainsi à la fidélisation et à la satisfaction de votre clientèle.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Pourquoi le centre d'appels ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Le métier d'agent de centre d'appels allie ma passion pour la communication, 
                mon goût du challenge quotidien et mon désir d'aider les autres. Chaque appel 
                est une opportunité de créer une connexion humaine et de résoudre les 
                préoccupations des clients avec professionnalisme et empathie.
              </p>
            </div>
          </div>

          {/* Qualités humaines et professionnelles */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Mes qualités principales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                      <quality.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {quality.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Citation motivante */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            "Un service client exceptionnel n'est pas le résultat du hasard, 
            c'est le fruit d'un engagement personnel envers l'excellence."
          </blockquote>
          <p className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">- Ma philosophie de travail</p>
        </div>
      </div>
    </section>
  );
};

export default About;