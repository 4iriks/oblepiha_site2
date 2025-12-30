
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Как быстро я получу доступ?',
      a: 'Мгновенно. Сразу после оплаты вы получите код доступа и простые инструкции по настройке в Telegram боте. Это занимает меньше минуты.'
    },
    {
      q: 'Что такое белые списки?',
      a: 'Список разрешенных ресурсов, которым разрешено работать, в то время как всё остальное блокируется. Наши алгоритмы позволяют обходить эти ограничения, возвращая вам доступ к привычным сервисам.'
    },
    {
      q: 'Какие устройства поддерживаются?',
      a: 'Мы поддерживаем практически всё: iOS, Android, Windows, macOS и Android TV. Вы сможете использовать VPN на всех своих гаджетах в рамках одной подписки.'
    },
    {
      q: 'Сколько устройств можно подключить?',
      a: 'Вы можете использовать один аккаунт одновременно на 5 различных устройствах без потери скорости.'
    }
  ];

  return (
    <section className="px-6 py-12 pb-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-black text-primary">Частые вопросы</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full"></div>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-[1.5rem] border border-primary/5 overflow-hidden transition-all duration-300 open:shadow-lg open:scale-[1.01]">
              <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none select-none">
                <span className="font-bold text-primary text-lg md:text-xl pr-6">{faq.q}</span>
                <span className="material-symbols-outlined text-accent transition-transform duration-500 group-open:rotate-180 text-3xl">expand_more</span>
              </summary>
              <div className="px-6 md:px-8 pb-8 pt-0 text-primary/70 text-base md:text-lg leading-relaxed border-t border-transparent group-open:border-primary/5 group-open:pt-6">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
