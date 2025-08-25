import React from 'react';
import { Globe } from 'lucide-react';

interface LanguagesProps {
  darkMode: boolean;
}

export const Languages: React.FC<LanguagesProps> = ({ darkMode }) => {
  const languages = [
    {
      language: 'Español',
      level: 'Nativo',
      flag: '🇪🇸',
      percentage: 100
    },
    {
      language: 'Inglés',
      level: 'B1',
      flag: '🇬🇧',
      percentage: 60
    }
  ];

  return (
    <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Idiomas
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
            Comunicación efectiva en múltiples idiomas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{lang.flag}</span>
                  <div>
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {lang.language}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium`}>
                      {lang.level}
                    </p>
                  </div>
                </div>
                <Globe className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};