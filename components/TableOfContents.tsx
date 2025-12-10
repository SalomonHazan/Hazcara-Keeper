import React from 'react';
import { POLICY_SECTIONS } from '../constants';

interface TableOfContentsProps {
  activeSection: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ activeSection }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-32 w-full max-h-[calc(100vh-140px)] overflow-y-auto pr-4 hidden lg:block custom-scrollbar">
      <div className="pl-2">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
          Sommaire
        </h3>
        <div className="space-y-1 relative border-l border-gray-100 ml-1">
          {POLICY_SECTIONS.map((section) => (
            <div key={section.id} className="relative">
              <a
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`group flex items-center pl-4 py-2.5 text-sm transition-all duration-300 ease-in-out ${
                  activeSection === section.id
                    ? 'text-slate-900 font-semibold'
                    : 'text-gray-500 hover:text-slate-700'
                }`}
              >
                {/* Active Indicator Line */}
                <span 
                  className={`absolute left-[-1px] top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-300 ${
                    activeSection === section.id ? 'bg-slate-900 scale-y-100' : 'bg-transparent scale-y-0'
                  }`} 
                />
                
                {/* Hover Indicator */}
                <span 
                  className={`absolute left-[-1px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full bg-gray-200 transition-all duration-300 ${
                    activeSection !== section.id ? 'group-hover:opacity-100 opacity-0' : 'opacity-0'
                  }`} 
                />

                {section.title}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-5 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl border border-blue-100/50">
          <p className="text-xs text-blue-900 font-bold mb-2 uppercase tracking-wide">Besoin d'aide ?</p>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Notre équipe est disponible pour répondre à vos questions.
          </p>
          <a 
            href="mailto:salomon.hazan@icloud.com"
            className="block text-center text-xs bg-white text-slate-900 px-4 py-2.5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all font-semibold w-full"
          >
            Contacter le support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TableOfContents;