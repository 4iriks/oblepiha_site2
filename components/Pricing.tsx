
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [selected, setSelected] = useState('monthly');
  const botLink = "https://t.me/oblepiha_vpn_bot";

  return (
    <section className="px-6 py-16 lg:py-24 scroll-mt-20" id="pricing">
      <div className="flex flex-col gap-3 mb-12 text-center">
        <h2 className="text-primary text-3xl md:text-5xl font-black">Выберите свой комфорт</h2>
        <p className="text-primary/70 text-base md:text-lg">Честные цены без скрытых условий</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Trial Plan */}
        <div 
          onClick={() => setSelected('trial')}
          className={`relative flex flex-col p-8 bg-white border-2 rounded-[2.5rem] transition-all duration-300 cursor-pointer shadow-sm ${selected === 'trial' ? 'border-accent bg-accent/5' : 'border-primary/5 hover:border-accent/30'}`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-primary">Пробный</span>
            <span className="text-3xl font-black text-primary">10 ₽</span>
          </div>
          <p className="text-primary/60 text-base mb-10 leading-relaxed">
            3 дня полного доступа ко всем возможностям. Оцените качество нашего сервиса.
          </p>
          <div className="mt-auto">
            <a href={botLink} className={`w-full py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 ${selected === 'trial' ? 'bg-accent text-white shadow-glow' : 'bg-primary/5 text-primary'}`}>
              Попробовать
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </a>
          </div>
        </div>

        {/* Popular Monthly Plan */}
        <div 
          onClick={() => setSelected('monthly')}
          className={`relative flex flex-col p-8 bg-primary border-4 rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500 transform ${selected === 'monthly' ? 'border-accent scale-[1.05] z-10' : 'border-transparent'}`}
        >
          <div className="absolute top-0 right-0 bg-accent text-white text-[11px] font-black uppercase tracking-widest px-6 py-2 rounded-bl-2xl">Популярный</div>
          <div className="flex justify-between items-center mb-6 mt-4">
            <span className="text-2xl font-bold text-white">1 Месяц</span>
            <span className="text-4xl font-black text-accent drop-shadow-sm">199 ₽</span>
          </div>
          <p className="text-white/60 text-base mb-10 leading-relaxed">
            Максимальная свобода и скорость. Подключайте до 5 устройств одновременно.
          </p>
          <div className="mt-auto">
            <a href={botLink} className="w-full py-5 rounded-2xl bg-accent text-white font-black text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Подключить
              <span className="material-symbols-outlined text-xl">bolt</span>
            </a>
          </div>
        </div>

        {/* 3 Months Plan */}
        <div 
          onClick={() => setSelected('three-months')}
          className={`relative flex flex-col p-8 bg-white border-2 rounded-[2.5rem] transition-all duration-300 cursor-pointer shadow-sm ${selected === 'three-months' ? 'border-accent bg-accent/5' : 'border-primary/5 hover:border-accent/30'}`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-primary">3 Месяца</span>
            <span className="text-3xl font-black text-primary">549 ₽</span>
          </div>
          <p className="text-primary/60 text-base mb-10 leading-relaxed">
            Выгодный выбор для долгой работы. Экономьте более 10% ежемесячно.
          </p>
          <div className="mt-auto">
            <a href={botLink} className={`w-full py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 ${selected === 'three-months' ? 'bg-accent text-white shadow-glow' : 'bg-primary/5 text-primary'}`}>
              Выбрать тариф
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
