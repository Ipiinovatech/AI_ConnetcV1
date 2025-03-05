import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = () => {
    navigate('/productos');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="text-[#38bdf8]">AI</span> Connect
            </h1>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={handleDiscoverMore}
              className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Descubre más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;