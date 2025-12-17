import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import StatsSection from './components/StatsSection';
import ContactForm from './components/ContactForm';
import ReviewForm from './components/ReviewForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white relative overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <StatsSection />
          <ReviewForm />
          <ContactForm />
          <FAQ />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
};

export default App;