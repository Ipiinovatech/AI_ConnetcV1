import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import DemoRequestModal from '../components/DemoRequestModal';
import { useLanguage } from '../context/LanguageContext';

const ProductsPage = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded === false) {
      setShowMedia(false);
    }
  };

  const handleMediaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMedia(true);
  };

  const handleFAQsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToFAQs: true } });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#13477a] text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/Public/images/AI CONNECT BLANCO.png"
                  alt="AI Connect"
                  className="h-16 md:h-20 object-contain transition-all duration-300"
                  style={{ filter: 'brightness(1.05)' }}
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <span className="text-sm font-medium text-gray-200">
                AI Connect
              </span>
              <Link to="/proyectos" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                {language === 'es' ? 'Productos' : 'Products'}
              </Link>
              <a 
                href="#faqs"
                onClick={handleFAQsClick}
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors cursor-pointer"
              >
                FAQs
              </a>
            </div>
            
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              <span>{language === 'es' ? 'Volver al inicio' : 'Back to home'}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#13477a] mb-8 text-center">
            {language === 'es' ? 'Productos AI Connect' : 'AI Connect Products'}
          </h1>

          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#13477a] mb-4">
                {language === 'es' ? 'Nuestras Soluciones' : 'Our Solutions'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'es' 
                  ? 'Descubra nuestra gama completa de soluciones tecnológicas diseñadas para transformar su negocio.'
                  : 'Discover our complete range of technological solutions designed to transform your business.'}
              </p>
              
              <button
                onClick={toggleExpand}
                className="bg-[#13477a] text-white px-6 py-2 rounded-lg hover:bg-[#0f3861] transition-colors"
              >
                {language === 'es' ? 'Ver más' : 'See more'}
              </button>
            </section>

            {isExpanded && (
              <section className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#13477a] mb-4">
                  {language === 'es' ? 'Recursos Multimedia' : 'Multimedia Resources'}
                </h3>
                <button
                  onClick={handleMediaClick}
                  className="bg-[#13477a] text-white px-6 py-2 rounded-lg hover:bg-[#0f3861] transition-colors"
                >
                  {language === 'es' ? 'Ver contenido multimedia' : 'View multimedia content'}
                </button>
              </section>
            )}
          </div>
        </div>
      </main>

      <DemoRequestModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
      />

      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default ProductsPage;