import React from 'react';
import {
  CheckCircle,
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
} from 'lucide-react';

const Formation: React.FC = () => {
  const formations = [
    {
      title: "DTS – Communication des Entreprises",
      period: '2019 – 2021',
      institution: 'OFPPT ISTA NTIC Sidimarouf 2 – Casablanca',
      icon: GraduationCap,
      description:
        "Formation spécialisée en communication d'entreprise et relation client",
      achievements: [
        'Formation spécialisée en communication d\'entreprise',
        'Techniques de communication orale et écrite',
        'Gestion de la relation client et service clientèle',
        'Maîtrise des outils bureautiques et de communication',
      ],
      skills: ['Communication', 'Relation client', 'Bureautique', 'Rédaction'],
    },
    {
      title: 'Baccalauréat – Sciences Économiques',
      period: '2018 – 2019',
      institution: 'Lycée Ibn Khaldoun – Casablanca',
      icon: BookOpen,
      description:
        'Formation en sciences économiques et gestion',
      achievements: [
        'Formation en sciences économiques et gestion',
        'Développement des compétences analytiques',
        'Bases solides en mathématiques et statistiques',
        'Compréhension des mécanismes économiques',
      ],
      skills: ['Analyse', 'Mathématiques', 'Économie', 'Gestion'],
    },
  ];

  const certifications = [
    {
      icon: Award,
      label: "Diplôme obtenu",
      value: 'DTS',
      color: 'text-blue-600',
    },
    {
      icon: Calendar,
      label: 'Durée formation',
      value: '2 ans',
      color: 'text-green-600',
    },
    {
      icon: GraduationCap,
      label: 'Niveau d\'études',
      value: 'Bac+2',
      color: 'text-purple-600',
    },
    {
      icon: BookOpen,
      label: 'Spécialisation',
      value: 'Communication',
      color: 'text-orange-600',
    },
  ];

  return (
    <section id="formation" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Parcours académique
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Parcours éducatif incluant diplômes et établissements de formation
          </p>
        </div>

        {/* Métriques de formation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <cert.icon className={`w-8 h-8 ${cert.color} mx-auto mb-3`} />
              <div className={`text-2xl font-bold ${cert.color} mb-1`}>
                {cert.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {cert.label}
              </div>
            </div>
          ))}
        </div>

        {/* Formations détaillées */}
        <div className="space-y-8">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <formation.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {formation.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {formation.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {formation.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {formation.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Contenu de la formation :
                      </h4>
                      <ul className="space-y-2">
                        {formation.achievements.map((achievement, i) => (
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
                        Compétences acquises :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formation.skills.map((skill, i) => (
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

export default Formation;

