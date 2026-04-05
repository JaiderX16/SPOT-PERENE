import React, { useState } from 'react';
import { Flame, PlayCircle } from 'lucide-react';
import { DANZAS } from '../data/culturalData';

const DanzasScreen = () => {
  const [playingId, setPlayingId] = useState(null);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-4xl font-black text-red-600 dark:text-red-400 flex items-center gap-3">
          <Flame className="w-10 h-10 text-orange-500 animate-pulse" />
          Danzas
        </h2>
      </div>
      
      <p className="text-stone-600 dark:text-stone-300 font-medium mb-6 text-lg">Disfruta del registro visual de nuestras danzas. Selecciona para expandir el video inmersivo.</p>

      <div className="flex flex-col gap-8">
        {DANZAS.map(danza => (
          <div 
            key={danza.id} 
            className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-video w-full cursor-pointer border border-stone-200 dark:border-white/10"
            onClick={() => setPlayingId(danza.id)}
          >
            {playingId === danza.id ? (
              <iframe 
                src={`${danza.videoUrl}?autoplay=1&rel=0`} 
                title={danza.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0 animate-in fade-in duration-1000"
              />
            ) : (
              <>
                {/* Ken Burns effect simulating video motion */}
                <img src={danza.image} alt={danza.title} className="absolute inset-0 w-full h-full object-cover transform scale-110 group-hover:scale-[1.15] transition-transform duration-[15s] ease-linear" />
                
                {/* Gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                   <div className="w-20 h-20 rounded-full bg-red-500/80 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                     <PlayCircle className="w-10 h-10 text-white ml-2" />
                   </div>
                </div>
                
                <div className="absolute bottom-6 left-8 right-8 z-10 transition-transform transform group-hover:translate-y-[-10px] duration-500">
                  <h3 className="font-black mb-2 text-3xl md:text-5xl text-white drop-shadow-xl tracking-tight">{danza.title}</h3>
                  <p className="text-base md:text-lg text-stone-200 opacity-95 leading-relaxed max-w-2xl">{danza.desc}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DanzasScreen;
