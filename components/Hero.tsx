import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      {/* Network Background lines */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" className="fill-gray-700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center gap-12 mt-10">
        
        {/* Profile Image with elaborate rings */}
        <div className="relative group cursor-pointer mb-8">
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 -m-4 rounded-full border border-cyan-500/20 w-[calc(100%+32px)] h-[calc(100%+32px)] animate-spin-slow" style={{animationDuration: '10s'}}></div>
          <div className="absolute inset-0 -m-8 rounded-full border border-blue-500/10 w-[calc(100%+64px)] h-[calc(100%+64px)] animate-spin-slow" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
             <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-900 bg-dark-800">
                <img 
                  src="https://picsum.photos/id/1062/400/400" 
                  alt="Founder" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
             </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute bottom-2 right-2 bg-dark-900 rounded-full py-1.5 px-3 border border-white/10 flex items-center gap-2 shadow-lg z-20">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-bold text-white">Open to Work</span>
          </div>
        </div>

        {/* Hero Text */}
        <div className="max-w-5xl space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
            Create Brands That <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              Inspire
            </span>
            <span className="text-cyan-500 animate-pulse">.</span>
          </h1>
          
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            We design and develop <span className="text-gray-200 font-medium">high-performance websites</span> that drive growth, engagement, and success for your brand.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <button className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1">
              Get a Free Consultation
            </button>
            <button className="w-full md:w-auto px-10 py-5 rounded-xl font-bold text-lg text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;