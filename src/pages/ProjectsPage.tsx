import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Video } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import ProductDetailModal from '../components/ProductDetailModal';
import DemoRequestModal from '../components/DemoRequestModal';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'ai-connect' | 'varios'>('todos');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: "ProcessAI",
      category: "ai-connect",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--94499a55406e0fbbfc64d21835aa0288c1a27e7c/WhatsApp Image 2024-12-30 at 8.59.06 PM.jpeg",
      description: "Sistema de automatización inteligente de procesos empresariales utilizando IA avanzada para optimizar operaciones y reducir costos. Nuestros agentes de automatización con Inteligencia Artificial están diseñados para transformar sus procesos mediante una experiencia personalizada, efectiva y escalable en múltiples departamentos."
    },
    {
      id: 2,
      name: "MulticonnectAI",
      category: "ai-connect",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVl5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--58665808c4187a41e37502ec1652d3b719f37138/WhatsApp Image 2024-12-30 at 8.59.33 PM (1).jpeg",
      description: "Plataforma de conectividad múltiple que integra diferentes canales de comunicación con inteligencia artificial. Unifica todos sus canales en una sola plataforma inteligente."
    },
    {
      id: 3,
      name: "SellAI",
      category: "ai-connect",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--252af506ed0fd97356946db9ed3ee66d49bfba1b/WhatsApp Image 2024-12-30 at 8.59.52 PM.jpeg",
      description: "Sistema de ventas potenciado por IA para optimizar procesos comerciales y aumentar conversiones. Transforma sus estrategias comerciales mediante una experiencia de venta personalizada."
    },
    {
      id: 4,
      name: "AI Vision",
      category: "ai-connect",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDR5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1f6d163d9b46f30e17fcb8b3b180dcc9f2160b80/WhatsApp Image 2024-12-30 at 9.00.07 PM.jpeg",
      description: "Sistema de visión artificial que analiza imágenes y videos para extraer información valiosa y automatizar procesos visuales. Implementa algoritmos avanzados de reconocimiento."
    },
    {
      id: 5,
      name: "FaceIA",
      category: "ai-connect",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWt5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--79acffae3cf4c6c3644b3d5f272f1a307bbc5bc6/WhatsApp Image 2024-12-30 at 9.00.21 PM.jpeg",
      description: "Tecnología de reconocimiento facial avanzada con capacidades de análisis de emociones y verificación de identidad. Ofrece una solución de última generación."
    },
    {
      id: 6,
      name: "MultimediaAI",
      category: "ai-connect",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7c26cf1286a962efbe061d2febae968fbb5c2d3e/WhatsApp Image 2024-12-30 at 9.00.53 PM.jpeg",
      description: "Plataforma para la creación, edición y optimización de contenido multimedia utilizando inteligencia artificial. Revoluciona la producción de contenido digital."
    },
    {
      id: 7,
      name: "AvAI",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMU15Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6fdb4faa30965ee369863edd3ea5aa269dbcdd71/WhatsApp Image 2024-12-30 at 9.01.37 PM.jpeg",
      description: "Asistente virtual avanzado con capacidades de procesamiento de lenguaje natural y aprendizaje continuo. Representa la nueva generación de asistentes virtuales empresariales."
    },
    {
      id: 8,
      name: "CyberAI",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTR5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--73f9861746645b33a241cec3dd527bc12750419c/WhatsApp Image 2024-12-30 at 9.02.07 PM.jpeg",
      description: "Sistema de ciberseguridad potenciado por IA para detectar y prevenir amenazas en tiempo real. Proporciona protección proactiva contra amenazas cibernéticas."
    },
    {
      id: 9,
      name: "TrueSing",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXN5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5c9fbb4b14b3fd313b53280155eeb9f6d2cd1846/WhatsApp Image 2024-12-30 at 9.02.29 PM.jpeg",
      description: "Tecnología de verificación de firma digital con análisis biométrico avanzado para máxima seguridad. Revoluciona la autenticación de documentos digitales."
    },
    {
      id: 10,
      name: "InfluAI",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMW95Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1a9babcd454dae5ad4c1ba850f2f55c4e304a342/WhatsApp Image 2024-12-30 at 9.02.38 PM.jpeg",
      description: "Plataforma de análisis y gestión de influencers potenciada por IA. Optimiza campañas de marketing de influencers con análisis predictivo."
    },
    {
      id: 11,
      name: "TestQAI",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3d56e1471b387c48cb1e652f04fb9bf47143288d/WhatsApp Image 2024-12-30 at 9.03.17 PM.jpeg",
      description: "Sistema automatizado de pruebas y control de calidad con IA. Mejora la eficiencia y precisión en el testing de software."
    },
    {
      id: 12,
      name: "AI Trainer",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTh5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dd5086fbb75026b4e5aaf9a4b8316f8cae61d779/WhatsApp Image 2024-12-30 at 9.03.23 PM.jpeg",
      description: "Plataforma de entrenamiento y capacitación personalizada con IA. Adapta el aprendizaje según el progreso individual."
    },
    {
      id: 13,
      name: "db-ai",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9af9bed74cb6250e61a93659684b3173edba8288/WhatsApp Image 2024-12-30 at 9.03.05 PM.jpeg",
      description: "Sistema de gestión de bases de datos inteligente con IA. Optimiza consultas y mantenimiento de datos automáticamente."
    },
    {
      id: 14,
      name: "VIRTUAL IPV",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1e018328c33ed6e9a1570bb6695c5767752dde84/VIRTUAL IPV.png",
      description: "Sistema virtual de protección contra violencia con IA. Proporciona asistencia y monitoreo en tiempo real."
    },
    {
      id: 15,
      name: "VIRTUAL QUALITY FIELD",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXd5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5986da5276be01abed57f42b8518f8f303b0e997/VIRTUAL QUALITY FIELD.png",
      description: "Sistema de control de calidad en campo con IA. Automatiza inspecciones y genera reportes detallados."
    },
    {
      id: 16,
      name: "VIRTUAL SMART VIDEO",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWd5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8184472cb980b3a06095f0c94f2e84b1571bb1eb/VIRTUAL SMART VIDEO.png",
      description: "Plataforma de análisis de video inteligente. Detecta patrones y eventos en tiempo real."
    },
    {
      id: 17,
      name: "ANALITICA BIG DATA",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDB5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5784c6c3120f84815528214b0cd9276afc709d2d/ANALITICA BIG DATA.png",
      description: "Sistema de análisis de grandes volúmenes de datos. Extrae insights valiosos para la toma de decisiones."
    },
    {
      id: 18,
      name: "FABRICA DE SOFTWARE",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWN5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b96fe36c8f36d67b2d748af44d67e3acaa650b7a/FABRICA DE SOFTWARE.png",
      description: "Plataforma de desarrollo de software automatizado. Acelera el ciclo de desarrollo con IA."
    },
    {
      id: 19,
      name: "PA YA 2.0",
      category: "varios",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTB5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ba052daa25b86f0b47cdf695927198960c23f7ba/PA YA 2.0.png",
      description: "Sistema de pagos y transacciones inteligente. Optimiza procesos financieros con IA."
    }
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFAQsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faqs');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link to="/productos" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                AI Connect
              </Link>
              <span className="text-sm font-medium text-gray-200">
                Productos
              </span>
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
              <span className="hidden md:inline">Volver al inicio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#13477a] mb-4">
              Nuestros Productos
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluciones innovadoras impulsadas por IA para transformar su negocio
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex space-x-4">
              <button
                onClick={() => setActiveFilter('todos')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'todos' 
                    ? 'bg-[#13477a] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Todos los Productos
              </button>
              <button
                onClick={() => setActiveFilter('ai-connect')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'ai-connect' 
                    ? 'bg-[#13477a] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                AI Connect
              </button>
              <button
                onClick={() => setActiveFilter('varios')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'varios' 
                    ? 'bg-[#13477a] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Varios
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full">
                    <Video size={16} />
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6 bg-black text-white">
                  <h3 className={`text-xl font-bold mb-3 ${
                    product.name === 'SellAI' ? 'text-[#13477a]' : 'text-white'
                  }`}>
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {product.description.split('.')[0] + '.'}
                  </p>
                  
                  <button 
                    onClick={() => handleProductClick(product)}
                    className="inline-flex items-center text-[#13477a] hover:text-[#0d3359] text-sm font-medium"
                  >
                    Saber más <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />

      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default ProjectsPage;