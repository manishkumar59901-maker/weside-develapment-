import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun, MonitorPlay } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
    { name: 'Explore', href: '#explore', hasDropdown: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative w-11 h-11 rounded-full bg-dark-900 p-0.5 ring-1 ring-white/10">
               <img src="https://picsum.photos/seed/websitedev/100/100" alt="Logo" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">Website Development</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-[15px] font-medium flex items-center gap-1 group"
            >
              {link.name}
              {link.hasDropdown && (
                <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
            Client Portal
          </button>
          
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1.5 border border-white/10">
            <button className="px-2.5 py-1 text-xs font-bold bg-dark-700 text-white rounded shadow-sm">EN</button>
            <button className="px-2.5 py-1 text-xs font-medium text-gray-400 hover:text-white transition-colors">HI</button>
          </div>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-500/20 hover:border-red-500">
             <MonitorPlay size={18} />
          </button>
           
          <button className="text-gray-400 hover:text-white transition-colors p-2">
            <Moon size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-300 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-white/10 w-full my-2"></div>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20">
            Client Portal
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;