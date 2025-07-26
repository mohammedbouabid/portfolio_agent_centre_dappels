import React from 'react';
import {
  CheckCircle,
  Phone,
  MessageSquare,
  Users,
  Clock,
  Award,
} from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Simulation - Gestion d'appels clients insatisfaits",
      period: 'Projet de formation',
      icon: Phone,
      description:
        "Gestion d'une série d'appels de clients mécontents concernant des problèmes de facturation",
      achievements: [
        'Résolution de 95% des cas au premier contact',
        'Amélioration de la satisfaction client de 3.2/5 à 4.8/5',
        "Réduction du temps moyen d'appel à 4 minutes",
        'Aucune escalade vers la supervision',
      ],
      skills: ['Écoute active', 'Gestion du stress', 'Négociation', 'Empathie'],
    },
    {
      title: 'Projet - Support technique multilingue',
      period: 'Étude de cas',
      icon: MessageSquare,
      description:
        'Assistance technique pour des clients francophones et anglophones sur des produits informatiques',
      achievements: [
        'Traitement de 40+ tickets par jour',
        'Taux de résolution de 92% en première interaction',
        'Score de satisfaction client : 4.7/5',
        'Création de 5 guides de résolution rapide',
      ],
      skills: ['Support technique', 'Bilinguisme', 'Documentation', 'Patience'],
    },
    {
      title: 'Formation - Relation client et vente',
      period: '3 mois - Certifiée',
      icon: Award,
      description:
        "Formation intensive en techniques de communication, gestion d'objections et vente consultative",
      achievements: [
        'Certification en relation client (95/100)',
        "Maîtrise des techniques d'écoute active",
        'Formation aux outils CRM modernes',
        'Simulation de 100+ appels clients',
      ],
      skills: ['Vente consultative', 'CRM', 'Communication', 'Argumentation'],
    },
  ];

  const metrics = [
    {
      icon: Clock,
      label: "Temps moyen d'appel",
      value: '4 min',
      color: 'text-blue-600',
    },
    {
      icon: CheckCircle,
      label: 'Taux de résolution',
      value: '95%',
      color: 'text-green-600',
    },
    {
      icon: Users,
      label: 'Satisfaction client',
      value: '4.8/5',
      color: 'text-purple-600',
    },
    {
      icon: Phone,
      label: 'Appels traités',
      value: '500+',
      color: 'text-orange-600',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Expérience & Projets
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Projets simulés et formations pour démontrer mes compétences en
            relation client
          </p>
        </div>

        {/* Métriques de performance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expériences détaillées */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <exp.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Résultats obtenus :
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Compétences développées :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
