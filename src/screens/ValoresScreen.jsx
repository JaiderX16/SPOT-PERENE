import React from 'react';
import { Sun, Heart } from 'lucide-react';
import { VALORES } from '../data/culturalData';

const ValoresScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative h-60 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-emerald-800 via-green-600 to-yellow-500 dark:from-emerald-950 dark:via-green-900 dark:to-yellow-700 flex flex-col justify-end p-7 text-white transform transition-transform hover:scale-[1.02] duration-300">
      <div className="absolute top-0 right-0 p-4 opacity-30">
        <Sun className="w-24 h-24 text-yellow-200 dark:text-yellow-400" />
      </div>
      <h1 className="text-4xl font-extrabold mb-2 relative z-10 drop-shadow-md">Identidad Viva</h1>
      <p className="text-green-50 opacity-95 text-sm font-medium relative z-10 drop-shadow">
        Descubre el alma de Perené. Un viaje a través de nuestros valores y herencia milenaria.
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-3 flex items-center gap-2">
        <Heart className="w-6 h-6 text-red-500 dark:text-red-400" />
        Nuestros Valores
      </h2>
      <p className="text-sm text-amber-800 dark:text-amber-200 mb-5 bg-amber-50 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-200/60 dark:border-amber-700/30 shadow-sm">
        En Perené, influenciado fuertemente por comunidades como los <strong className="text-amber-900 dark:text-amber-400">Asháninka</strong>, destacan:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VALORES.map(val => (
          <div key={val.id} className="bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl shadow-sm hover:shadow-md border border-stone-100 dark:border-white/5 flex items-start gap-4 transition-all hover:-translate-y-1 duration-300">
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl ${val.bg} ${val.color} text-2xl shadow-inner`}>
              {val.icon}
            </div>
            <div>
              <h3 className="font-bold text-stone-800 dark:text-stone-100 mb-1">{val.title}</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-snug">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ValoresScreen;
