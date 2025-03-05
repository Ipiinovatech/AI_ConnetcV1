import React, { useState } from 'react';
import { ChevronRight, Code2, Database, Layers } from 'lucide-react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  
  const steps = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Connect Your Data',
      description: 'Seamlessly integrate your existing data sources with our secure connectors. AI Connect works with structured and unstructured data from any source.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: 'Configure AI Models',
      description: 'Choose from our library of pre-trained models or customize solutions for your specific needs with our intuitive no-code interface.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Deploy & Scale',
      description: 'Launch your AI solutions in minutes, not months. Scale automatically as your needs grow with our cloud-native infrastructure.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  
  const industries = [
    {
      name: 'Healthcare',
      description: 'Improve patient outcomes with predictive diagnostics and optimize resource allocation across healthcare facilities.',
      examples: ['Patient risk assessment', 'Treatment optimization', 'Resource scheduling'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Finance',
      description: 'Enhance fraud detection, automate compliance processes, and deliver personalized financial recommendations.',
      examples: ['Fraud prevention', 'Algorithmic trading', 'Credit risk analysis'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Retail',
      description: 'Optimize inventory management, personalize customer experiences, and forecast demand with precision.',
      examples: ['Demand forecasting', 'Customer segmentation', 'Price optimization'],
      color: 'from-blue-500 to-violet-500'
    },
    {
      name: 'Manufacturing',
      description: 'Implement predictive maintenance, optimize supply chains, and improve quality control processes.',
      examples: ['Predictive maintenance', 'Supply chain optimization', 'Quality control'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300 text-sm font-medium">
            Simple Implementation
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">AI Connect</span> Works
          </h2>
          
          <p className="text-gray-300">
            Our streamlined process makes implementing AI solutions simple and efficient, with minimal disruption to your existing workflows.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-[#1a1a3a]/50 to-[#0a0a1f]/50 rounded-2xl p-6 border border-purple-500/10 transition-all duration-500 ${
                  activeStep === index ? 'transform scale-105 shadow-xl' : 'shadow-lg'
                } cursor-pointer`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0a1f] border-2 border-purple-500 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${step.color} text-white mb-5 mt-4`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                
                <p className="text-gray-300">{step.description}</p>
                
                {/* Animated Arrow for Active Step */}
                {activeStep === index && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block animate-pulse">
                    <ChevronRight className="h-8 w-8 text-purple-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Industry Examples */}
        <div className="bg-gradient-to-br from-[#1a1a3a]/30 to-[#0a0a1f]/30 rounded-2xl p-8 border border-purple-500/10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Industry-Specific Applications</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {industries.map((industry, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeIndustry === index 
                    ? `bg-gradient-to-r ${industry.color} text-white` 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                {industry.name}
              </button>
            ))}
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              {industries[activeIndustry].name} Solutions
            </h4>
            
            <p className="text-gray-300 mb-6">
              {industries[activeIndustry].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industries[activeIndustry].examples.map((example, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industries[activeIndustry].color} mb-2`}></div>
                  <div className="text-sm text-white">{example}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Integration Flow Diagram */}
        <div className="mt-16 text-center">
          <button className="bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 border border-white/10">
            View Technical Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;