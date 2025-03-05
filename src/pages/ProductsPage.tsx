import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import DemoRequestModal from '../components/DemoRequestModal';

const ProductsPage = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Hide media section when collapsing
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
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                  <span className="text-[#13477a] font-bold text-xl">AI</span>
                </div>
                <span className="text-xl font-bold">Connect</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                Inicio
              </Link>
              <span className="text-sm font-medium text-gray-200">
                AI Connect
              </span>
              <Link to="/proyectos" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                Productos
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
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#13477a] mb-4">
              AI Connect
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600">
                AIConnect: Plataforma de IA multiservicios para optimizar negocios, aumentar eficiencia y potenciar la competitividad. 
                <button 
                  onClick={toggleExpand} 
                  className="text-[#13477a] hover:text-[#0d3359] ml-1 font-medium"
                >
                  {!isExpanded ? "Dar clic para saber mas..." : "Dar clic para saber menos."}
                </button>
              </p>
              
              {isExpanded && (
                <div className="text-lg text-gray-600 mt-4">
                  <p className="mb-4">Este es un espacio ideal para presentar detalladamente nuestra plataforma, su impacto en los negocios y cómo nos destacamos entre la competencia.</p>
                  <p>AIConnect es la plataforma líder en inteligencia artificial que ofrece una amplia gama de servicios para potenciar tu producto. <a href="#" onClick={handleMediaClick} className="text-[#13477a] hover:text-[#0d3359] font-medium">Haz clic aquí</a> para descubrir cómo podemos llevar tu producto al siguiente nivel.</p>
                </div>
              )}
            </div>
          </div>

          {/* Video Section - Only shown after clicking "Haz clic aquí" */}
          {showMedia && isExpanded && (
            <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-[#13477a] mb-6">Video Demostrativo</h2>
                <div className="aspect-video bg-[#13477a]/10 rounded-lg overflow-hidden shadow-lg relative group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#13477a] rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <svg className="w-8 h-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">Descubre el Poder de AI Connect</h3>
                    <p className="text-gray-200">Mira cómo nuestra tecnología está transformando empresas</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#13477a] mb-4">AIConnect es la plataforma líder en inteligencia artificial</h2>
              <p className="text-gray-600 mb-6">
                Ofrecemos una amplia gama de servicios para potenciar tu producto. <a href="#" onClick={handleMediaClick} className="text-[#13477a] hover:text-[#0d3359] font-medium">Haz clic aquí</a> para descubrir cómo podemos llevar tu producto al siguiente nivel.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#13477a] mb-3">Ventajas competitivas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Tecnología de vanguardia con algoritmos propietarios
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Soluciones personalizadas para cada sector empresarial
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Implementación rápida y soporte técnico continuo
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Escalabilidad garantizada para crecer con tu negocio
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#13477a] mb-3">Sectores que atendemos</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Finanzas y banca
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Salud y ciencias de la vida
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Manufactura y logística
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Retail y comercio electrónico
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#13477a] mr-2">•</span>
                      Telecomunicaciones y tecnología
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <VirtualAssistant />
      
      {/* Modal de solicitud de demostración */}
      <DemoRequestModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </div>
  );
};

export default ProductsPage;