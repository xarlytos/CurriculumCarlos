import React from 'react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className={`py-24 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h2 className={`text-5xl lg:text-7xl font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight transition-colors duration-300`}>
                Desarrollador
                <span className="block text-blue-500 font-normal">Full Stack</span>
              </h2>
              <p className={`text-xl lg:text-2xl font-light leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl transition-colors duration-300`}>
                Apasionado por crear experiencias digitales excepcionales. 
                Combino creatividad y tecnología para desarrollar soluciones 
                innovadoras que marcan la diferencia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Ver Proyectos
              </button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 hover:scale-105 transition-transform duration-300">
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex items-center justify-center text-6xl font-light ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  CC
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};