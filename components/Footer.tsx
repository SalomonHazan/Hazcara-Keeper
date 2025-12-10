import React from 'react';
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Yartzheit Keeper</h3>
            <p className="text-sm text-gray-400 mb-4">
              Préserver la mémoire, honorer la tradition. L'application indispensable pour gérer les anniversaires de mémoire juifs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Calendrier Hébraïque</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rappels Kaddish</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prières</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Télécharger</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white font-medium cursor-default">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Support</h4>
             <div className="flex items-center space-x-2 text-sm mb-2">
                <Mail size={16} />
                <a href="mailto:salomon.hazan@icloud.com" className="hover:text-white transition-colors">salomon.hazan@icloud.com</a>
             </div>
             <p className="text-xs text-gray-500 mt-4">
               © {new Date().getFullYear()} Yartzheit Keeper. Tous droits réservés.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;