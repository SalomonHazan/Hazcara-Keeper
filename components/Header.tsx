import React, { useState } from 'react';
import { Menu, X, BookHeart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
            <div className="bg-slate-900 p-2 rounded-lg text-white mr-3">
              <BookHeart size={24} />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">Yartzheit Keeper</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">Fonctionnalités</a>
            <a href="#" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">À propos</a>
            <a href="#" className="text-slate-900 font-semibold transition-colors">Confidentialité</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md text-sm">
              Télécharger l'App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md">Fonctionnalités</a>
            <a href="#" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md">À propos</a>
            <a href="#" className="block px-3 py-3 text-base font-medium text-slate-900 bg-blue-50 rounded-md">Confidentialité</a>
            <div className="pt-4">
               <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg font-medium shadow-md">
                Télécharger l'App
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;