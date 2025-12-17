import React, { useState } from 'react';
import { User, MapPin, Star } from 'lucide-react';

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    
    return (
        <section className="py-24 bg-dark-900 border-t border-white/5">
             <div className="container mx-auto px-4 max-w-5xl">
                 <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Client Feedback</h2>
                     <p className="text-gray-400">Help us improve by sharing your experience.</p>
                 </div>

                 <div className="relative">
                     {/* Background Glows */}
                     <div className="absolute top-0 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[80px]"></div>
                     <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-[80px]"></div>

                     <div className="relative bg-dark-800/60 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-[2rem] shadow-2xl">
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-3">
                                 <label className="text-sm uppercase tracking-wider text-gray-400 font-semibold pl-1">Your Name</label>
                                 <div className="relative group">
                                     <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                                     <input 
                                        type="text" 
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-14 pr-4 text-white placeholder-gray-600 focus:bg-black/60 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all" 
                                        placeholder="John Doe"
                                    />
                                 </div>
                            </div>
                            <div className="space-y-3">
                                 <label className="text-sm uppercase tracking-wider text-gray-400 font-semibold pl-1">Location</label>
                                 <div className="relative group">
                                     <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                                     <input 
                                        type="text" 
                                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-14 pr-4 text-white placeholder-gray-600 focus:bg-black/60 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all" 
                                        placeholder="New York, USA"
                                    />
                                 </div>
                            </div>
                         </div>

                         <div className="space-y-3 mb-8">
                             <label className="text-sm uppercase tracking-wider text-gray-400 font-semibold pl-1">Overall Rating</label>
                             <div className="flex gap-4 p-4 bg-black/20 rounded-xl border border-white/5 w-fit">
                                 {[1, 2, 3, 4, 5].map((star) => (
                                     <button 
                                        key={star}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(star)}
                                        className="transition-transform hover:scale-110 focus:outline-none"
                                     >
                                         <Star 
                                            size={36} 
                                            className={`transition-colors duration-200 ${(hoverRating || rating) >= star ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                                            strokeWidth={1.5}
                                         />
                                     </button>
                                 ))}
                             </div>
                         </div>

                         <div className="space-y-3 mb-10">
                             <label className="text-sm uppercase tracking-wider text-gray-400 font-semibold pl-1">Your Review</label>
                             <textarea 
                                rows={5}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-gray-600 focus:bg-black/60 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all resize-none"
                                placeholder="Tell us about your experience..."
                             ></textarea>
                         </div>

                         <div className="flex justify-end">
                             <button className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
                                 Submit Review
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};

export default ReviewForm;