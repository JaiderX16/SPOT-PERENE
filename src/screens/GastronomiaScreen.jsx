import React from 'react';
import { Utensils, ArrowRight } from 'lucide-react';
import { GASTRONOMIA } from '../data/culturalData';

const GastronomiaScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-3xl font-extrabold text-stone-800 dark:text-stone-100 mb-1 flex items-center gap-2">
        <Utensils className="w-7 h-7 text-red-500 dark:text-red-400" /> Gastronomía
      </h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">Los sabores inconfundibles de la zona:</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {GASTRONOMIA.map((plato) => (
        <div key={plato.id} className="group bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm hover:shadow-2xl border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col transition-all hover:-translate-y-2 duration-300 relative cursor-pointer">
          <div className="h-48 sm:h-56 relative overflow-hidden">
            <img src={plato.image} alt={plato.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full shadow-md">
                {plato.type}
            </span>
            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/30">
                {plato.badge}
            </span>
            
            <div className="absolute bottom-4 left-5 right-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-black text-white text-2xl leading-tight drop-shadow-lg mb-1">{plato.name}</h3>
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6 font-medium">{plato.desc}</p>
            
            <div className="flex items-center justify-between text-xs font-black tracking-wide text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors">
              <span>EXPLORAR PLATO</span>
              <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-500/20 transition-colors">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GastronomiaScreen;
