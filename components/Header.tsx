import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background-light/90 border-b border-primary/5 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
            <img 
              src="./logo.png" 
              alt="Облепиха VPN Лого" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-primary text-xl md:text-2xl font-extrabold tracking-tight">Облепиха</h2>
        </div>
        <nav className="flex items-center gap-4 md:gap-8">
          <a href="#pricing" className="hidden md:block text-primary/70 hover:text-primary font-bold transition-colors">Преимущества</a>
          <a 
            href="#pricing" 
            className="px-5 py-2.5 rounded-full bg-primary text-[#f7e9c6] text-sm md:text-base font-bold transition-all hover:bg-accent hover:shadow-glow"
          >
            Тарифы
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;