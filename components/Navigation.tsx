
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalEssays: number;
}

const Navigation: React.FC<NavigationProps> = ({ onPrev, onNext, currentIndex, totalEssays }) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalEssays - 1;

  const buttonBaseClasses = "px-4 py-3 rounded-lg flex items-center justify-center font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  const buttonEnabledClasses = "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300";
  const buttonDisabledClasses = "bg-slate-100 text-slate-400 border border-slate-200";

  return (
    <div className="flex items-center justify-between p-4 h-[85px]">
      <button 
        onClick={onPrev} 
        disabled={isFirst}
        className={`${buttonBaseClasses} ${isFirst ? buttonDisabledClasses : buttonEnabledClasses}`}
        aria-label="Questão anterior"
      >
        <ChevronLeftIcon />
        <span className="hidden sm:inline ml-2">Anterior</span>
      </button>

      <div className="font-semibold text-slate-600 text-sm sm:text-base">
        {currentIndex + 1} de {totalEssays}
      </div>

      <button 
        onClick={onNext} 
        disabled={isLast}
        className={`${buttonBaseClasses} ${isLast ? buttonDisabledClasses : buttonEnabledClasses}`}
        aria-label="Próxima questão"
      >
        <span className="hidden sm:inline mr-2">Próxima</span>
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Navigation;
