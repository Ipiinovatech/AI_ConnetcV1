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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/Public/images/AI CONNECT FINAL.png"
              alt="AI Connect"
              className="h-32 md:h-48 mx-auto object-contain"
              style={{ filter: 'brightness(1.05)' }}
            />
          </div>
          
          <div className="mt-8">
            <button 
              onClick={handleDiscoverMore}
              className="bg-[#38bdf8] hover:bg-[#60ccff] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
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