import React, { useState } from 'react';
import { Zap, BarChart3, Globe, Rocket } from 'lucide-react';

const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Enhanced Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to reduce operational costs by up to 40% while increasing productivity across departments.',
      metric: { value: 40, label: 'Efficiency Increase', suffix: '%' },
      color: 'from-purple-500 to-indigo-500',
      shadowColor: 'shadow-purple-500/20'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Data-Driven Insights',
      description: 'Transform raw data into actionable intelligence with advanced analytics that reveal hidden patterns and opportunities for growth.',
      metric: { value: 85, label: 'Prediction Accuracy', suffix: '%' },
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Scalable Solutions',
      description: 'Easily adapt AI capabilities as your business grows with our flexible platform that scales from startups to enterprise-level operations.',
      metric: { value: 3.5, label: 'Implementation Speed', suffix: 'x' },
      color: 'from-cyan-500 to-teal-500',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the curve with cutting-edge AI technologies that give your business the edge in rapidly evolving markets.',
      metric: { value: 67, label: 'Market Advantage', suffix: '%' },
      color: 'from-indigo-500 to-purple-500',
      shadowColor: 'shadow-indigo-500/20'
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 relative overflow-hidden bg-[#0c0c24]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a1f] via-transparent to-[#0a0a1f]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300 text-sm font-medium">
            Why Choose AI Connect
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Transformative <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Benefits</span> for Your Business
          </h2>
          
          <p className="text-gray-300">
            Our AI-powered platform delivers measurable results across your organization, from operational efficiency to strategic decision-making.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-[#1a1a3a]/50 to-[#0a0a1f]/50 rounded-2xl p-6 border border-purple-500/10 transition-all duration-500 ${
                hoveredCard === index ? 'transform scale-105 shadow-xl' : 'shadow-lg'
              } ${benefit.shadowColor} overflow-hidden group`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-5`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              
              <p className="text-gray-300 mb-6">{benefit.description}</p>
              
              {/* Metric */}
              <div className="mt-auto">
                <div className="h-1 w-full bg-gray-700/50 rounded-full mb-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${benefit.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: hoveredCard === index ? `${benefit.metric.value}%` : '0%',
                      transitionDelay: '200ms'
                    }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{benefit.metric.label}</span>
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {benefit.metric.value}{benefit.metric.suffix}
                  </span>
                </div>
              </div>
              
              {/* Hover Effect Elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-transparent to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;