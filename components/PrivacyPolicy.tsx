import React from 'react';
import { Calendar, ShieldCheck, Lock, ChevronRight } from 'lucide-react';
import { POLICY_SECTIONS } from '../constants';
import TableOfContents from './TableOfContents';
import { useActiveSection } from '../hooks/useActiveSection';

const PrivacyPolicy: React.FC = () => {
  const activeSection = useActiveSection(POLICY_SECTIONS.map(s => s.id));
  const lastUpdated = "15 Octobre 2023";

  return (
    <div className="bg-white min-h-screen selection:bg-slate-900 selection:text-white">
      {/* Hero Section */}
      <div className="relative bg-slate-50 pt-20 pb-24 sm:pt-24 sm:pb-32 overflow-hidden border-b border-gray-100">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[500px] h-[500px] bg-gradient-to-tr from-slate-200/50 to-gray-100/50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-200 mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Légal & Confidentialité</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
              Politique de <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Confidentialité</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Nous croyons que la protection de vos souvenirs les plus chers commence par la sécurité de vos données. Transparence totale, zéro compromis.
            </p>
            
            <div className="flex justify-center items-center text-sm font-medium text-gray-500 bg-white/50 backdrop-blur-sm inline-block py-2 px-4 rounded-lg border border-gray-100 mx-auto">
              <span>Mise à jour le {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-24">
          
          {/* Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-3">
             <TableOfContents activeSection={activeSection} />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 lg:col-start-5">
            
            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Chiffrement de bout en bout</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vos données sont chiffrées selon les normes industrielles les plus strictes, au repos comme en transit.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-green-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Usage dédié uniquement</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vos dates ne servent qu'à une chose : calculer les Yartzheits. Aucune revente, aucune publicité ciblée.
                </p>
              </div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
              
              {/* Sections Loop */}
              {POLICY_SECTIONS.map((section, index) => (
                <div 
                  key={section.id} 
                  id={section.id} 
                  className={`scroll-mt-32 transition-opacity duration-500 ${index !== 0 ? 'pt-12 mt-12 border-t border-gray-100' : ''}`}
                >
                  <h2 className="flex items-center group cursor-pointer" onClick={() => window.location.hash = section.id}>
                    <span className="bg-slate-100 text-slate-500 text-lg font-bold px-3 py-1 rounded-lg mr-4 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                      {section.title.split('.')[0]}
                    </span>
                    <span className="group-hover:text-slate-900 transition-colors">
                      {section.title.split('.').slice(1).join('.').trim()}
                    </span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-300">
                      <ShieldCheck size={20} />
                    </span>
                  </h2>
                  <div className="mt-6 text-gray-600 leading-8">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* Mobile Only: Back to Top */}
              <div className="lg:hidden mt-16 pt-8 border-t border-gray-100 text-center">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 bg-gray-50 px-6 py-3 rounded-full transition-colors"
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