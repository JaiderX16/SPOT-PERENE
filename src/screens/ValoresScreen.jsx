import React, { useState, useEffect } from 'react';
import { Skeleton } from 'boneyard-js/react';
import { Sun, Heart, X, ChevronRight, Sparkles } from 'lucide-react';
import { VALORES } from '../data/culturalData';

// Color map for each valor
const colorMap = {
  emerald: {
    gradient: 'from-emerald-900 via-emerald-800 to-teal-900',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    dot: 'bg-emerald-400',
    chip: 'bg-emerald-900/60 border-emerald-700/40 text-emerald-200',
    glow: 'shadow-emerald-900/50',
    pill: 'bg-emerald-500',
  },
  amber: {
    gradient: 'from-amber-900 via-yellow-900 to-orange-900',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    dot: 'bg-amber-400',
    chip: 'bg-amber-900/60 border-amber-700/40 text-amber-200',
    glow: 'shadow-amber-900/50',
    pill: 'bg-amber-500',
  },
  sky: {
    gradient: 'from-sky-900 via-blue-900 to-indigo-900',
    badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    dot: 'bg-sky-400',
    chip: 'bg-sky-900/60 border-sky-700/40 text-sky-200',
    glow: 'shadow-sky-900/50',
    pill: 'bg-sky-500',
  },
  rose: {
    gradient: 'from-rose-900 via-pink-900 to-red-900',
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    dot: 'bg-rose-400',
    chip: 'bg-rose-900/60 border-rose-700/40 text-rose-200',
    glow: 'shadow-rose-900/50',
    pill: 'bg-rose-500',
  },
};

// ─── Modal Component ──────────────────────────────────────────────────────────
const ValorModal = ({ valor, onClose }) => {
  const c = colorMap[valor.color] || colorMap.emerald;

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal Card */}
      <div
        className="relative w-full sm:max-w-lg max-h-[92dvh] overflow-y-auto rounded-t-[2.5rem] sm:rounded-[2.5rem] bg-[#0f0f0f] shadow-2xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-64 flex-shrink-0 overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[2.5rem]">
          <img
            src={valor.image}
            alt={valor.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-70`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Drag pill (mobile) */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full sm:hidden" />

          {/* Icon + Title over image */}
          <div className="absolute bottom-5 left-6 right-6 z-10">
            <div className="flex items-end gap-3">
              <span className="text-4xl drop-shadow-lg">{valor.icon}</span>
              <h2 className="text-3xl font-black text-white tracking-tight drop-shadow-xl leading-tight">
                {valor.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Short badge */}
          <span className={`inline-flex items-center gap-1.5 border text-xs font-semibold px-3 py-1.5 rounded-full ${c.badge}`}>
            <Sparkles className="w-3 h-3" />
            Valor Cultural del Perené
          </span>

          {/* Full story */}
          <div>
            <p className="text-stone-300 text-sm leading-relaxed">
              {valor.fullStory}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Practices */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-stone-400" />
              Prácticas comunitarias
            </h3>
            <ul className="space-y-3">
              {valor.practices.map((practice, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${c.dot}`} />
                  <span className="text-stone-300 text-sm leading-relaxed">{practice}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Close button bottom */}
          <button
            onClick={onClose}
            className={`w-full py-3.5 rounded-2xl font-bold text-white text-sm ${c.pill} hover:opacity-90 transition-opacity active:scale-95`}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Screen ──────────────────────────────────────────────────────────────
const ValoresScreen = ({ isSkeleton, isDark }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Hero Banner */}
      <Skeleton name="valores-hero" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
        <div className="relative h-64 md:h-80 lg:h-96 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-end p-8 text-white group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-[10s] ease-linear" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent" />
          <div className="absolute top-0 right-0 p-6 opacity-30">
            <Sun className="w-24 h-24 text-yellow-200" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 relative z-10 drop-shadow-lg tracking-tight">Identidad Viva</h1>
          <p className="text-emerald-50 opacity-95 text-sm md:text-base lg:text-lg font-medium relative z-10 drop-shadow-md max-w-3xl">
            Descubre el alma de Perené. Un viaje inmersivo a través de nuestros valores y herencia milenaria protegida por la comunidad.
          </p>
        </div>
      </Skeleton>

      {/* Section title */}
      <div>
        <h2 className="text-2xl md:text-3xl font-black text-emerald-900 dark:text-emerald-400 mb-2 flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-500" />
          Nuestros Valores
        </h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm font-medium">
          Toca cualquier valor para conocer más
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {VALORES.map((val) => {
          const c = colorMap[val.color] || colorMap.emerald;
          return (
            <Skeleton key={val.id} name="valor-card" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
              <div
                onClick={() => setSelected(val)}
                className="group relative rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl border border-stone-100 dark:border-white/5 cursor-pointer h-72 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
                </div>

                {/* "Más info" hint top-right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-3 h-3" />
                    Ver más
                  </span>
                </div>

                {/* Icon badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-2xl drop-shadow-lg">{val.icon}</span>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 flex flex-col h-full justify-end p-6">
                  <h3 className="font-black text-white text-xl mb-1.5 drop-shadow-md group-hover:translate-y-[-4px] transition-transform duration-300">
                    {val.title}
                  </h3>
                  <p className="text-sm text-stone-200 leading-relaxed opacity-90 mb-3 group-hover:translate-y-[-4px] transition-transform duration-300 delay-75">
                    {val.desc}
                  </p>
                  
                  {/* Ghost Skeleton Detail (detectable by crawler via snapshotConfig) */}
                  <div className="absolute inset-x-6 bottom-16 opacity-0 pointer-events-none select-none flex flex-col gap-2 boneyard-bones">
                     <div className="w-1/2 h-5 bg-white rounded-md" />
                     <div className="w-full h-3 bg-white rounded-sm" />
                     <div className="w-4/5 h-3 bg-white rounded-sm" />
                     <div className="w-1/3 h-3 bg-white rounded-sm" />
                  </div>

                  {/* Tap chip */}
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    <span className="text-white/60 text-xs font-medium">Toca para saber más</span>
                  </div>
                </div>
              </div>
            </Skeleton>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <ValorModal valor={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default ValoresScreen;
