import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Chatbot />

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2025 Salma El Mansouri - Portfolio Agent Centre d'Appels
              Casablanca
            </p>
            <p className="text-sm text-gray-500 mt-2">
              salma.elmansouri@gmail.com • +212 6 12 34 56 78 • Casablanca,
              Maroc
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
