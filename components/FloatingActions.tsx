import React from 'react';
import { Bot, Mic } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-4 z-50">
      <button className="w-12 h-12 md:w-14 md:h-14 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform">
        <Bot size={24} />
      </button>
      <button className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform animate-bounce-subtle">
        <Mic size={24} />
      </button>
    </div>
  );
};

export default FloatingActions;