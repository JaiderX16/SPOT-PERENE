import React, { useState, useEffect } from 'react';
import { Skeleton } from 'boneyard-js/react';
import { BookOpen, X, Volume2, VolumeX } from 'lucide-react';
import { RELATOS } from '../data/culturalData';

const RelatosScreen = ({ isSkeleton, isDark }) => {
  const [selectedRelato, setSelectedRelato] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // When modal closes, stop speech
    if (!selectedRelato) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  }, [selectedRelato]);

  const toggleSpeech = (text) => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // cancel any previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES'; // Spanish voice
      utterance.rate = 0.9; // Slightly slower for storytelling
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-4xl font-black text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-3">
        <BookOpen className="w-9 h-9 text-blue-600 dark:text-blue-400" />
        Nuestros Relatos
      </h2>
      <p className="text-base font-medium text-stone-600 dark:text-stone-300 leading-relaxed mb-8 max-w-2xl">
        Descubre las leyendas transmitidas de generación en generación que dan forma a nuestra mitología amazónica.
      </p>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {RELATOS.map(relato => (
          <Skeleton key={relato.id} name="relato-card" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
            <div className="group bg-white dark:bg-[#1e1e1e] rounded-[2rem] shadow-md hover:shadow-2xl border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col md:flex-row transition-all hover:-translate-y-1 duration-300 min-h-[220px]">
              <div className="md:w-2/5 relative overflow-hidden h-48 md:h-auto">
                 <img src={relato.image} alt={relato.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[8s]" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center bg-stone-50/50 dark:bg-transparent">
                <span className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">Mito Origen</span>
                <h3 className="font-black text-3xl mb-4 text-stone-800 dark:text-stone-100">{relato.title}</h3>
                <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-lg">{relato.desc}</p>
                
                <button 
                  onClick={() => setSelectedRelato(relato)}
                  className="mt-6 self-start px-6 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 text-blue-800 dark:text-blue-300 font-bold rounded-full transition-colors text-sm"
                >
                  Leer Historia Completa
                </button>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>

      {selectedRelato && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all" onClick={() => setSelectedRelato(null)}>
          <div 
            className="bg-white dark:bg-[#1e1e1e] rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedRelato(null)}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 dark:bg-black/40 dark:hover:bg-black/60 rounded-full transition-colors z-10 backdrop-blur-md"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="h-64 relative">
              <img src={selectedRelato.image} alt={selectedRelato.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1e1e1e] to-transparent"></div>
            </div>
            
            <div className="px-8 pb-8 pt-4">
              <h3 className="font-black text-4xl mb-6 text-stone-800 dark:text-stone-100">{selectedRelato.title}</h3>
              
              <button
                onClick={() => toggleSpeech(selectedRelato.fullStory)}
                className="mb-8 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
              >
                {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                {isPlaying ? 'Detener lectura' : 'Escuchar historia'}
              </button>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                  {selectedRelato.fullStory}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatosScreen;
