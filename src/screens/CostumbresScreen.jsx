import React from 'react';
import { Leaf } from 'lucide-react';
import { COSTUMBRES } from '../data/culturalData';

const CostumbresScreen = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="bg-gradient-to-r from-emerald-900 to-stone-800 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden group">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518182170546-076616fd4cb8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[10s]"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-black mb-3 flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-400" /> Costumbres
        </h2>
        <p className="text-stone-300 text-base md:text-lg font-medium max-w-xl">Prácticas y estilo de vida arraigados profundamente en nuestra tierra y el día a día comunitario.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
      {COSTUMBRES.map(costumbre => (
        <div key={costumbre.id} className="group bg-white dark:bg-[#1a1a1a] h-64 rounded-[2rem] shadow-md hover:shadow-2xl overflow-hidden flex relative transition-all hover:-translate-y-2 duration-300">
          <img src={costumbre.image} alt={costumbre.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col justify-center p-8 w-2/3">
            <h3 className="font-black text-white text-2xl mb-3 leading-tight">{costumbre.title}</h3>
            <p className="text-sm text-stone-200 leading-relaxed font-medium">{costumbre.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CostumbresScreen;
