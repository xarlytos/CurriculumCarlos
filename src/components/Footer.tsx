import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 border-t ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Carlos Carrión Iranzo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};