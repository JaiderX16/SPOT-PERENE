import React from 'react';
import { MapPin } from 'lucide-react';
import { LUGARES } from '../data/culturalData';

const LugaresScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-extrabold text-stone-800 dark:text-stone-100 mb-1 flex items-center gap-2">
        <MapPin className="w-7 h-7 text-blue-500 dark:text-blue-400" />
        Lugares Turísticos
      </h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">Destacados atractivos que no te puedes perder:</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {LUGARES.map((lugar) => (
        <div key={lugar.id} className="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm hover:shadow-xl border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col transition-all hover:-translate-y-1 duration-300 group">
          <div className={`h-32 bg-gradient-to-r ${lugar.gradient} relative flex items-center justify-center overflow-hidden`}>
            <span className="text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">{lugar.icon}</span>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            <span className="absolute bottom-3 left-4 bg-white/25 dark:bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider shadow-sm">
              {lugar.category}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-xl text-stone-800 dark:text-stone-100 mb-1">{lugar.name}</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">{lugar.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LugaresScreen;
