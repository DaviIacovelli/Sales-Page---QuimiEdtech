import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-4 px-2 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-semibold text-slate-800 text-lg">{title}</span>
        {isOpen ? <ChevronUp className="text-brand-600" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};