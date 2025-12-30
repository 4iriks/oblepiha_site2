
import React from 'react';

const CTASection: React.FC = () => {
  const botLink = "https://t.me/oblepiha_vpn_bot";
  return (
    <section className="px-4 md:px-6 py-12 lg:py-20">
      <div className="bg-gradient-to-br from-primary to-[#2d201c] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-5xl font-black text-[#f7e9c6] leading-tight">Готовы к новому уровню <br className="hidden md:block"/> цифрового уюта?</h2>
            <p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Присоединяйтесь к тысячам пользователей, которые уже выбрали свободу и стабильность. Настройка за 1 минуту.
            </p>
          </div>

          <div className="w-full max-w-lg flex flex-col sm:flex-row gap-4">
            <a href={botLink} className="w-full sm:flex-1 h-14 md:h-16 flex items-center justify-center rounded-2xl bg-accent text-white font-black text-lg md:text-xl shadow-glow hover:brightness-110 hover:scale-[1.02] transition-all">
              Купить подписку
            </a>
            <a href={botLink} className="w-full sm:flex-1 h-14 md:h-16 flex items-center justify-center rounded-2xl bg-white/10 text-[#f7e9c6] font-bold text-base md:text-lg hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm">
              Тест за 10₽
            </a>
          </div>

          {/* Преимущества в одну строку на мобилках */}
          <div className="flex items-center justify-center gap-2 md:gap-8 pt-2 w-full overflow-hidden">
            <div className="flex items-center gap-1 text-white/40 font-bold uppercase tracking-wider text-[9px] md:text-xs whitespace-nowrap">
              Безопасно
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-1 text-white/40 font-bold uppercase tracking-wider text-[9px] md:text-xs whitespace-nowrap">
              Быстро
            </div>
            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-1 text-white/40 font-bold uppercase tracking-wider text-[9px] md:text-xs whitespace-nowrap">
              Обход списков
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
