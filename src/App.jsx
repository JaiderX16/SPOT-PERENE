import React, { useState } from 'react';
import { Skeleton } from 'boneyard-js/react';
import { 
  Heart, 
  Users, 
  Music, 
  Utensils, 
  BookOpen, 
  MapPin, 
  Sun,
  Moon,
  Loader
} from 'lucide-react';

// Importar los componentes separados
import NavButton from './components/NavButton';
import ValoresScreen from './screens/ValoresScreen';
import CostumbresScreen from './screens/CostumbresScreen';
import DanzasScreen from './screens/DanzasScreen';
import GastronomiaScreen from './screens/GastronomiaScreen';
import RelatosScreen from './screens/RelatosScreen';
import LugaresScreen from './screens/LugaresScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'valores';
  });
  const [isDark, setIsDark] = useState(false);
  const [isSkeleton, setIsSkeleton] = useState(false);

  return (
    <div className={`h-[100dvh] flex justify-center font-sans selection:bg-emerald-200 selection:text-emerald-900 ${isDark ? 'dark bg-stone-900' : 'bg-stone-200/50'}`}>
      
      {/* Contenedor Principal Adaptable Responsivo */}
      <div className="w-full xl:max-w-[70%] bg-[#faf9f7] dark:bg-[#121212] flex flex-col relative h-full shadow-2xl overflow-hidden md:border-x border-stone-200/60 dark:border-white/10 transition-colors duration-500">
        
        {/* Barra Superior */}
        <header className="bg-white/85 dark:bg-[#121212]/85 backdrop-blur-lg pt-6 pb-4 px-6 sticky top-0 z-20 flex justify-between items-center border-b border-stone-200/50 dark:border-white/10 shadow-sm transition-colors duration-500">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm p-1.5 border border-stone-100 dark:border-white/10 hover:scale-105 transition-all">
              {/* Logo SVG adaptativo */}
              <svg viewBox="0 0 120 120" className="w-12 h-12 drop-shadow-sm transition-colors">
                <circle cx="60" cy="60" r="56" fill={isDark ? "#1a1a1a" : "#FFFDF9"} stroke={isDark ? "#fde68a" : "#5D4037"} strokeWidth="2.5" />
                <path d="M60 32 A 9 9 0 1 0 60 14 A 9 9 0 1 0 60 32" fill="#F5A623" />
                <line x1="60" y1="4" x2="60" y2="10" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="40" y1="12" x2="45" y2="16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="80" y1="12" x2="75" y2="16" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="23" x2="38" y2="23" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="88" y1="23" x2="82" y2="23" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                
                <path d="M 12 80 Q 40 70 60 85 T 108 80 L 100 100 Q 80 115 60 95 T 20 95 Z" fill={isDark ? "#60a5fa" : "#3b82f6"} />
                <path d="M 12 80 Q 30 90 45 80 L 15 80 Z" fill={isDark ? "#4ade80" : "#22c55e"} />
                <path d="M 108 80 Q 90 90 75 80 L 105 80 Z" fill={isDark ? "#4ade80" : "#22c55e"} />
                
                <path d="M 10 55 C 10 35 30 45 30 55 C 30 65 10 75 10 55 Z" fill={isDark ? "#4ade80" : "#22c55e"} stroke={isDark ? "#14532d" : "#166534"} strokeWidth="1.5"/>
                <path d="M 110 55 C 110 35 90 45 90 55 C 90 65 110 75 110 55 Z" fill={isDark ? "#4ade80" : "#22c55e"} stroke={isDark ? "#14532d" : "#166534"} strokeWidth="1.5"/>
                
                <text x="60" y="49" fontSize="16" fontWeight="bold" fill={isDark ? "#fde68a" : "#78350f"} textAnchor="middle" fontFamily="serif">Raíces de</text>
                <text x="60" y="69" fontSize="21" fontWeight="900" fill={isDark ? "#fef3c7" : "#451a03"} textAnchor="middle" fontFamily="sans-serif">PERENÉ</text>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-[10px] uppercase tracking-[0.2em] text-amber-900/60 dark:text-amber-400/70 leading-none mb-0.5">
                Cultura & Vida
              </span>
              <span className="font-black text-xl tracking-tight text-stone-800 dark:text-stone-100 leading-none">
                Raíces Perené
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Botón Toggle Skeleton */}
            <button 
              onClick={() => setIsSkeleton(!isSkeleton)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${isSkeleton ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400' : 'bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-stone-400'}`}
              aria-label="Alternar modo carga"
            >
              <Loader className={`w-5 h-5 ${isSkeleton ? 'animate-spin' : ''}`} />
            </button>

            {/* Botón Toggle Dark Mode */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-yellow-400 hover:scale-105 transition-all shadow-sm"
              aria-label="Alternar tema oscuro"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Área de Contenido */}
        <main className="flex-1 overflow-y-auto px-6 py-8 pb-36">
          {activeTab === 'valores' && <ValoresScreen isSkeleton={isSkeleton} isDark={isDark} />}
          {activeTab === 'costumbres' && <CostumbresScreen isSkeleton={isSkeleton} isDark={isDark} />}
          {activeTab === 'danzas' && <DanzasScreen isSkeleton={isSkeleton} isDark={isDark} />}
          {activeTab === 'gastronomia' && <GastronomiaScreen isSkeleton={isSkeleton} isDark={isDark} />}
          {activeTab === 'relatos' && <RelatosScreen isSkeleton={isSkeleton} isDark={isDark} />}
          {activeTab === 'lugares' && <LugaresScreen isSkeleton={isSkeleton} isDark={isDark} />}
        </main>

        {/* Barra de Navegación (Se mantiene oscura en ambos modos para estilo premium) */}
        <div className="absolute bottom-6 left-0 right-0 px-4 pointer-events-none z-50 flex justify-center">
          <nav className="pointer-events-auto w-full max-w-[380px] bg-[#1a1816]/95 backdrop-blur-2xl rounded-full px-2 py-2 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] border border-white/10">
            <div className="flex justify-between items-center gap-1">
              <NavButton 
                icon={<Heart />} 
                isActive={activeTab === 'valores'} 
                onClick={() => setActiveTab('valores')} 
                activeColor="text-green-400"
              />
              <NavButton 
                icon={<Users />} 
                isActive={activeTab === 'costumbres'} 
                onClick={() => setActiveTab('costumbres')} 
                activeColor="text-amber-500"
              />
              <NavButton 
                icon={<Music />} 
                isActive={activeTab === 'danzas'} 
                onClick={() => setActiveTab('danzas')} 
                activeColor="text-red-400"
              />
              <NavButton 
                icon={<Utensils />} 
                isActive={activeTab === 'gastronomia'} 
                onClick={() => setActiveTab('gastronomia')} 
                activeColor="text-orange-400"
              />
              <NavButton 
                icon={<BookOpen />} 
                isActive={activeTab === 'relatos'} 
                onClick={() => setActiveTab('relatos')} 
                activeColor="text-blue-400"
              />
              <NavButton 
                icon={<MapPin />} 
                isActive={activeTab === 'lugares'} 
                onClick={() => setActiveTab('lugares')} 
                activeColor="text-cyan-400"
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
