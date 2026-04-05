import React, { useState } from 'react';
import { Skeleton } from 'boneyard-js/react';
import { Utensils, ArrowRight, X, ChefHat, ScrollText, Lightbulb, Clock, CheckCircle2 } from 'lucide-react';
import { GASTRONOMIA } from '../data/culturalData';

const GastronomiaScreen = ({ isSkeleton, isDark }) => {
  const [selectedPlato, setSelectedPlato] = useState(null);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-extrabold text-stone-800 dark:text-stone-100 mb-1 flex items-center gap-2">
          <Utensils className="w-7 h-7 text-red-500 dark:text-red-400" /> Gastronomía
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 font-medium">Los sabores inconfundibles de la zona:</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {GASTRONOMIA.map((plato) => (
          <Skeleton key={plato.id} name="gastronomia-card" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
            <div 
              onClick={() => setSelectedPlato(plato)}
              className="group bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm hover:shadow-2xl border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col transition-all hover:-translate-y-2 duration-300 relative cursor-pointer"
            >
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

                {/* Ghost Skeleton Detail (detectable by crawler via snapshotConfig) */}
                <div className="absolute inset-x-6 bottom-20 opacity-0 pointer-events-none select-none flex flex-col gap-2 boneyard-bones">
                   <div className="w-2/3 h-5 bg-white rounded-md" />
                   <div className="w-full h-3 bg-white rounded-sm" />
                   <div className="w-4/5 h-3 bg-white rounded-sm" />
                   <div className="w-1/4 h-3 bg-white rounded-sm" />
                </div>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedPlato && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedPlato(null)}
        >
          <div 
            className="bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPlato(null)}
              className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-all z-50 backdrop-blur-xl group"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left Side: Image & Highlights */}
            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
              <img src={selectedPlato.image} alt={selectedPlato.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-3 py-1 rounded-full bg-red-500 text-white text-[10px] font-black uppercase tracking-widest mb-3 shadow-lg">
                  {selectedPlato.type}
                </span>
                <h3 className="text-4xl font-black text-white leading-tight drop-shadow-2xl">{selectedPlato.name}</h3>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="md:w-3/5 overflow-y-auto p-8 sm:p-12 bg-stone-50 dark:bg-transparent">
              <div className="space-y-10">
                {/* description */}
                <div>
                  <p className="text-lg text-stone-600 dark:text-stone-300 font-medium leading-relaxed italic">
                    "{selectedPlato.desc}"
                  </p>
                </div>

                {/* Ingredients & Prep Grid */}
                <div className="grid grid-cols-1 gap-10">
                  {/* Ingredients */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-red-500">
                      <ChefHat className="w-6 h-6" />
                      <h4 className="text-xl font-black uppercase tracking-wider">Ingredientes</h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 group">
                      {selectedPlato.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-stone-700 dark:text-stone-300 p-3 bg-white dark:bg-white/5 rounded-2xl border border-stone-200/50 dark:border-white/5 hover:border-red-200 dark:hover:border-red-500/30 transition-colors shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                          <span className="text-sm font-semibold">{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-red-500">
                      <ScrollText className="w-6 h-6" />
                      <h4 className="text-xl font-black uppercase tracking-wider">Preparación</h4>
                    </div>
                    <div className="space-y-4">
                      {selectedPlato.preparation.map((step, idx) => (
                        <div key={idx} className="flex gap-4 group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 font-black text-sm border border-red-100 dark:border-red-500/20 group-hover:scale-110 transition-transform">
                            {idx + 1}
                          </div>
                          <p className="text-base text-stone-700 dark:text-stone-300 font-medium leading-relaxed pt-1">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  {selectedPlato.additionalInfo && (
                    <div className="p-6 rounded-[2rem] bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 border border-red-100 dark:border-red-500/10 relative overflow-hidden group">
                      <div className="flex items-center gap-3 text-red-600 dark:text-red-400 mb-3">
                        <Lightbulb className="w-6 h-6 animate-pulse" />
                        <h4 className="text-lg font-black uppercase tracking-wider">Sabías que...</h4>
                      </div>
                      <p className="text-sm text-stone-700 dark:text-stone-300 font-bold leading-relaxed relative z-10">
                        {selectedPlato.additionalInfo}
                      </p>
                      <div className="absolute -right-4 -bottom-4 opacity-5 transform group-hover:scale-125 transition-transform duration-700">
                         <Utensils className="w-32 h-32 text-red-600" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GastronomiaScreen;
