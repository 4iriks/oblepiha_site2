
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'rocket_launch',
      title: 'Мгновенное подключение',
      desc: '2 клика и VPN уже работает на вашем устройстве, смотрите любой контент без замедлений или блокировок.',
      color: 'text-accent'
    },
    {
      icon: 'key',
      title: 'Обход белых списков',
      desc: 'Наши легендарные разработчики нашли способ вернуть вам интернет даже когда у вас блокировки.',
      color: 'text-secondary'
    },
    {
      icon: 'devices',
      title: 'Без ограничений',
      desc: 'Один аккаунт для 5 устройств одновременно.',
      color: 'text-primary'
    }
  ];

  return (
    <section className="px-6 py-12">
      <h2 className="sr-only">Преимущества</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col lg:items-start gap-5 p-8 bg-white border border-primary/5 rounded-[2.5rem] shadow-card transition-all hover:scale-[1.03] hover:shadow-md">
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-background-light flex items-center justify-center shrink-0 ${f.color}`}>
              <span className="material-symbols-outlined text-3xl md:text-4xl">{f.icon}</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold text-primary">{f.title}</h3>
              <p className="text-sm md:text-base text-primary/60 leading-relaxed mt-2">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
