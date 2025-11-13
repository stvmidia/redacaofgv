import React, { useState, useEffect } from 'react';
import { essays } from './constants/essays';
import EssayViewer from './components/EssayViewer';
import Navigation from './components/Navigation';
import FontSizeSwitcher from './components/FontSizeSwitcher';

export type FontSize = 'sm' | 'md' | 'lg';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontSize, setFontSize] = useState<FontSize>('md');
  const essayContainerId = 'essay-content-area';

  const handleNext = () => {
    if (currentIndex < essays.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  useEffect(() => {
    const container = document.getElementById(essayContainerId);
    if (container) {
      container.scrollTo(0, 0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
    root.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center">
      <header className="w-full text-center py-6 sm:py-8 px-4 bg-white border-b border-slate-200 relative">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Modelos de Redação FGV
        </h1>
        <p className="text-slate-500 mt-1 sm:mt-2 text-sm sm:text-base">
          Questões discursivas para o concurso da ALE-RO
        </p>
        <div className="absolute top-4 right-4 sm:top-1/2 sm:-translate-y-1/2 sm:right-6">
            <FontSizeSwitcher currentSize={fontSize} onSizeChange={setFontSize} />
        </div>
      </header>
      
      <main id={essayContainerId} className="w-full max-w-4xl flex-grow p-4 sm:p-6 md:p-8 overflow-y-auto" style={{paddingBottom: '100px'}}>
         <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
            <EssayViewer key={currentIndex} essay={essays[currentIndex]} />
         </div>
      </main>
      
      <footer className="w-full fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
            <Navigation
                onPrev={handlePrev}
                onNext={handleNext}
                currentIndex={currentIndex}
                totalEssays={essays.length}
            />
        </div>
      </footer>
    </div>
  );
};

export default App;