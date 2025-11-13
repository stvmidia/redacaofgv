import React from 'react';
import { FontSize } from '../App';

interface FontSizeSwitcherProps {
  currentSize: FontSize;
  onSizeChange: (size: FontSize) => void;
}

const FontSizeSwitcher: React.FC<FontSizeSwitcherProps> = ({ currentSize, onSizeChange }) => {
  const sizes: { key: FontSize; label: string }[] = [
    { key: 'sm', label: 'Pequena' },
    { key: 'md', label: 'Média' },
    { key: 'lg', label: 'Grande' },
  ];

  const baseButtonClass = "px-3 py-1 text-xs sm:text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500";
  const activeButtonClass = "bg-teal-600 text-white shadow-sm";
  const inactiveButtonClass = "bg-slate-200 text-slate-600 hover:bg-slate-300";

  return (
    <div className="flex items-center space-x-1 sm:space-x-2 p-1 bg-slate-100 rounded-lg" role="group" aria-label="Tamanho da fonte">
      {sizes.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onSizeChange(key)}
          className={`${baseButtonClass} ${currentSize === key ? activeButtonClass : inactiveButtonClass}`}
          aria-pressed={currentSize === key}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FontSizeSwitcher;
