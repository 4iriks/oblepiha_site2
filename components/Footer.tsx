
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#2d201c] text-[#f7e9c6] py-12 px-6 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <img 
                  src="logo.png" 
                  alt="Облепиха VPN Лого" 
                  className="w-full h-full object-contain brightness-110"
                />
              </div>
              <span className="text-2xl font-black tracking-tight">Облепиха VPN</span>
            </div>
            <p className="text-white/40 text-sm max-w-[280px] text-center md:text-left leading-relaxed">
              Простой и надежный проводник в свободный интернет. Сделано с любовью к деталям.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
            <div className="flex flex-col gap-3">
              <a className="flex items-center justify-center md:justify-start gap-2 text-white/60 hover:text-white transition-all text-sm group" href="https://t.me/Oblepiha_Channel">
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                Наш Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center md:text-left pt-12 border-t border-white/5 mt-12">
          <p className="text-[10px] md:text-xs text-white/20 uppercase tracking-[0.2em]">© 2024 Облепиха VPN. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
