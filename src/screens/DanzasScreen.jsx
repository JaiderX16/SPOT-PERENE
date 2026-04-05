import React from 'react';
import { Flame, Info, Music } from 'lucide-react';
import { DANZAS } from '../data/culturalData';

const DanzasScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-3xl font-extrabold text-red-600 dark:text-red-400 flex items-center gap-2">
        <Flame className="w-8 h-8 text-orange-500 dark:text-orange-400" />
        Danzas
      </h2>
    </div>
    
    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-3xl p-6 border border-red-100 dark:border-red-900/30 shadow-sm mb-6">
      <h4 className="font-bold text-red-900 dark:text-red-300 mb-4 flex items-center gap-2 text-lg">
         <Info className="w-5 h-5 text-red-600 dark:text-red-400" /> Características principales:
      </h4>
      <ul className="space-y-3 text-sm text-red-800 dark:text-red-200 font-medium">
        <li className="flex items-center gap-3 bg-white/60 dark:bg-black/20 p-3 rounded-xl shadow-sm border border-red-50 dark:border-red-500/10">
          <span className="w-2 h-2 rounded-full bg-red-500"></span> Uso de vestimenta tradicional
        </li>
        <li className="flex items-center gap-3 bg-white/60 dark:bg-black/20 p-3 rounded-xl shadow-sm border border-red-50 dark:border-red-500/10">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span> Ritmos vibrantes con tambores 🥁
        </li>
        <li className="flex items-center gap-3 bg-white/60 dark:bg-black/20 p-3 rounded-xl shadow-sm border border-red-50 dark:border-red-500/10">
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Movimientos que imitan la naturaleza
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {DANZAS.map(danza => (
        <div key={danza.id} className={`rounded-3xl p-6 text-white shadow-md bg-gradient-to-br ${danza.gradient} transform transition-transform hover:scale-[1.03] duration-300 relative overflow-hidden`}>
          <Music className="absolute -right-4 -bottom-4 w-24 h-24 text-white opacity-20" />
          <h3 className="font-bold mb-2 text-xl relative z-10">{danza.title}</h3>
          <p className="text-sm opacity-90 relative z-10 leading-relaxed">{danza.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default DanzasScreen;
