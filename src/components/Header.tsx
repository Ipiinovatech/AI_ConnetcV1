import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import { useAuth } from '../context/AuthContext';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const assistantButton = document.querySelector(`[aria-label="${language === 'es' ? 'Abrir asistente virtual' : 'Open virtual assistant'}"]`);
    if (assistantButton instanceof HTMLElement) {
      assistantButton.click();
    }
  };

  const handleAIConnectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/productos');
  };

  const handleFAQsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (window.location.pathname === '/') {
      const faqsSection = document.getElementById('faqs');
      if (faqsSection) {
        faqsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#faqs');
    }
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-r from-[#0ea5e9]/90 via-[#0369a1]/90 to-[#0c4a6e]/90 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-gradient-to-r from-[#0ea5e9] via-[#0369a1] to-[#0c4a6e] py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/AI CONNECT FINAL.png"
                alt="AI Connect"
                className="h-16 md:h-20 object-contain transition-all duration-300"
                style={{ filter: 'brightness(1.05)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/productos"
              className="text-sm font-medium text-white hover:text-white/90 transition-all"
            >
              AI Connect
            </Link>
            <Link 
              to="/proyectos"
              className="text-sm font-medium text-white hover:text-white/90 transition-all"
            >
              {language === 'es' ? 'Productos' : 'Products'}
            </Link>
            <a 
              href="#faqs"
              onClick={handleFAQsClick}
              className="text-sm font-medium text-white hover:text-white/90 transition-all cursor-pointer"
            >
              FAQs
            </a>
            <a 
              href="#contacto"
              onClick={handleContactClick}
              className="text-sm font-medium text-white hover:text-white/90 transition-all cursor-pointer"
            >
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
            
            <LanguageToggle />
            
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <button 
                onClick={handleLoginClick}
                className="bg-white hover:bg-opacity-95 text-[#0ea5e9] font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {language === 'es' ? 'Entrar' : 'Login'}
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            {isAuthenticated && <UserMenu />}
            
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-[#0ea5e9]/95 via-[#0369a1]/95 to-[#0c4a6e]/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="/productos"
                className="text-sm font-medium text-white hover:text-white/90 py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Connect
              </Link>
              <Link 
                to="/proyectos"
                className="text-sm font-medium text-white hover:text-white/90 py-2 border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {language === 'es' ? 'Productos' : 'Products'}
              </Link>
              <a 
                href="#faqs"
                onClick={(e) => {
                  handleFAQsClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-white hover:text-white/90 py-2 border-b border-white/10 cursor-pointer"
              >
                FAQs
              </a>
              <a 
                href="#contacto"
                onClick={(e) => {
                  handleContactClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-white hover:text-white/90 py-2 border-b border-white/10 cursor-pointer"
              >
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
              
              {!isAuthenticated && (
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLoginClick();
                  }}
                  className="bg-white hover:bg-opacity-95 text-[#0ea5e9] font-medium py-2 px-6 rounded-full shadow-lg mt-2 transition-all duration-300 transform hover:scale-105"
                >
                  {language === 'es' ? 'Entrar' : 'Login'}
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;