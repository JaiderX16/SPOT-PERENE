import React from 'react';
import { Leaf } from 'lucide-react';
import { COSTUMBRES } from '../data/culturalData';

const CostumbresScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-gradient-to-r from-amber-900 to-stone-800 dark:from-amber-950 dark:to-stone-900 p-6 rounded-3xl shadow-lg text-white">
      <h2 className="text-3xl font-extrabold mb-2 flex items-center gap-2">
        <Leaf className="w-7 h-7 text-green-400 dark:text-green-500" /> Costumbres
      </h2>
      <p className="text-stone-300 text-sm font-medium">Prácticas y estilo de vida arraigados profundamente en nuestra tierra.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {COSTUMBRES.map(costumbre => (
        <div key={costumbre.id} className={`bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl shadow-sm hover:shadow-md border-l-4 ${costumbre.border} flex gap-4 items-center transition-all hover:-translate-y-1 duration-300 border border-y-stone-100 border-r-stone-100 dark:border-y-white/5 dark:border-r-white/5`}>
          <div className="flex-shrink-0 bg-stone-50 dark:bg-white/5 border border-stone-100 dark:border-white/10 p-2 rounded-full text-3xl w-14 h-14 flex items-center justify-center shadow-sm">
            {costumbre.icon}
          </div>
          <div>
            <h3 className="font-bold text-stone-800 dark:text-stone-100 text-lg mb-1">{costumbre.title}</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{costumbre.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CostumbresScreen;
