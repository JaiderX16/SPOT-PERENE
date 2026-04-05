import React from 'react';
import { MapPin, Compass } from 'lucide-react';
import { LUGARES } from '../data/culturalData';

const LugaresScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-cyan-900 dark:bg-cyan-950 p-8 rounded-[2rem] shadow-xl text-white mb-8">
      <h2 className="text-4xl font-black mb-3 flex items-center gap-3">
        <MapPin className="w-8 h-8 text-cyan-400" />
        Lugares Turísticos
      </h2>
      <p className="text-cyan-100 text-lg font-medium max-w-xl">Aventúrate y explora los parajes más impresionantes escondidos en nuestro valle. Prepara tus maletas.</p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {LUGARES.map((lugar) => (
        <div key={lugar.id} className="group rounded-[2rem] shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-2 duration-500 relative bg-white dark:bg-[#1a1a1a]">
          <div className="h-64 relative overflow-hidden">
            <img src={lugar.image} alt={lugar.name} className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[10s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-2 border border-white/30 text-white shadow-sm">
                <Compass className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-widest">{lugar.category}</span>
            </div>
            
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-black text-3xl text-white drop-shadow-md mb-1 group-hover:text-cyan-200 transition-colors">{lugar.name}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm md:text-base text-stone-600 dark:text-stone-300 font-medium mb-4">{lugar.desc}</p>
            <div className="flex items-center text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-wider group-hover:text-cyan-500">
               📍 Ver Ubicación en el Mapa
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LugaresScreen;
