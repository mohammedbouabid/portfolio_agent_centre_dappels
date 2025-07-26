import React from 'react';
import {
  MessageCircle,
  Monitor,
  Clock,
  Users,
  Headphones,
  Brain,
  FileText,
  Database,
} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      icon: MessageCircle,
      title: 'Communication verbale en français',
      level: 95,
      description: 'Expression claire, ton professionnel, adaptation au client',
    },
    {
      icon: Monitor,
      title: 'Outils informatiques',
      level: 88,
      description: 'Word, Excel, logiciels CRM, navigateurs web',
    },
    {
      icon: Database,
      title: 'Logiciels CRM',
      level: 82,
      description: 'Gestion des données clients, suivi des interactions',
    },
    {
      icon: FileText,
      title: 'Rédaction professionnelle',
      level: 90,
      description: 'Emails, rapports, notes de suivi client',
    },
  ];

  const softSkills = [
    {
      icon: Headphones,
      title: 'Écoute active',
      level: 95,
      description: 'Comprendre les besoins réels du client',
    },
    {
      icon: Brain,
      title: 'Gestion du stress',
      level: 87,
      description: 'Rester calme dans toutes les situations',
    },
    {
      icon: Clock,
      title: 'Gestion du temps',
      level: 92,
      description: 'Multitâche et respect des délais',
    },
    {
      icon: Users,
      title: "Travail d'équipe",
      level: 94,
      description: 'Collaboration et entraide',
    },
  ];

  const SkillCard: React.FC<{
    skill: (typeof technicalSkills)[0];
    index: number;
  }> = ({ skill, index }) => (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {skill.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="competences" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Mes compétences
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-600 max-w-2xl mx-auto">
            Un ensemble de compétences techniques et humaines pour exceller dans
            le service client
          </p>
        </div>

        {/* Compétences techniques */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Compétences techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Compétences comportementales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index + 4} />
            ))}
          </div>
        </div>

        {/* Langues */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Compétences linguistiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🇫🇷</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Français
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Courant</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-green-500 rounded-full mx-1"
                  ></div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Anglais
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Niveau intermédiaire
              </p>
              <div className="flex justify-center">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-blue-500 rounded-full mx-1"
                  ></div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mx-1"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
