import React, { useState } from 'react';
import { X, Image } from 'lucide-react';
import DemoRequestModal from './DemoRequestModal';
import { useNavigate } from 'react-router-dom';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
  } | null;
}

const ProductDetailModal = ({ isOpen, onClose, product }: ProductDetailModalProps) => {
  const [showImage, setShowImage] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const navigate = useNavigate();

  if (!isOpen || !product) return null;

  // Short description is just the first sentence
  const shortDescription = product.description.split('.')[0] + '.';
  
  // Full description is the entire text
  const fullDescription = product.description;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const handleFAQsClick = () => {
    onClose(); // Cerrar el modal primero
    // Navegar a la página principal y luego al área de FAQs
    navigate('/#faqs');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50 overflow-y-auto pt-20 pb-20">
      <div className="relative bg-[#0c0c24] text-white w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">
        {/* Header with product name and close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white rounded-lg overflow-hidden mr-4 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold">{product.name}</h2>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleImage}
              className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-sm transition-colors"
            >
              <Image size={16} />
              <span>{showImage ? 'Ocultar imagen' : 'Mostrar imagen'}</span>
            </button>
            
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-300 mb-2">
              {showFullDescription ? fullDescription : shortDescription}{' '}
              {!showFullDescription && (
                <button
                  onClick={toggleDescription}
                  className="text-[#13477a] hover:text-[#0d3359] focus:outline-none"
                >
                  Saber más...
                </button>
              )}
              {showFullDescription && (
                <button
                  onClick={toggleDescription}
                  className="text-[#13477a] hover:text-[#0d3359] focus:outline-none block mt-2"
                >
                  Mostrar menos
                </button>
              )}
            </p>
          </div>
          
          {/* Image (conditionally shown) */}
          {showImage && (
            <div className="mb-6">
              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full object-contain"
                />
              </div>
            </div>
          )}
          
          {/* Video Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Video Explicativo</h3>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {/* Placeholder for video */}
              <div className="w-full h-full flex items-center justify-center bg-[#13477a]/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#13477a]/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Video demostrativo de {product.name}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Link */}
          <div className="mt-8 text-center">
            <button 
              onClick={handleFAQsClick}
              className="text-[#13477a] hover:text-[#0d3359] underline font-medium"
            >
              ¿Tienes preguntas? Visita nuestras FAQs
            </button>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-[#13477a]/50 to-[#0d3359]/50 rounded-xl p-6 border border-[#13477a]/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">¿Listo para transformar tu negocio?</h3>
              <p className="text-gray-300 mb-6">
                Contáctanos hoy mismo para una consulta personalizada y descubre cómo {product.name} puede impulsar tu empresa hacia el futuro.
              </p>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-[#13477a] hover:bg-[#0d3359] text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicitar demostración
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de solicitud de demostración */}
      <DemoRequestModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </div>
  );
};

export default ProductDetailModal;