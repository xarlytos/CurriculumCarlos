import React from 'react';
import { Building2, Calendar, Users, Code } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section className={`py-24 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Experiencia
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
            Desarrollando soluciones reales para problemas complejos
          </p>
        </div>

        <div className={`relative p-12 rounded-3xl ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border transition-colors duration-300`}>
          <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="flex-shrink-0">
              <div className={`w-20 h-20 rounded-2xl ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} flex items-center justify-center transition-colors duration-300`}>
                <Building2 className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={32} />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <h3 className={`text-3xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Programador
                </h3>
                <p className={`text-xl ${darkMode ? 'text-blue-400' : 'text-blue-500'} font-medium mb-2`}>
                  Grupo Solitium
                </p>
                <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar size={18} />
                  <span>2 años de experiencia</span>
                </div>
              </div>
              
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Desarrollo de software robusto y escalable, brindando soporte técnico especializado 
                a múltiples proyectos. Colaboración efectiva en equipos multidisciplinarios, 
                aplicando metodologías ágiles y mejores prácticas de desarrollo. Además, he completado 
                varios proyectos freelance remunerados, desarrollando soluciones personalizadas para 
                diferentes clientes y sectores.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Code className={`${darkMode ? 'text-green-400' : 'text-green-500'}`} size={20} />
                  </div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Desarrollo de Software</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <Users className={`${darkMode ? 'text-purple-400' : 'text-purple-500'}`} size={20} />
                  </div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Colaboración en Equipo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-800/30' : 'bg-gradient-to-r from-green-50 to-blue-50 border-green-200'} border transition-colors duration-300`}>
          <div className="text-center">
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Proyectos Freelance Remunerados
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Varios de los proyectos mostrados en la sección inferior han sido desarrollados 
              como trabajos freelance remunerados, demostrando mi capacidad para entregar 
              soluciones profesionales que satisfacen las necesidades específicas de los clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};