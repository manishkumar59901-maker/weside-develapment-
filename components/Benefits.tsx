import React from 'react';
import { Users, Handshake, PieChart } from 'lucide-react';

const Benefits: React.FC = () => {
  const items = [
    {
      icon: Users,
      title: 'Wider Customer Reach',
      description: 'Your website works 24/7, helping new customers find you easily.'
    },
    {
      icon: Handshake,
      title: 'Build Brand Trust',
      description: 'A good website makes your work look professional and helps win customer trust.'
    },
    {
      icon: PieChart,
      title: 'Unique Market Identity',
      description: 'We create a unique design for you that sets you apart from the competition.'
    }
  ];

  return (
    <section className="py-20 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-6 p-4 rounded-full bg-blue-500/10 text-cyan-400">
                <item.icon size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;