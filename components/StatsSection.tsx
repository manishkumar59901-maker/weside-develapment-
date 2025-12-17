import React from 'react';
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, CartesianGrid
} from 'recharts';

const StatsSection: React.FC = () => {
  // Pie Data - Client Satisfaction
  const pieData = [
    { name: 'Satisfied', value: 92 },
    { name: 'Neutral', value: 8 }
  ];
  const pieColors = ['#06b6d4', '#1e293b']; // Cyan vs Dark Slate

  // Line Data - Annual Growth
  const lineData = [
    { year: '2021', growth: 20 },
    { year: '2022', growth: 45 },
    { year: '2023', growth: 75 },
    { year: '2024', growth: 120 },
  ];

  // Bar Data - Projects Per Quarter
  const barData = [
    { quarter: 'Q1', projects: 12 },
    { quarter: 'Q2', projects: 18 },
    { quarter: 'Q3', projects: 25 },
    { quarter: 'Q4', projects: 32 },
  ];

  // Radar Data - Tech Proficiency
  const radarData = [
    { subject: 'AI/ML', A: 85, fullMark: 100 },
    { subject: 'HTML/CSS', A: 98, fullMark: 100 },
    { subject: 'JS', A: 90, fullMark: 100 },
    { subject: 'React', A: 95, fullMark: 100 },
    { subject: 'Node.js', A: 80, fullMark: 100 },
    { subject: 'Firebase', A: 85, fullMark: 100 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-800 border border-white/10 p-4 rounded-lg shadow-xl">
          <p className="text-gray-200 font-bold mb-1">{label}</p>
          <p className="text-cyan-400 text-sm">
            {`${payload[0].name || 'Value'}: ${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-24 bg-dark-900 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Project Statistics</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Visualizing our success and growth through key metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Client Satisfaction */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 h-[450px] flex flex-col relative group hover:border-cyan-500/30 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Client Satisfaction</h3>
            <p className="text-gray-500 text-sm mb-8">Based on 500+ reviews</p>
            <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={85}
                    outerRadius={110}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                    >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-6xl font-bold text-white tracking-tighter">92<span className="text-cyan-500 text-4xl">%</span></span>
                    <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">Success Rate</p>
                </div>
            </div>
          </div>

          {/* Card 2: Annual Growth */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 h-[450px] group hover:border-cyan-500/30 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Annual Growth</h3>
             <p className="text-gray-500 text-sm mb-8">Year over Year projection</p>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                <XAxis dataKey="year" stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} dy={10} />
                <Tooltip content={<CustomTooltip />} cursor={{stroke: '#334155', strokeWidth: 2}} />
                <Line 
                    type="monotone" 
                    dataKey="growth" 
                    stroke="#22d3ee" 
                    strokeWidth={4} 
                    dot={{fill: '#0B0F19', stroke: '#22d3ee', strokeWidth: 3, r: 6}} 
                    activeDot={{r: 8, fill: '#fff'}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Card 3: Projects Per Quarter */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 h-[450px] group hover:border-cyan-500/30 transition-all">
             <h3 className="text-2xl font-bold text-white mb-2">Projects Delivered</h3>
             <p className="text-gray-500 text-sm mb-8">Quarterly performance</p>
             <ResponsiveContainer width="100%" height="80%">
               <BarChart data={barData}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                 <XAxis dataKey="quarter" stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} dy={10} />
                 <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.03)'}} />
                 <Bar dataKey="projects" fill="#0ea5e9" radius={[6, 6, 0, 0]} barSize={60}>
                    {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`rgba(14, 165, 233, ${0.5 + (index * 0.15)})`} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
          </div>

          {/* Card 4: Tech Proficiency */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 h-[450px] group hover:border-cyan-500/30 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Tech Stack</h3>
            <p className="text-gray-500 text-sm mb-4">Core competencies</p>
            <ResponsiveContainer width="100%" height="85%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="#334155" strokeOpacity={0.5} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 13, fontWeight: 500 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  fill="#0ea5e9"
                  fillOpacity={0.3}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;