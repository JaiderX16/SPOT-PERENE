import React from 'react';
import { BookOpen } from 'lucide-react';
import { RELATOS } from '../data/culturalData';

const RelatosScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
      <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      Relatos (Leyendas)
    </h2>
    <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-2xl p-4 mb-6 flex items-start gap-3 border border-blue-100 dark:border-blue-800/30 shadow-sm">
       <span className="text-2xl">🗣️</span>
       <p className="text-sm font-medium text-blue-800 dark:text-blue-200 leading-relaxed">Suelen transmitirse de forma oral de generación en generación, manteniendo viva la memoria.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {RELATOS.map(relato => (
        <div key={relato.id} className="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm hover:shadow-lg border border-stone-100 dark:border-white/5 p-6 flex flex-col items-center text-center transition-all hover:-translate-y-1 duration-300">
          <span className="text-5xl block mb-4 bg-stone-50 dark:bg-white/5 p-5 rounded-full shadow-inner">{relato.icon}</span>
          <h3 className={`font-bold text-xl mb-2 ${relato.color}`}>{relato.title}</h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{relato.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RelatosScreen;
