import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const assistantButton = document.querySelector('[aria-label="Abrir asistente virtual"]');
    if (assistantButton) {
      assistantButton.click();
    }
  };

  const handleAIConnectClick = (e) => {
    e.preventDefault();
    navigate('/productos');
  };

  const handleFAQsClick = (e) => {
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
          isScrolled ? 'bg-[#13477a]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-[#13477a] py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-white">AI</span> Connect
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/productos"
              className="text-sm font-medium text-gray-200 hover:text-white transition-all"
            >
              AI Connect
            </Link>
            <Link 
              to="/proyectos"
              className="text-sm font-medium text-gray-200 hover:text-white transition-all"
            >
              Productos
            </Link>
            <a 
              href="#faqs"
              onClick={handleFAQsClick}
              className="text-sm font-medium text-gray-200 hover:text-white transition-all cursor-pointer"
            >
              FAQs
            </a>
            <a 
              href="#contacto"
              onClick={handleContactClick}
              className="text-sm font-medium text-gray-200 hover:text-white transition-all cursor-pointer"
            >
              Contacto
            </a>
            
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <button 
                onClick={handleLoginClick}
                className="bg-white hover:bg-gray-100 text-[#13477a] font-medium py-2 px-4 rounded-full transition-all duration-300"
              >
                Entrar
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
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
          <div className="md:hidden bg-[#13477a]/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="/productos"
                className="text-sm font-medium text-gray-200 hover:text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Connect
              </Link>
              <Link 
                to="/proyectos"
                className="text-sm font-medium text-gray-200 hover:text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Productos
              </Link>
              <a 
                href="#faqs"
                onClick={(e) => {
                  handleFAQsClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-gray-200 hover:text-white py-2 border-b border-gray-800 cursor-pointer"
              >
                FAQs
              </a>
              <a 
                href="#contacto"
                onClick={(e) => {
                  handleContactClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-gray-200 hover:text-white py-2 border-b border-gray-800 cursor-pointer"
              >
                Contacto
              </a>
              
              {!isAuthenticated && (
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLoginClick();
                  }}
                  className="bg-white text-[#13477a] font-medium py-2 px-4 rounded-full shadow-lg mt-2"
                >
                  Entrar
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