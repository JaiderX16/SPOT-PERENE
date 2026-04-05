import React, { useState, useEffect } from 'react';
import { Skeleton } from 'boneyard-js/react';
import { Leaf, X, ChevronRight, Sparkles } from 'lucide-react';
import { COSTUMBRES } from '../data/culturalData';

// Color map for each costumbre
const colorMap = {
  green: {
    gradient: 'from-green-900 via-emerald-800 to-lime-900',
    badge: 'bg-green-500/20 text-green-300 border-green-500/30',
    dot: 'bg-green-400',
    pill: 'bg-green-600',
  },
  teal: {
    gradient: 'from-teal-900 via-cyan-900 to-emerald-900',
    badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    dot: 'bg-teal-400',
    pill: 'bg-teal-600',
  },
  orange: {
    gradient: 'from-orange-900 via-amber-900 to-yellow-900',
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    dot: 'bg-orange-400',
    pill: 'bg-orange-600',
  },
  purple: {
    gradient: 'from-purple-900 via-violet-900 to-indigo-900',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    dot: 'bg-purple-400',
    pill: 'bg-purple-600',
  },
};

// ─── Modal ────────────────────────────────────────────────────────────────────
const CostumbreModal = ({ costumbre, onClose }) => {
  const c = colorMap[costumbre.color] || colorMap.green;

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
        className="relative w-full sm:max-w-lg max-h-[92dvh] overflow-y-auto rounded-t-[2.5rem] sm:rounded-[2.5rem] bg-[#0f0f0f] shadow-2xl animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-64 flex-shrink-0 overflow-hidden rounded-t-[2.5rem]">
          <img src={costumbre.image} alt={costumbre.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-70`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

          {/* Close */}
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          {/* Drag pill (mobile) */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full sm:hidden" />

          {/* Icon + Title */}
          <div className="absolute bottom-5 left-6 right-6 z-10">
            <div className="flex items-end gap-3">
              <span className="text-4xl drop-shadow-lg">{costumbre.icon}</span>
              <h2 className="text-3xl font-black text-white tracking-tight drop-shadow-xl leading-tight">
                {costumbre.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Badge */}
          <span className={`inline-flex items-center gap-1.5 border text-xs font-semibold px-3 py-1.5 rounded-full ${c.badge}`}>
            <Sparkles className="w-3 h-3" />
            Costumbre del Perené
          </span>

          {/* Full story */}
          <p className="text-stone-300 text-sm leading-relaxed">
            {costumbre.fullStory}
          </p>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-stone-400" />
              Aspectos destacados
            </h3>
            <ul className="space-y-3">
              {costumbre.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${c.dot}`} />
                  <span className="text-stone-300 text-sm leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Close CTA */}
          <button onClick={onClose} className={`w-full py-3.5 rounded-2xl font-bold text-white text-sm ${c.pill} hover:opacity-90 transition-opacity active:scale-95`}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Main Screen ──────────────────────────────────────────────────────────────
const CostumbresScreen = ({ isSkeleton, isDark }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Hero Banner */}
      <Skeleton name="costumbres-hero" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
        <div className="bg-gradient-to-r from-emerald-900 to-stone-800 p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518182170546-076616fd4cb8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[10s]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 flex items-center gap-3">
              <Leaf className="w-8 h-8 text-green-400" /> Costumbres
            </h2>
            <p className="text-stone-300 text-sm md:text-base lg:text-lg font-medium max-w-2xl">
              Prácticas y estilo de vida arraigados profundamente en nuestra tierra y el día a día comunitario.
            </p>
          </div>
        </div>
      </Skeleton>

      {/* Subtitle */}
      <p className="text-stone-500 dark:text-stone-400 text-sm font-medium px-1">
        Toca cualquier costumbre para conocer más
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {COSTUMBRES.map((costumbre) => {
          const c = colorMap[costumbre.color] || colorMap.green;
          return (
            <Skeleton key={costumbre.id} name="costumbre-card" loading={isSkeleton} animate={true} color={isDark ? '#262626' : '#e0e0e0'}>
              <div
                onClick={() => setSelected(costumbre)}
                className="group relative bg-white dark:bg-[#1a1a1a] h-64 rounded-[2rem] shadow-md hover:shadow-2xl overflow-hidden flex cursor-pointer transition-all hover:-translate-y-1 duration-300"
              >
                <img
                  src={costumbre.image}
                  alt={costumbre.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

                {/* "Ver más" hint top right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-3 h-3" />
                    Ver más
                  </span>
                </div>

                {/* Icon badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-2xl drop-shadow-lg">{costumbre.icon}</span>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 flex flex-col justify-end p-7 w-2/3">
                  <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:translate-y-[-4px] transition-transform duration-300">
                    {costumbre.title}
                  </h3>
                  <p className="text-sm text-stone-200 leading-relaxed font-medium mb-3 group-hover:translate-y-[-4px] transition-transform duration-300 delay-75">
                    {costumbre.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    <span className="text-white/60 text-xs font-medium">Toca para saber más</span>
                  </div>

                  {/* Ghost Skeleton Detail (only seen by Boneyard CLI crawler) */}
                  <div className="absolute inset-x-7 bottom-12 opacity-0 pointer-events-none select-none flex flex-col gap-2">
                     <div className="w-1/2 h-6 bg-white rounded-md" />
                     <div className="w-full h-3 bg-white rounded-sm" />
                     <div className="w-4/5 h-3 bg-white rounded-sm" />
                     <div className="w-1/4 h-3 bg-white rounded-sm" />
                  </div>
                </div>
              </div>
            </Skeleton>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <CostumbreModal costumbre={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default CostumbresScreen;
