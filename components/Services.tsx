import React from 'react';
import { Globe, PenTool, Layout, TrendingUp, ShieldCheck, DollarSign, Award, Target, Search } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    icon: Globe,
    title: 'Free Premium .com Domain',
    description: 'Your unique address on the internet, included free.',
    highlight: false
  },
  {
    icon: Layout,
    title: 'Complete Website Creation',
    description: 'From design to deployment, we handle everything.',
    highlight: true // Screenshot shows this is the gradient card
  },
  {
    icon: PenTool,
    title: 'Premium Animations & Graphics',
    description: 'Engaging visuals to captivate your audience.',
    highlight: false
  },
  {
    icon: TrendingUp,
    title: 'Full SEO Setup',
    description: 'On-Page, Off-Page, Internal & External SEO.',
    highlight: false
  },
  {
    icon: Award,
    title: 'Professional Logo & Branding',
    description: 'For a unique look and feel that stands out.',
    highlight: false
  },
  {
    icon: Search,
    title: 'Google Search Console Setup',
    description: 'To get your site indexed and found on Google.',
    highlight: false
  },
  {
    icon: ShieldCheck,
    title: 'Privacy Policy + SSL Certificate',
    description: 'For 100% Trust and Security for your visitors.',
    highlight: false
  },
  {
    icon: DollarSign,
    title: 'Ads Network Approval Help',
    description: 'The first step to start monetizing and earning.',
    highlight: false
  },
  {
    icon: Target,
    title: 'Earning Strategy & Guidance',
    description: 'Secrets to high income from ads and traffic.',
    highlight: false
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
      {/* Background decorations for depth */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            What You'll Get <span className="text-gray-400 font-normal">(All-in-One Package)</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`
                group relative p-8 rounded-3xl transition-all duration-500 overflow-hidden flex flex-col items-center text-center
                ${service.highlight 
                  ? 'bg-gradient-to-br from-emerald-400 via-purple-500 to-cyan-500 transform md:-translate-y-4 shadow-[0_20px_50px_rgba(56,189,248,0.2)]' 
                  : 'bg-[#111827] border border-gray-800 hover:border-gray-600 hover:shadow-2xl hover:shadow-cyan-900/10'
                }
              `}
            >
              {/* Card Icon */}
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl transition-transform duration-500 group-hover:scale-110
                ${service.highlight 
                  ? 'bg-black/20 text-white backdrop-blur-sm' 
                  : 'bg-dark-900 text-cyan-500 border border-gray-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400'
                }
              `}>
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              {/* Card Title */}
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${service.highlight ? 'text-white' : 'text-gray-100 group-hover:text-white'}`}>
                {service.title}
              </h3>
              
              {/* Card Description */}
              <p className={`text-[15px] leading-relaxed font-medium ${service.highlight ? 'text-white/90' : 'text-gray-400 group-hover:text-gray-300'}`}>
                {service.description}
              </p>
              
              {/* Hover Glow for normal cards */}
              {!service.highlight && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;