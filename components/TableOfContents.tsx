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
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="sticky top-28 w-full max-h-[calc(100vh-120px)] overflow-y-auto pr-4 hidden lg:block">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
        Sommaire
      </h3>
      <ul className="space-y-1">
        {POLICY_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`block px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-slate-100 text-slate-900 font-semibold border-l-4 border-slate-900'
                  : 'text-gray-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-xl">
        <p className="text-xs text-blue-800 font-medium mb-2">Besoin d'aide ?</p>
        <p className="text-xs text-blue-600 mb-3">
          Notre équipe est là pour répondre à vos questions sur la confidentialité.
        </p>
        <button className="text-xs bg-white text-blue-700 px-3 py-1.5 rounded border border-blue-200 shadow-sm hover:shadow hover:border-blue-300 transition-all font-semibold w-full">
          Contacter le DPO
        </button>
      </div>
    </nav>
  );
};

export default TableOfContents;