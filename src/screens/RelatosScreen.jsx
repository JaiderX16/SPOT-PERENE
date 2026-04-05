import React from 'react';
import { BookOpen } from 'lucide-react';
import { RELATOS } from '../data/culturalData';

const RelatosScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-4xl font-black text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-3">
      <BookOpen className="w-9 h-9 text-blue-600 dark:text-blue-400" />
      Nuestros Relatos
    </h2>
    <p className="text-base font-medium text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-2xl">
      Descubre las leyendas transmitidas de generación en generación que dan forma a nuestra mitología amazónica.
    </p>
    
    <div className="flex flex-col gap-6">
      {RELATOS.map(relato => (
        <div key={relato.id} className="group bg-white dark:bg-[#1e1e1e] rounded-[2rem] shadow-md hover:shadow-2xl border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col md:flex-row transition-all hover:-translate-y-1 duration-300 min-h-[220px]">
          <div className="md:w-2/5 relative overflow-hidden h-48 md:h-auto">
             <img src={relato.image} alt={relato.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[8s]" />
          </div>
          <div className="p-8 md:w-3/5 flex flex-col justify-center bg-stone-50/50 dark:bg-transparent">
            <span className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">Mito Origen</span>
            <h3 className="font-black text-3xl mb-4 text-stone-800 dark:text-stone-100">{relato.title}</h3>
            <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-lg">{relato.desc}</p>
            <button className="mt-6 self-start px-6 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-800 dark:text-blue-300 font-bold rounded-full transition-colors text-sm">
              Leer Historia Completa
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatosScreen;
