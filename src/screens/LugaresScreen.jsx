import React from 'react';
import { Skeleton } from 'boneyard-js/react';
import { MapPin, Compass } from 'lucide-react';
import { LUGARES } from '../data/culturalData';

const LugaresScreen = ({ isSkeleton, isDark }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <Skeleton name="lugares-hero" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
      <div className="relative overflow-hidden rounded-[2rem] shadow-xl mb-8 group">
        {/* Background Image for Hero */}
        <div className="absolute inset-0 bg-cyan-950">
          <img 
            src="https://images.unsplash.com/photo-1518182170546-076616fd4cb8?q=80&w=1600&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 transform scale-105 group-hover:scale-110 transition-transform duration-[20s]"
            alt="Perené"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 to-transparent"></div>
        </div>
        
        <div className="relative p-8 md:p-12 lg:p-16 text-white z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 flex items-center gap-3 drop-shadow-lg">
            <MapPin className="w-8 h-8 text-cyan-400" />
            Lugares Turísticos
          </h2>
          <p className="text-cyan-50 text-sm md:text-base lg:text-lg font-medium max-w-2xl drop-shadow-md">
            Aventúrate y explora los parajes más impresionantes escondidos en nuestro valle. Prepara tus maletas para una experiencia inolvidable.
          </p>
        </div>
      </div>
    </Skeleton>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {LUGARES.map((lugar) => (
        <Skeleton key={lugar.id} name="lugar-card" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
          <div className="group rounded-[2rem] shadow-lg hover:shadow-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-2 duration-500 relative bg-white dark:bg-[#1a1a1a]">
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
              
              {/* Ghost Skeleton Detail */}
              <div className="absolute inset-x-8 bottom-0 top-0 opacity-0 pointer-events-none select-none flex flex-col justify-end pb-12 gap-2 boneyard-bones">
                 <div className="w-1/3 h-6 bg-white rounded-md mb-2" />
                 <div className="w-full h-4 bg-white rounded-sm" />
                 <div className="w-4/5 h-4 bg-white rounded-sm" />
                 <div className="w-1/2 h-4 bg-white rounded-sm mt-3" />
              </div>

              <div className="flex items-center text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-wider group-hover:text-cyan-500">
                  📍 Ver Ubicación en el Mapa
              </div>
            </div>
          </div>
        </Skeleton>
      ))}
    </div>
  </div>
);

export default LugaresScreen;
