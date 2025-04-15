import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleDiscoverMore = () => {
    navigate('/productos');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#38bdf8]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/Public/images/AI CONNECT FINAL.png')`,
          backgroundSize: '120px',
          backgroundRepeat: 'repeat',
          opacity: 0.1,
          transform: 'rotate(-5deg) scale(1.1)',
          filter: 'brightness(1.2) contrast(0.8)'
        }}></div>
      </div>

      {/* Video Container with max width and centered */}
      <div className="absolute w-full max-w-5xl mx-auto px-4 h-[60vh]">
        <video 
          className="absolute inset-0 w-full h-full object-contain rounded-lg"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/Public/images/AI CONNECT FINAL.png"
          controls={false}
        >
          <source src="/Public/videos/AI CONNECT Y HOME/HOME DE AICONNECT .mp4" type="video/mp4" />
          {language === 'es' ? 'Tu navegador no soporta el elemento de video.' : 'Your browser does not support the video element.'}
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/Public/images/AI CONNECT FINAL.png"
              alt="AI Connect"
              className="h-20 md:h-32 mx-auto object-contain" // Reduced size for mobile
              style={{ filter: 'brightness(1.05)' }}
            />
          </div>
          
          <div className="mt-6"> {/* Reduced margin-top */}
            <button 
              onClick={handleDiscoverMore}
              className="bg-white hover:bg-opacity-90 text-[#0ea5e9] font-medium py-2 px-6 rounded-full text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg" // Smaller padding and text on mobile
            >
              {language === 'es' ? 'Descubre más' : 'Discover more'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;