import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-12 bg-dark-900 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <div 
                    className="bg-dark-800 border border-white/10 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="p-6 flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-200">
                            How long does it take to build the website?
                        </h3>
                        {isOpen ? <ChevronUp className="text-cyan-400" /> : <ChevronDown className="text-gray-400" />}
                    </div>
                    {isOpen && (
                        <div className="px-6 pb-6 text-gray-400 border-t border-white/5 pt-4 animate-in slide-in-from-top-2">
                            <p>
                                The timeline depends on the project's complexity. A standard business website typically takes 1-2 weeks, while more complex platforms might take 3-4 weeks. We provide a detailed timeline during the consultation.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FAQ;