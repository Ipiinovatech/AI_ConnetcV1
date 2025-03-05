import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Building2, ChevronRight, Clock } from 'lucide-react';

const SuccessStoriesSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const testimonials = [
    {
      quote: "AI Connect transformed our customer service operations. We've reduced response times by 68% while improving customer satisfaction scores to an all-time high.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      company: "TechVision Inc.",
      industry: "Technology"
    },
    {
      quote: "The predictive analytics capabilities have revolutionized our inventory management. We've decreased stockouts by 42% and reduced carrying costs by over $2M annually.",
      author: "Michael Chen",
      position: "Supply Chain Director, Global Retail",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      company: "Global Retail",
      industry: "Retail"
    },
    {
      quote: "Implementing AI Connect's fraud detection system has saved us millions in potential losses and reduced false positives by 83%, dramatically improving our customer experience.",
      author: "Elena Rodriguez",
      position: "Head of Security, FinanceFirst",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      company: "FinanceFirst",
      industry: "Financial Services"
    }
  ];
  
  const caseStudies = [
    {
      title: "Healthcare Provider Reduces Readmissions by 35%",
      description: "Learn how a leading healthcare network leveraged AI Connect to predict patient readmission risks and implement preventative care measures.",
      industry: "Healthcare",
      results: ["35% reduction in readmissions", "42% improvement in resource allocation", "$4.2M annual savings"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Manufacturing Firm Achieves 99.8% Quality Control",
      description: "Discover how AI-powered visual inspection transformed quality control processes for a global manufacturing leader.",
      industry: "Manufacturing",
      results: ["99.8% defect detection rate", "73% reduction in manual inspections", "28% increase in production throughput"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Financial Institution Prevents $12M in Fraud",
      description: "See how advanced AI algorithms helped identify sophisticated fraud patterns in real-time across millions of transactions.",
      industry: "Finance",
      results: ["$12M in prevented fraud", "91% reduction in false positives", "3.5x faster investigation resolution"],
      color: "from-indigo-500 to-purple-500"
    }
  ];
  
  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "3.2x", label: "Average ROI" },
    { value: "67%", label: "Efficiency Increase" },
    { value: "42%", label: "Cost Reduction" }
  ];
  
  const logos = [
    "TechCorp", "GlobalHealth", "FinanceFirst", "RetailGiant", 
    "ManufacturePro", "DataSystems", "SmartLogistics", "CloudServices"
  ];
  
  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials.length]);

  return (
    <section id="success-stories" className="py-20 md:py-32 relative overflow-hidden bg-[#0c0c24]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a1f] via-transparent to-[#0a0a1f]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300 text-sm font-medium">
            Success Stories
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Real Results from <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Real Clients</span>
          </h2>
          
          <p className="text-gray-300">
            See how organizations across industries are achieving transformative outcomes with AI Connect.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="mb-20 relative">
          <div className="bg-gradient-to-br from-[#1a1a3a]/50 to-[#0a0a1f]/50 rounded-2xl p-8 md:p-10 border border-purple-500/10 shadow-lg relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Author Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-purple-500/30">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="text-purple-400 mb-4">
                    <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-white mb-6 italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonials[activeTestimonial].author}</h4>
                      <p className="text-gray-400">{testimonials[activeTestimonial].position}</p>
                    </div>
                    
                    <div className="flex items-center mt-4 md:mt-0">
                      <Building2 className="h-5 w-5 text-purple-400 mr-2" />
                      <span className="text-gray-300">{testimonials[activeTestimonial].company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? 'bg-purple-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => {
                  setActiveTestimonial(index);
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  intervalRef.current = window.setInterval(() => {
                    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                  }, 8000);
                }}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Case Studies */}
        <h3 className="text-2xl font-semibold mb-8 text-center text-white">Featured Case Studies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a3a]/50 to-[#0a0a1f]/50 rounded-2xl overflow-hidden border border-purple-500/10 shadow-lg group">
              <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-white/10 rounded-lg p-2 mr-3">
                    <Clock className="h-5 w-5 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-400">{study.industry}</span>
                </div>
                
                <h4 className="text-xl font-semibold mb-3 text-white">{study.title}</h4>
                
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-gray-400 mb-3">Key Results:</h5>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.color}`}></div>
                        </div>
                        <span className="text-sm text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center text-white">Trusted by Industry Leaders</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-center justify-center h-20 hover:bg-white/10 transition-colors"
              >
                <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;