import React from 'react';
import { IMAGE_PATHS } from '../constants/images';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 pt-4 md:pt-12 pb-12 lg:pb-24 gap-8 lg:gap-20 min-h-[calc(100vh-100px)] lg:min-h-0">
      {/* Illustration */}
      <div className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] aspect-square rounded-[2.5rem] bg-white/40 border border-primary/5 shadow-soft relative flex items-center justify-center p-6 md:p-12 overflow-hidden group order-1 lg:order-2">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-[#f7e9c6] via-[#e96029]/20 to-[#50674d]/10 rounded-full blur-[60px] md:blur-[100px] opacity-60"></div>
        <div className="relative z-10 w-full h-full transition-transform duration-700 hover:scale-105 flex items-center justify-center">
          <img 
            src={IMAGE_PATHS.HERO} 
            alt="Облепиха VPN Иллюстрация" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-8 text-center lg:text-left items-center lg:items-start max-w-xl relative order-2 lg:order-1">
        <h1 className="text-primary text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-black leading-[1.05] tracking-tight relative z-10">
          <span className="block text-xl md:text-2xl font-extrabold text-primary/80 mb-1">Минимум настроек —</span>
          <span className="text-accent relative inline-block drop-shadow-sm">
            максимум <br className="hidden lg:block"/> комфорта.
            <svg className="absolute w-[110%] h-4 -bottom-1 -left-1 text-secondary opacity-40 z-[-1]" preserveAspectRatio="none" viewBox="0 0 100 10">
              <path d="M0 5 Q 50 12 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
            </svg>
          </span>
        </h1>
        
        <p className="text-primary/70 text-base md:text-xl font-medium leading-relaxed font-body max-w-md">
          Простой и надежный VPN сервис с обходом белых списков.
        </p>

        <div className="flex flex-col items-center lg:items-start w-full mt-2">
          <div className="flex flex-col items-center gap-3 w-full sm:w-[380px]">
            <a 
              href="#pricing" 
              className="w-full h-14 md:h-16 flex items-center justify-center rounded-2xl bg-primary text-[#f7e9c6] text-lg md:text-xl font-bold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              Начать
            </a>
            <div className="flex items-center gap-2 text-sm md:text-base text-secondary font-semibold">
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <span>10₽ за пробный период</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;