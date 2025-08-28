import React from 'react';
import { ExternalLink, Star, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const featuredProject = {
    title: 'InmoFlow AI',
    subtitle: 'SaaS Inmobiliario con IA',
    description: 'Aplicación frontend completa para CRM/ERP inmobiliario con gestión de propiedades, leads, matching inteligente, valoración automática, agenda integrada y marketing studio. Proyecto desarrollado exclusivamente en frontend con simulación de datos y APIs mockeadas.',
    highlights: [
      'Pipeline Kanban con drag & drop',
      'Matching lead-propiedad con IA',
      'Valoración automática con comparables',
      'Marketing Studio integrado',
      'Analítica avanzada con KPIs'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Recharts', 'MSW'],
    image: '/image.png',
    url: 'https://inmo-flow-ai.vercel.app/',
    githubUrl: 'https://github.com/xarlytos/InmoFlowAI',
    featured: true
  };

  const projects = [
    {
      title: 'Base de Contactos Universitarios',
      subtitle: 'Gestión de Contactos Académicos',
      description: 'Aplicación frontend para la gestión y segmentación de contactos académicos, con interfaz de administración de equipos comerciales y control de permisos. Proyecto desarrollado exclusivamente en frontend con datos simulados.',
      highlights: [
        'Registro y consulta de contactos completos',
        'Conteo y estadísticas por universidad y curso',
        'Panel de administrador con gestión de permisos',
        'Organización jerárquica de comerciales',
        'Visualización de contactos por equipo'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      image: '/universidades foto.png',
      url: 'https://proyectouniversidades.vercel.app/',
      githubUrl: 'https://github.com/xarlytos/proyectouniversidades'
    },
    {
      title: 'Onboarding + KYB (mock)',
      subtitle: 'Verificación de Empresas',
      description: 'Aplicación frontend con flujo end-to-end de alta y verificación de empresas con wizard de 3 pasos, validación legal y simulación completa de verificación. Proyecto desarrollado exclusivamente en frontend con APIs mockeadas.',
      highlights: [
        'Formularios con React Hook Form + Zod, máscaras y checksum NIF/CIF',
        'Autosave en localStorage, guardas/sales/vuelves al borrador',
        'Subida de documentos con Dropzone y SHA-256 en Web Worker (no bloquea UI)',
        'Pantalla de status con polling y reintentos (backoff simulado)',
        'Accesible (focus/aria) y modo oscuro'
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MSW', 'Zod', 'React Router', 'Playwright', 'Vitest'],
      image: '/onboarding foto.png',
      url: 'https://onboarding-kyb-mock.vercel.app/',
      githubUrl: 'https://github.com/xarlytos/Onboarding-KYB-mock-'
    },
    {
      title: 'Pagos B2B con Cotización + Confirmación',
      subtitle: 'Módulo de Pagos Empresariales',
      description: 'Aplicación frontend de módulo de pagos con cotización (fees/ETA/ruta), caducidad en 30s y confirmación con timeline hasta confirmado/fallo. Proyecto desarrollado exclusivamente en frontend con simulación completa de APIs.',
      highlights: [
        'Countdown accesible (aria-live); invalidación automática al cambiar importe/red/prioridad',
        'Validación de direcciones EVM/Sui y control de decimales por divisa',
        'TanStack Query para quotes/estado, cancelación con AbortController',
        'Historial con filtros y recibo imprimible (hash copiable)'
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MSW', 'Zod', 'TanStack Query', 'TanStack Table', 'Playwright', 'Vitest'],
      image: '/payment app foto.png',
      url: 'https://pagos-b2-b-con-cotizaci-n-confirmac.vercel.app/',
      githubUrl: 'https://github.com/xarlytos/Pagos-B2B-con-Cotizaci-n-Confirmaci-n'
    },
    {
      title: 'Certificación / Notarización de Evidencias',
      subtitle: 'Sistema de Hash y Verificación',
      description: 'Aplicación frontend para certificar archivos calculando SHA-256 en cliente, con registro y verificación por ID/hash, tarjeta con QR y vista print-friendly. Proyecto desarrollado exclusivamente en frontend con almacenamiento local.',
      highlights: [
        'Hashing por chunks en Web Worker con progreso y cancelación',
        'Detección de duplicados (hash ya registrado) y búsqueda en historial',
        'Verificación por ID o hash con resultado inequívoco (OK/mismatch)',
        'Export CSV del historial filtrado',
        'Tarjeta con QR code y vista optimizada para impresión'
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'MSW', 'Zod', 'React Router', 'Playwright', 'Vitest'],
      image: '/certificacion imagen.png',
      url: 'https://certificaci-n-notarizaci-n-de-evide.vercel.app/',
      githubUrl: 'https://github.com/xarlytos/Certificaci-n-Notarizaci-n-de-Evidencias'
    }
  ];

  return (
    <section id="projects" className={`py-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-light mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Proyectos
          </h2>
          <p className={`text-xl lg:text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300 max-w-3xl mx-auto`}>
            Soluciones innovadoras que cobran vida
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className={`group relative rounded-3xl overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="absolute top-6 right-6 z-10">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-600'} backdrop-blur-sm`}>
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-medium">Proyecto Destacado</span>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 p-12">
              <div>
                <div className="mb-6">
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {featuredProject.title}
                  </h3>
                  <p className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-500'} mb-4`}>
                    {featuredProject.subtitle}
                  </p>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {featuredProject.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Características principales:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {featuredProject.highlights.map((highlight, index) => (
                      <li 
                        key={index}
                        className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300 border border-gray-600' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <ExternalLink size={20} />
                    <span>Ver Proyecto Destacado</span>
                  </a>
                  
                  <a 
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-3 px-8 py-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    <Github size={20} />
                    <span>Ver en GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <img 
                    src={featuredProject.image}
                    alt="InmoFlow AI - Preview del proyecto"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects - Now in large format like featured project */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group rounded-3xl overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 p-12">
                <div>
                  <div className="mb-6">
                    <h3 className={`text-3xl lg:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-500'} mb-4`}>
                      {project.subtitle}
                    </p>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Características principales:
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li 
                          key={highlightIndex}
                          className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300 border border-gray-600' : 'bg-white text-gray-700 border border-gray-200'} shadow-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <ExternalLink size={20} />
                      <span>Ver Proyecto</span>
                    </a>
                    
                    {project.title !== 'Base de Contactos Universitarios' && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-3 px-8 py-4 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                      >
                        <Github size={20} />
                        <span>Ver en GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <img 
                      src={project.image}
                      alt={`${project.title} - Preview del proyecto`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-20 p-10 rounded-3xl ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700' : 'bg-gradient-to-r from-white to-gray-50 border-gray-200'} border text-center shadow-xl`}>
          <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Más proyectos en desarrollo
          </h3>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Próximamente estarán disponibles más proyectos innovadores que demuestran mi evolución como desarrollador full stack.
          </p>
        </div>
      </div>
    </section>
  );
};