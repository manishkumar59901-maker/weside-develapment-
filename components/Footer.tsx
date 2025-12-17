import React from 'react';
import { Youtube, Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-wider">WEBSITE DEVELOPMENT</h3>
            <div className="h-0.5 w-12 bg-cyan-500"></div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              We craft digital experiences...
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-cyan-400">Quick Links</h3>
            <div className="h-0.5 w-12 bg-cyan-500"></div>
            <ul className="space-y-3">
              {['Home', 'About', 'Privacy Policy', 'Terms & Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-cyan-400">Contact Us</h3>
            <div className="h-0.5 w-12 bg-cyan-500"></div>
            <p className="text-gray-400">Email: business.newviral@gmail.com</p>
            
            <div className="flex gap-4 pt-4">
              {[Youtube, Facebook, Twitter, Instagram, Send].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Website Development. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;