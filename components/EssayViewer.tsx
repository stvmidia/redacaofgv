
import React from 'react';
import { Essay } from '../types';

interface EssayViewerProps {
  essay: Essay;
}

const renderWithLineBreaksAndBold = (text: string) => {
  return text.split('\n').map((paragraph, pIndex) => {
    const trimmedParagraph = paragraph.trim();
    if (trimmedParagraph === '') return null;
    return (
      <p key={pIndex} className="mb-4 text-slate-700 leading-relaxed text-base">
        {trimmedParagraph.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={partIndex} className="font-semibold text-slate-900">
                {part.substring(2, part.length - 2)}
              </strong>
            );
          }
          return part;
        })}
      </p>
    );
  });
};

const EssayViewer: React.FC<EssayViewerProps> = ({ essay }) => {
  return (
    <article className="prose max-w-none">
        <h2 className="text-xl font-bold text-slate-800 mb-4 pb-4 border-b border-slate-200">
          Questão {essay.id}
        </h2>
        <p className="text-lg font-semibold text-slate-800 mb-6 leading-snug">
          {essay.question}
        </p>
        
        <h3 className="text-lg font-bold text-teal-600 mb-4">
          Resposta-Modelo:
        </h3>
        <div>{renderWithLineBreaksAndBold(essay.modelAnswer)}</div>
    </article>
  );
};

export default EssayViewer;
