import React, { useState, useEffect } from 'react';
import { Menu, X, BookHeart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => window.location.reload()}>
            <div className="bg-slate-900 text-white p-2.5 rounded-xl mr-3 shadow-lg shadow-slate-200 group-hover:shadow-slate-300 transition-all duration-300 group-hover:-translate-y-0.5">
              <BookHeart size={24} />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">
              Yartzheit Keeper
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="text-gray-600 hover:text-slate-900 hover:bg-slate-50 px-4 py-2 rounded-lg font-medium transition-all">Fonctionnalités</a>
            <a href="#" className="text-gray-600 hover:text-slate-900 hover:bg-slate-50 px-4 py-2 rounded-lg font-medium transition-all">À propos</a>
            <a href="#" className="text-slate-900 bg-slate-50 px-4 py-2 rounded-lg font-semibold transition-all">Confidentialité</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg text-sm">
              Télécharger l'App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-xl transition-colors">Fonctionnalités</a>
            <a href="#" className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-xl transition-colors">À propos</a>
            <a href="#" className="block px-4 py-3 text-base font-medium text-slate-900 bg-blue-50/50 rounded-xl">Confidentialité</a>
            <div className="pt-4 px-1">
               <button className="w-full bg-slate-900 text-white px-5 py-3.5 rounded-xl font-bold shadow-lg shadow-slate-200 active:scale-95 transition-all">
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