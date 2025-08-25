import React from 'react';
import { MapPin, Phone, Mail, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl ${darkMode ? 'bg-black/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
              Carlos Carrión Iranzo
            </h1>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin size={16} />
                <span>Valencia, España</span>
              </div>
              <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Phone size={16} />
                <span>644947521</span>
              </div>
              <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Mail size={16} />
                <span>carloscarrioniranzo@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};