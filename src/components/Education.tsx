import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      title: 'Grado Superior de Informática',
      institution: 'Aula Campus',
      type: 'Desarrollo de Aplicaciones',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'Bachillerato',
      institution: 'Completado',
      type: 'Base académica sólida',
      icon: <BookOpen size={24} />
    },
    {
      title: 'B1 en Inglés',
      institution: 'Certificación oficial',
      type: 'Competencia internacional',
      icon: <Award size={24} />
    }
  ];

  return (
    <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Formación
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
            Base sólida para el desarrollo profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {education.map((item, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className={`mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-2`}>
                {item.institution}
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.type}
              </p>
            </div>
          ))}
        </div>

        <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border transition-colors duration-300`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Cursos y Certificaciones Adicionales
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                SQL Fundamentals 1
              </h4>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-1`}>
                Oracle Academy Student Campus
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                NDG Linux Essentials
              </h4>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-1`}>
                Cisco Network Academy
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pearson Edexcel Level Certificate in ESOL International (Entry 3) (CEF B1)
              </h4>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-1`}>
                Pearson test of english general
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Introduction to packet tracer
              </h4>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-1`}>
                CISCO network academy
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border md:col-span-2`}>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Certificado de competencias
              </h4>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-1`}>
                aula campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};