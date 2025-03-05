import React, { useEffect, useRef } from 'react';
import { Brain, Database, LineChart, Shield } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        sectionRef.current.classList.add('animate-fade-in');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden opacity-0 transition-opacity duration-1000">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300 text-sm font-medium">
              About AI Connect
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Revolutionizing Business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">AI-as-a-Service</span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              AI Connect is a comprehensive platform that democratizes access to cutting-edge artificial intelligence technologies. We provide businesses of all sizes with the tools, infrastructure, and expertise needed to harness the transformative power of AI without the complexity and high costs typically associated with AI implementation.
            </p>
            
            <p className="text-gray-300 mb-8">
              Our AI-as-a-Service (AIaaS) model enables organizations to rapidly deploy AI solutions tailored to their specific needs, accelerating innovation and driving measurable business outcomes across industries.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 bg-purple-900/30 p-2 rounded-lg">
                  <Brain className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Intelligent Automation</h3>
                  <p className="text-sm text-gray-400">Streamline operations with smart workflows</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 bg-blue-900/30 p-2 rounded-lg">
                  <LineChart className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Predictive Analytics</h3>
                  <p className="text-sm text-gray-400">Forecast trends with precision</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 bg-indigo-900/30 p-2 rounded-lg">
                  <Database className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Data Processing</h3>
                  <p className="text-sm text-gray-400">Extract insights from any data source</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 bg-violet-900/30 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Enterprise Security</h3>
                  <p className="text-sm text-gray-400">Protected with advanced encryption</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Animated Infographic */}
          <div className="md:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-[#1a1a3a] to-[#0a0a1f] p-6 rounded-2xl border border-purple-500/20 shadow-xl">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold">AI Connect Platform</h3>
                  <div className="px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-xs font-medium">Active</div>
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: 'Machine Learning', progress: 92, color: 'from-purple-500 to-blue-500' },
                    { name: 'Natural Language Processing', progress: 87, color: 'from-blue-500 to-indigo-500' },
                    { name: 'Computer Vision', progress: 78, color: 'from-indigo-500 to-violet-500' },
                    { name: 'Predictive Analytics', progress: 95, color: 'from-violet-500 to-purple-500' }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">{item.name}</span>
                        <span className="text-sm text-gray-400">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`} 
                          style={{ width: `${item.progress}%`, animationDelay: `${index * 200}ms` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-purple-400 mb-1">98%</div>
                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-3xl font-bold text-blue-400 mb-1">3.2x</div>
                    <div className="text-sm text-gray-400">ROI Improvement</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-600/20 rounded-lg rotate-12 animate-float"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-blue-600/20 rounded-full animate-float-delay"></div>
            <div className="absolute -bottom-4 right-12 w-10 h-10 bg-indigo-600/20 rounded-lg -rotate-12 animate-float-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;