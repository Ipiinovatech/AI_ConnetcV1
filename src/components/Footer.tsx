import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#13477a] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img 
                src="./Public/images/AI CONNECT FINAL.png"
                alt="AI Connect"
                className="h-16 md:h-20 object-contain transition-all duration-300"
                style={{ filter: 'brightness(1.05)' }}
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/share/1BP7bZVZLr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-[#1877F2]" />
            </a>
            
            <a 
              href="https://www.instagram.com/ipinnovatech_aiconnect/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors overflow-hidden relative"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] opacity-0"></div>
              <Instagram size={20} className="relative z-10" style={{ color: '#E1306C' }} />
            </a>
            
            <a 
              href="https://co.linkedin.com/in/yoseph-orozco-66bab327" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-[#0A66C2]" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white/90">
              {language === 'es' ? 'Correo:' : 'Email:'}{' '}
              <a 
                href="mailto:Info@ipinnovatech.co" 
                className="text-white hover:text-blue-100 transition-colors"
              >
                Info@ipinnovatech.co
              </a>
            </p>
            <p className="text-sm text-white/90">
              {language === 'es' ? 'Sitio web:' : 'Website:'}{' '}
              <a 
                href="http://www.ipinnovatech.co/" 
                className="text-white hover:text-blue-100 transition-colors"
              >
                http://www.ipinnovatech.co/
              </a>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            <p className="text-sm text-white/90 mb-2 md:mb-0">
              © 2025 IPINNOVATECH. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <Link 
              to="/terminos-y-condiciones" 
              className="text-sm text-white hover:text-blue-100 transition-colors mb-2 md:mb-0"
            >
              {language === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
            </Link>
            <Link 
              to="/politica-de-privacidad" 
              className="text-sm text-white hover:text-blue-100 transition-colors"
            >
              {language === 'es' ? 'Política de privacidad' : 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;