import React from 'react';

const NavButton = ({ icon, isActive, onClick, activeColor }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-400 ease-out ${
        isActive 
          ? `bg-white/10 ${activeColor} shadow-[0_0_20px_rgba(255,255,255,0.03)] scale-110` 
          : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'
      }`}
    >
      {isActive && (
        <span className={`absolute inset-0 rounded-full blur-md opacity-20 bg-current`}></span>
      )}
      
      {React.cloneElement(icon, { 
        className: `relative z-10 transition-all duration-400 ${isActive ? 'w-6 h-6 stroke-[2.5]' : 'w-5 h-5 stroke-2'}` 
      })}
    </button>
  );
};

export default NavButton;
