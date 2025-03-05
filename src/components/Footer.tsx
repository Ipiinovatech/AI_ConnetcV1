import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#001a33] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                <span className="text-[#001a33] font-bold text-xl">AI</span>
              </div>
              <span className="text-xl font-bold">Connect</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {/* Facebook - Color azul característico */}
            <a href="https://www.facebook.com/share/1BP7bZVZLr/" target="_blank" rel="noopener noreferrer" className="rounded-full w-10 h-10 flex items-center justify-center bg-white">
              <Facebook size={20} className="text-[#1877F2]" />
            </a>
            
            {/* Instagram - Gradiente característico */}
            <a href="https://www.instagram.com/ipinnovatech_aiconnect/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="rounded-full w-10 h-10 flex items-center justify-center bg-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] opacity-0"></div>
              <Instagram size={20} className="relative z-10" style={{ color: '#E1306C' }} />
            </a>
            
            {/* LinkedIn - Color azul corporativo */}
            <a href="https://co.linkedin.com/in/yoseph-orozco-66bab327" target="_blank" rel="noopener noreferrer" className="rounded-full w-10 h-10 flex items-center justify-center bg-white">
              <Linkedin size={20} className="text-[#0A66C2]" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              Mail: <a href="mailto:Info@ipinnovatech.co" className="text-white">Info@ipinnovatech.co</a>
            </p>
            <p className="text-sm text-gray-400">
              <a href="http://www.ipinnovatech.co/" className="text-white">http://www.ipinnovatech.co/</a>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
            <p className="text-sm text-gray-400 mb-2 md:mb-0">© 2025 IPINNOVATECH. Todos los derechos reservados.</p>
            <Link to="/terminos-y-condiciones" className="text-sm text-white hover:text-gray-300 mb-2 md:mb-0">Términos y Condiciones</Link>
            <Link to="/politica-de-privacidad" className="text-sm text-white hover:text-gray-300">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;