import React from 'react';
import { Calendar, ShieldCheck, Lock } from 'lucide-react';
import { POLICY_SECTIONS } from '../constants';
import TableOfContents from './TableOfContents';
import { useActiveSection } from '../hooks/useActiveSection';

const PrivacyPolicy: React.FC = () => {
  const activeSection = useActiveSection(POLICY_SECTIONS.map(s => s.id));
  const lastUpdated = "15 Octobre 2023";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-50 border-b border-gray-100 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 mb-6">
            <ShieldCheck size={16} className="text-green-500" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Confidentialité & Sécurité</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Nous croyons que la protection de vos souvenirs les plus chers commence par la protection de vos données. Voici comment nous traitons vos informations.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-3">
             <TableOfContents activeSection={activeSection} />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="prose prose-slate prose-lg max-w-none">
              
              {/* Quick Summary Cards (Mobile/Tablet Friendly) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Données Chiffrées</h3>
                  <p className="text-sm text-gray-600">
                    Vos données de mémoriaux sont chiffrées au repos et en transit.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Usage Strict</h3>
                  <p className="text-sm text-gray-600">
                    Nous n'utilisons vos dates que pour calculer les Yartzheits et envoyer des rappels.
                  </p>
                </div>
              </div>

              {/* Sections Loop */}
              {POLICY_SECTIONS.map((section, index) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-32 ${index !== 0 ? 'pt-12 mt-12 border-t border-gray-100' : ''}`}
                >
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 group flex items-center">
                    {section.title}
                    <a href={`#${section.id}`} className="ml-2 text-gray-300 hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">#</a>
                  </h2>
                  <div className="text-gray-600 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* Mobile Only: Back to Top */}
              <div className="lg:hidden mt-12 pt-8 border-t border-gray-200 text-center">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Retour en haut de page
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;