
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white flex flex-col items-center bg-background-light overflow-x-hidden relative">
      {/* Анимированные фоновые элементы */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <Features />
        <div className="max-w-6xl mx-auto">
          <Testimonial />
        </div>
        <div className="h-px bg-primary/10 mx-6 my-12" />
        <Pricing />
        <div className="max-w-5xl mx-auto">
          <FAQ />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
