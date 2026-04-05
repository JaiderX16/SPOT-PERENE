import React from 'react';
import { Sun, Heart } from 'lucide-react';
import { VALORES } from '../data/culturalData';

const ValoresScreen = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-end p-8 text-white group">
      {/* Background Image that slowly pans */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-[10s] ease-linear"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
      
      <div className="absolute top-0 right-0 p-6 opacity-30">
        <Sun className="w-24 h-24 text-yellow-200" />
      </div>
      
      <h1 className="text-5xl font-black mb-3 relative z-10 drop-shadow-lg tracking-tight">Identidad Viva</h1>
      <p className="text-emerald-50 opacity-95 text-base md:text-lg font-medium relative z-10 drop-shadow-md max-w-2xl">
        Descubre el alma de Perené. Un viaje inmersivo a través de nuestros valores y herencia milenaria protegida por la comunidad.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-black text-emerald-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
        <Heart className="w-8 h-8 text-red-500" />
        Nuestros Valores
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALORES.map(val => (
          <div key={val.id} className="group bg-white dark:bg-[#1e1e1e] rounded-[2rem] shadow-sm hover:shadow-xl border border-stone-100 dark:border-white/5 overflow-hidden flex flex-col transition-all hover:-translate-y-2 duration-300 relative cursor-pointer h-72">
            <div className="absolute inset-0">
              <img src={val.image} alt={val.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-end p-6">
              <h3 className="font-bold text-white text-xl mb-2 drop-shadow-md">{val.title}</h3>
              <p className="text-sm text-stone-200 leading-relaxed opacity-90">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ValoresScreen;
