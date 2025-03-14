import React, { useState } from 'react';
import { X, Image, ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import DemoRequestModal from './DemoRequestModal';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    category: string;
    image: string;
    description: {
      es: string;
      en: string;
    };
  } | null;
}

const ProductDetailModal = ({ isOpen, onClose, product }: ProductDetailModalProps) => {
  const [showImage, setShowImage] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  if (!isOpen || !product) return null;

  const handleImageClick = () => {
    // On mobile, clicking the header image shows the larger image inline
    if (window.innerWidth <= 768) {
      setShowImage(!showImage);
    }
  };

  const toggleImage = () => {
    // Desktop image toggle button
    if (window.innerWidth > 768) {
      setShowImage(!showImage);
    }
  };

  const handleFAQsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    navigate('/#faqs');
  };

  const getProductVideos = (productName: string) => {
    const videos = {
      'ProcessAI': {
        es: '/Public/Videos/PROCESSAI/1. Optimizacin y Automatizacin de Procesos_1080p.mp4',
        en: '/Public/Videos/PROCESSAI/1. Process Optimization and Automation_1080p.mp4'
      },
      'MulticonnectAI': {
        es: '/Public/Videos/MulticonnectAI/2. Agentes Inteligentes Multicanal (ESPAOL)_1080p.mp4',
        en: '/Public/Videos/MulticonnectAI/2. Multichannel Intelligent Agents (INGLES)_1080p.mp4'
      },
      'SellAI': {
        es: '/Public/Videos/SellAI/3. Agente IA de Ventas Multicanal_1080p.mp4',
        en: '/Public/Videos/SellAI/3. Multichannel Sales AI Agent_1080p.mp4'
      },
      'AI Vision': {
        es: '/Public/Videos/AI Vision/4. Servicios de Visin Artificial_1080p.mp4',
        en: '/Public/Videos/AI Vision/4. Artificial Vision Services (INGLES)_1080p.mp4'
      },
      'FaceIA': {
        es: '/Public/Videos/FaceIA/5. Servicio de Reconocimiento Facial_1080p.mp4',
        en: '/Public/Videos/FaceIA/5. Facial Recognition Service_1080p.mp4'
      },
      'MultimediaAI': {
        es: '/Public/Videos/Multimedia AI/6. Generacion Multimodal con IA_1080p.mp4',
        en: '/Public/Videos/Multimedia AI/6. Multimodal Generation with AI_1080p.mp4'
      },
      'AvAI': {
        es: '/Public/Videos/AvAI/7. Avatares de IA_1080p.mp4',
        en: '/Public/Videos/AvAI/7. Avatars with AI_1080p.mp4'
      },
      'CyberAI': {
        es: '/Public/Videos/CyberAI/8. Ciberseguridad Potenciada con IA_1080p.mp4',
        en: '/Public/Videos/CyberAI/8. AIPowered Cybersecurity_1080p.mp4'
      },
      'TrueSing': {
        es: '/Public/Videos/TrueSing/9. Firmas Digitales con IA_1080p.mp4',
        en: '/Public/Videos/TrueSing/9. Digital Signatures with AI_1080p.mp4'
      },
      'InfluAI': {
        es: '/Public/Videos/InfluAI/10. Influencers de IA para Redes Sociales_1080p.mp4',
        en: '/Public/Videos/InfluAI/10. AI Influencers for Social Media_1080p.mp4'
      },
      'db-ai': {
        es: '/Public/Videos/db-ai/11. Bases de Datos Vectoriales(RAG) con Inteligencia Artificial_1080p.mp4',
        en: '/Public/Videos/db-ai/11. Vector Databases (RAG) with Artificial Intelligence_1080p.mp4'
      },
      'TestQAI': {
        es: '/Public/Videos/TestQAAI/12. Agentes de QA testing con IA_1080p.mp4',
        en: '/Public/Videos/TestQAAI/12. QA testing agents with AI_1080p.mp4'
      },
      'AI Trainer': {
        es: '/Public/Videos/AI Trainer/13. Capacitacin en Inteligencia Artificial_1080p.mp4',
        en: '/Public/Videos/AI Trainer/13. Artificial Intelligence Training_1080p.mp4'
      },
      'PA YA 2.0': {
        es: '/Public/Videos/pa_ya/14_PAYA!_1080p.mp4',
        en: '/Public/Videos/pa_ya/14_PAYA! INGLES_1080p.mp4'
      },
      'FABRICA DE SOFTWARE': {
        es: '/Public/Videos/FABRICA DE SOFTWARE/15. FABRICA DE SOFTWARE_1080p.mp4',
        en: '/Public/Videos/FABRICA DE SOFTWARE/15. SOFTWARE FACTORY_1080p.mp4'
      },
      'VIRTUAL SMART VIDEO': {
        es: '/Public/Videos/VIRTUAL SMART VIDEO/16. VIRTUAL SMART VIDEO_1080p.mp4',
        en: '/Public/Videos/VIRTUAL SMART VIDEO/16. VIRTUAL SMART VIDEO INGLES_1080p.mp4'
      },
      'VIRTUAL IPV': {
        es: '/Public/Videos/VIRTUAL IPV/17. VIRTUAL IPV_1080p.mp4',
        en: '/Public/Videos/VIRTUAL IPV/17. VIRTUAL IPV INGLES_1080p.mp4'
      },
      'VIRTUAL QUALITY FIELD': {
        es: '/Public/Videos/VIRTUAL QUALITY FIELD/18. VIRTUAL QUALITY FIELD_1080p.mp4',
        en: '/Public/Videos/VIRTUAL QUALITY FIELD/18. VIRTUAL QUALITY FIELD INGLES_1080p.mp4'
      },
      'ANALITICA BIG DATA': {
        es: '/Public/Videos/ANALITICA BIG DATA/19. ANALITICA BIG DATA_1080p.mp4',
        en: '/Public/Videos/ANALITICA BIG DATA/19. BIG DATA ANALYTICS_1080p.mp4'
      }
    };
    
    return videos[productName as keyof typeof videos] || null;
  };

  const productVideos = getProductVideos(product.name);
  const currentDescription = product.description[language as keyof typeof product.description];
  const paragraphs = currentDescription.split('. ').filter(Boolean).map(p => p.trim() + '.');
  const shortDescription = paragraphs[0];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-start justify-center z-50 overflow-y-auto md:py-8">
      <div className="relative bg-[#0c0c24] text-white w-full md:max-w-2xl lg:max-w-4xl rounded-none md:rounded-2xl shadow-2xl overflow-hidden min-h-screen md:min-h-0">
        {/* Close Button - Fixed position on mobile */}
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 p-2 rounded-full backdrop-blur-sm transition-colors"
          aria-label={language === 'es' ? 'Cerrar' : 'Close'}
        >
          <X size={24} className="text-white" />
        </button>

        {/* Header */}
        <div className="flex items-center p-6 border-b border-gray-800 bg-gradient-to-r from-[#1a1a3a] to-[#0a0a1f]">
          <div 
            className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-lg overflow-hidden mr-4 flex items-center justify-center p-2 cursor-pointer md:cursor-default"
            onClick={handleImageClick}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
            {product.name}
          </h2>
        </div>
        
        <div className="p-4 md:p-6 space-y-6">
          {/* Description Section */}
          <div className="space-y-4">
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              {isExpanded ? (
                paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-300 leading-relaxed">
                  {shortDescription}
                </p>
              )}
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-[#38bdf8] hover:text-[#60ccff] font-medium transition-colors w-full justify-center md:w-auto md:justify-start p-2 rounded-lg hover:bg-white/5"
            >
              <span>
                {isExpanded 
                  ? (language === 'es' ? 'Mostrar menos' : 'Show less')
                  : (language === 'es' ? 'Leer más' : 'Read more')}
              </span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
          
          {/* Image Toggle Button - Only on Desktop */}
          <div className="hidden md:block">
            <button
              onClick={toggleImage}
              className="flex items-center justify-center space-x-2 w-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-colors"
            >
              <Image size={18} />
              <span className="text-sm font-medium">
                {language === 'es' 
                  ? (showImage ? 'Ocultar imagen' : 'Mostrar imagen')
                  : (showImage ? 'Hide image' : 'Show image')}
              </span>
            </button>
          </div>
          
          {/* Product Image - Both Mobile and Desktop */}
          {showImage && (
            <div className="bg-white/5 rounded-lg p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 md:h-64 object-contain"
              />
            </div>
          )}
          
          {/* Video Section */}
          {productVideos && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white text-center md:text-left">
                {language === 'es' ? 'Video Explicativo' : 'Explanatory Video'}
              </h3>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video 
                  controls 
                  className="w-full h-full"
                  poster={product.image}
                  playsInline
                >
                  <source src={language === 'es' ? productVideos.es : productVideos.en} type="video/mp4" />
                  {language === 'es' 
                    ? 'Tu navegador no soporta el elemento de video.'
                    : 'Your browser does not support the video element.'}
                </video>
              </div>
            </div>
          )}
          
          {/* FAQs Link */}
          <div className="text-center">
            <button 
              onClick={handleFAQsClick}
              className="text-[#38bdf8] hover:text-[#60ccff] font-medium transition-colors p-2 rounded-lg hover:bg-white/5 text-sm"
            >
              {language === 'es' 
                ? '¿Tienes preguntas? Visita nuestras FAQs'
                : 'Have questions? Visit our FAQs'}
            </button>
          </div>
          
          {/* Demo Request Section */}
          <div className="bg-gradient-to-r from-[#13477a]/50 to-[#0d2d4d]/50 rounded-lg p-4 md:p-6 border border-[#38bdf8]/30">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                {language === 'es'
                  ? '¿Listo para transformar tu negocio?'
                  : 'Ready to transform your business?'}
              </h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {language === 'es'
                  ? `Contáctanos hoy mismo y descubre cómo ${product.name} puede impulsar tu empresa.`
                  : `Contact us today and discover how ${product.name} can drive your business.`}
              </p>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="w-full md:w-auto bg-[#38bdf8] hover:bg-[#60ccff] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                {language === 'es' ? 'Mira El Demo En Vivo' : 'Watch Live Demo'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <DemoRequestModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </div>
  );
};

export default ProductDetailModal;