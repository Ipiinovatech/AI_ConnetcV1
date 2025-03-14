import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const ProductsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAssistantClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const assistantButton = document.querySelector(`[aria-label="${language === 'es' ? 'Abrir asistente virtual' : 'Open virtual assistant'}"]`);
    if (assistantButton instanceof HTMLElement) {
      assistantButton.click();
    }
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
                  src="/Public/Images/AI CONNECT FINAL.png"
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
              <LanguageToggle />
            </div>
            
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              <span>{language === 'es' ? 'Volver al inicio' : 'Back to home'}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <img 
              src="/Public/Images/AI CONNECT FINAL.png"
              alt="AI Connect"
              className="h-32 md:h-48 mx-auto mb-8 object-contain"
            />
            <div className="max-w-3xl mx-auto">
              {/* Initial Description */}
              <div className="text-justify mb-6">
                <span className="text-[#13477a] font-bold">AIConnect:</span>{' '}
                <span className="text-black font-semibold">
                  {language === 'es' 
                    ? 'Plataforma de IA multiservicios para optimizar negocios, aumentar eficiencia y potenciar la competitividad.'
                    : 'Multi-service AI platform to optimize business, increase efficiency and enhance competitiveness.'}{' '}
                </span>
                <button 
                  onClick={toggleExpand} 
                  className="text-[#0066cc] hover:text-[#004999] font-semibold transition-colors inline-flex items-center"
                >
                  {language === 'es' ? 'Dar clic para saber más...' : 'Click to learn more...'}
                </button>
              </div>
              
              {isExpanded && (
                <div className="space-y-6">
                  {/* First Expanded Section */}
                  <p className="text-justify text-black font-semibold">
                    {language === 'es'
                      ? 'Este es un espacio ideal para presentar detalladamente nuestra plataforma, su impacto en los negocios y cómo nos destacamos entre la competencia.'
                      : 'This is an ideal space to present our platform in detail, its impact on business, and how we stand out from the competition.'}
                  </p>
                  
                  {/* Second Expanded Section */}
                  <div className="text-justify">
                    <span className="text-black font-semibold">
                      {language === 'es'
                        ? 'AIConnect es la plataforma líder en inteligencia artificial que ofrece una amplia gama de servicios para potenciar tu producto. Para descubrir cómo podemos llevar tu producto al siguiente nivel '
                        : 'AIConnect is the leading artificial intelligence platform offering a wide range of services to enhance your product. To discover how we can take your product to the next level '}
                    </span>
                    <button 
                      onClick={handleAssistantClick}
                      className="text-[#0066cc] hover:text-[#004999] font-semibold transition-colors"
                    >
                      {language === 'es' ? 'Haz clic aquí' : 'Click here'}
                    </button>
                  </div>

                  {/* Show Less Button - Above video */}
                  <div className="text-center">
                    <button 
                      onClick={toggleExpand}
                      className="text-[#0066cc] hover:text-[#004999] font-semibold transition-colors"
                    >
                      {language === 'es' ? 'Dar clic para mostrar menos.' : 'Click to show less.'}
                    </button>
                  </div>

                  {/* Video Section */}
                  <div className="aspect-video bg-[#13477a]/10 rounded-lg overflow-hidden shadow-lg">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="/Public/Images/AI CONNECT FINAL.png"
                    >
                      <source src="/Public/Videos/AI CONNECT Y HOME/IA connect_1080p.mp4" type="video/mp4" />
                      {language === 'es' 
                        ? 'Tu navegador no soporta el elemento de video.'
                        : 'Your browser does not support the video element.'}
                    </video>
                  </div>

                  {/* Boxes Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Competitive Advantages Box */}
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-[#13477a] mb-4">
                        {language === 'es' ? 'Ventajas competitivas' : 'Competitive advantages'}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es'
                              ? 'Tecnología de vanguardia con algoritmos propietarios'
                              : 'Cutting-edge technology with proprietary algorithms'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es'
                              ? 'Soluciones personalizadas para cada sector empresarial'
                              : 'Customized solutions for each business sector'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es'
                              ? 'Implementación rápida y soporte técnico continuo'
                              : 'Quick implementation and continuous technical support'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es'
                              ? 'Escalabilidad garantizada para crecer con tu negocio'
                              : 'Guaranteed scalability to grow with your business'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Sectors Box */}
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-semibold text-[#13477a] mb-4">
                        {language === 'es' ? 'Sectores que atendemos' : 'Sectors we serve'}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es' ? 'Finanzas y banca' : 'Finance and banking'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es' ? 'Salud y ciencias de la vida' : 'Healthcare and life sciences'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es' ? 'Manufactura y logística' : 'Manufacturing and logistics'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es' ? 'Retail y comercio electrónico' : 'Retail and e-commerce'}
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#0066cc] mr-2">•</span>
                          <span className="text-black font-medium">
                            {language === 'es' ? 'Telecomunicaciones y tecnología' : 'Telecommunications and technology'}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default ProductsPage;