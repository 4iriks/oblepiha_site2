
import React from 'react';

const Testimonial: React.FC = () => {
  const reviews = [
    {
      text: "Первый VPN с которым удобно и быстро. Все стабильно работает, никаких проблем.",
      author: "Александр",
      initial: "А"
    },
    {
      text: "Соотношение цена-качество, удобный интерфейс, не подводит и не тупит.",
      author: "Дмитрий",
      initial: "Д"
    }
  ];

  return (
    <section className="px-0 md:px-6 py-12 w-full overflow-hidden">
      <div className="flex md:grid md:grid-cols-2 gap-4 px-6 md:px-0 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 md:pb-0">
        {reviews.map((rev, idx) => (
          <div 
            key={idx} 
            className="min-w-[85vw] md:min-w-0 snap-center relative bg-primary text-[#f7e9c6] p-8 rounded-[2.5rem] overflow-hidden shadow-lg h-full flex flex-col justify-between transition-transform hover:scale-[1.01]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] rounded-full"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <span className="material-symbols-outlined text-4xl text-accent">format_quote</span>
              <p className="text-xl font-medium leading-relaxed font-display italic">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 mt-2 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#f7e9c6]/20 flex items-center justify-center font-bold text-accent text-xl">
                  {rev.initial}
                </div>
                <div>
                  <p className="font-bold text-lg">{rev.author}</p>
                  <p className="text-xs opacity-60 uppercase tracking-[0.2em]">Пользователь</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
