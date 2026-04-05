import React from 'react';
import { Utensils } from 'lucide-react';
import { GASTRONOMIA } from '../data/culturalData';

const GastronomiaScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-extrabold text-stone-800 dark:text-stone-100 mb-1 flex items-center gap-2">
        <Utensils className="w-7 h-7 text-red-500 dark:text-red-400" /> Gastronomía
      </h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">Los sabores inconfundibles de la zona:</p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {GASTRONOMIA.map((plato, idx) => (
        <div key={plato.id} className={`bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm hover:shadow-md border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col transition-all hover:-translate-y-1 duration-300 ${idx === 4 ? 'col-span-2 flex-row items-center h-auto' : ''}`}>
          <div className={`${idx === 4 ? 'w-28 h-full shrink-0' : 'h-24'} bg-gradient-to-br ${plato.color} flex items-center justify-center border-b border-stone-50 dark:border-transparent`}>
            <span className={`${idx === 4 ? 'text-5xl' : 'text-4xl'} drop-shadow-md transform hover:scale-110 transition-transform duration-300`}>{plato.icon}</span>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest font-bold text-red-500 dark:text-red-400 mb-1">{plato.type}</span>
            <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-1 leading-tight text-base">{plato.name}</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{plato.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GastronomiaScreen;
