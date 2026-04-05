import React, { useState } from 'react';
import { Skeleton } from 'boneyard-js/react';
import { Flame, PlayCircle, X, Volume2, Eye } from 'lucide-react';
import { DANZAS } from '../data/culturalData';

const DanzasScreen = ({ isSkeleton, isDark }) => {
  const [playingId, setPlayingId] = useState(null);

  const handlePlay = (e, id) => {
    e.stopPropagation();
    setPlayingId(id);
  };

  const handleStop = (e, id) => {
    e.stopPropagation();
    setPlayingId(null);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Hero Header */}
      <Skeleton name="danzas-hero" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
        <div className="relative rounded-[2rem] overflow-hidden min-h-[12rem] md:min-h-[16rem] flex items-end p-8 md:p-12 shadow-2xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-900 to-amber-800" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Flame className="w-5 h-5 text-orange-300" />
              </div>
              <span className="text-orange-300 font-bold text-xs uppercase tracking-[0.2em]">Patrimonio Cultural Vivo</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-xl">Danzas</h1>
            <p className="text-orange-100/80 text-sm md:text-base font-medium mt-1">Toca el video para vivir la experiencia</p>
          </div>
        </div>
      </Skeleton>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {DANZAS.map((danza, index) => (
          <Skeleton key={danza.id} name="danza-card" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
            <div className="group relative">
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-black flex items-center justify-center shadow-sm">
                  {index + 1}
                </span>
                <span className="font-bold text-stone-700 dark:text-stone-300 text-sm uppercase tracking-wider">
                  {danza.title}
                </span>
              </div>

              {/* Video Container */}
              <div
                className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video w-full cursor-pointer border border-stone-200/60 dark:border-white/10 bg-black"
                onClick={playingId !== danza.id ? (e) => handlePlay(e, danza.id) : undefined}
              >
                {/* ... (playingId check same as before) ... */}
                <img
                  src={danza.image}
                  alt={danza.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[15s] ease-linear"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
                
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform group-hover:translate-y-[-6px] transition-transform duration-500">
                  <h2 className="font-black text-3xl md:text-4xl text-white drop-shadow-xl tracking-tight mb-2">
                    {danza.title}
                  </h2>
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl opacity-90">
                    {danza.desc}
                  </p>
                  {/* Meta chips */}
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Volume2 className="w-3 h-3" />
                      Con audio
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-red-500/30 backdrop-blur-sm border border-red-400/30 text-red-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Eye className="w-3 h-3" />
                      Toca para ver
                    </span>
                  </div>
                </div>

                {/* Ghost Skeleton Detail (detectable by crawler via snapshotConfig) */}
                <div className="absolute inset-x-7 bottom-0 top-0 opacity-0 pointer-events-none select-none flex flex-col justify-end p-8 gap-3 boneyard-bones">
                   <div className="w-1/2 h-8 bg-white rounded-md mb-2" />
                   <div className="w-full h-4 bg-white rounded-sm" />
                   <div className="w-4/5 h-4 bg-white rounded-sm" />
                   <div className="w-1/3 h-4 bg-white rounded-sm" />
                   <div className="flex gap-2 mt-2">
                      <div className="w-24 h-7 bg-white rounded-full" />
                      <div className="w-24 h-7 bg-white rounded-full" />
                   </div>
                </div>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
      {/* ... (footer tip same as before) ... */}
    </div>
  );
};

export default DanzasScreen;
