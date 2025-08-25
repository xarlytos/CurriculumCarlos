import React from 'react';
import { Code2, Database, Cloud, GitBranch, Palette, Users, Lightbulb, Zap } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const technicalSkills = [
    {
      category: 'Lenguajes',
      icon: <Code2 size={24} />,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3/SCSS']
    },
    {
      category: 'Frontend',
      icon: <Palette size={24} />,
      skills: ['React + Hooks', 'Next.js', 'Tailwind CSS', 'Styled Components', 'React Query/TanStack', 'React Hook Form', 'Zustand/Redux', 'Framer Motion']
    },
    {
      category: 'Backend',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST APIs', 'GraphQL (básico)', 'JWT Auth']
    },
    {
      category: 'Herramientas',
      icon: <GitBranch size={24} />,
      skills: ['Git/GitHub', 'Vite/Webpack', 'Docker', 'AWS (básico)', 'Vercel/Netlify', 'Postman', 'VS Code', 'ESLint/Prettier']
    }
  ];

  const softSkills = [
    { name: 'Trabajo en equipo', icon: <Users size={20} /> },
    { name: 'Comunicación', icon: <Users size={20} /> },
    { name: 'Resolución de problemas', icon: <Lightbulb size={20} /> },
    { name: 'Aprendizaje rápido', icon: <Zap size={20} /> },
    { name: 'Adaptabilidad', icon: <Zap size={20} /> },
    { name: 'Pensamiento crítico', icon: <Lightbulb size={20} /> }
  ];

  return (
    <section className={`py-24 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Habilidades
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
            Tecnologías y competencias que domino
          </p>
        </div>

        <div className="mb-16">
          <h3 className={`text-3xl font-light mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Habilidades Técnicas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className={`mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                  {category.icon}
                </div>
                <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center space-x-2`}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-3xl font-light mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-4`}
              >
                <div className={`${darkMode ? 'text-green-400' : 'text-green-500'}`}>
                  {skill.icon}
                </div>
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};