import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de Salma. Posez-moi vos questions sur son profil. 😊",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const faqResponses: { [key: string]: string } = {
    nom: "Je m'appelle Salma El Mansouri, candidate pour le poste d'Agent de Centre d'Appels à Casablanca.",
    competences:
      'Mes principales compétences incluent : communication excellente en français, maîtrise des outils CRM, gestion du stress, écoute active, et travail en équipe.',
    experience:
      "J'ai réalisé plusieurs projets simulés en relation client avec des taux de satisfaction de 4.8/5 et une résolution de 95% des cas au premier contact.",
    disponibilite:
      'Je suis disponible immédiatement pour commencer, en temps plein (40h/semaine) avec des horaires flexibles.',
    langues:
      "Je parle français couramment (langue maternelle) et j'ai un niveau intermédiaire en anglais.",
    salaire:
      'Le poste proposé offre un salaire à partir de 5000 MAD/mois plus primes, ce qui correspond à mes attentes.',
    formation:
      "J'ai suivi une formation certifiée en relation client (95/100) et j'ai de l'expérience avec les outils CRM modernes.",
    motivation:
      "Je suis passionnée par la relation client et souhaite contribuer à l'excellence du service tout en développant mes compétences.",
    contact:
      'Vous pouvez me contacter au +212 6 12 34 56 78 ou par email à salma.elmansouri@gmail.com. Je réponds rapidement !',
    cv: 'Mon CV complet est disponible au téléchargement dans la section Contact. Il détaille toute mon expérience et mes formations.',
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(faqResponses)) {
      if (
        message.includes(key) ||
        (key === 'competences' &&
          (message.includes('compétence') || message.includes('skill'))) ||
        (key === 'experience' &&
          (message.includes('expérience') || message.includes('projet'))) ||
        (key === 'disponibilite' &&
          (message.includes('disponible') || message.includes('dispo'))) ||
        (key === 'langues' &&
          (message.includes('langue') ||
            message.includes('français') ||
            message.includes('anglais'))) ||
        (key === 'formation' &&
          (message.includes('formation') || message.includes('étude'))) ||
        (key === 'contact' &&
          (message.includes('contacter') ||
            message.includes('téléphone') ||
            message.includes('email')))
      ) {
        return response;
      }
    }

    // Réponses pour des salutations
    if (
      message.includes('bonjour') ||
      message.includes('salut') ||
      message.includes('hello')
    ) {
      return "Bonjour ! Ravi de vous parler. Comment puis-je vous aider à en savoir plus sur le profil d'Amina ?";
    }

    if (message.includes('merci')) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions sur Amina.";
    }

    // Réponse par défaut
    return "Je peux vous renseigner sur : les compétences d'Amina, son expérience, sa disponibilité, ses langues, sa formation, ses motivations, ou ses coordonnées. Que souhaitez-vous savoir ?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulation de délai de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'Quelles sont ses compétences ?',
    'Quelle est son expérience ?',
    'Est-elle disponible ?',
    'Comment la contacter ?',
  ];

  return (
    <>
      {/* Bouton d'ouverture */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Fenêtre du chatbot */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center">
              <Bot className="w-6 h-6 mr-2" />
              <div>
                <h4 className="font-semibold">Assistant de Salma</h4>
                <p className="text-xs opacity-80">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-700 rounded"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-start">
                    {message.sender === 'bot' && (
                      <Bot className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                    )}
                    {message.sender === 'user' && (
                      <User className="w-4 h-4 mr-2 mt-0.5" />
                    )}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
                  <div className="flex items-center">
                    <Bot className="w-4 h-4 mr-2 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Questions rapides */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                Questions fréquentes :
              </p>
              <div className="space-y-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="block w-full text-left text-xs p-2 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre question..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
