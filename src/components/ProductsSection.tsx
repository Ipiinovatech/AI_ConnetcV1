import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const productos = [
    { id: 1, nombre: "ProcessAI", imagen: "/Public/images/ProcessAI.jpeg" },
    { id: 2, nombre: "MulticonnectAI", imagen: "/Public/images/MulticonnectAI.jpeg" },
    { id: 3, nombre: "SellAI", imagen: "/Public/images/SellAI.jpeg" },
    { id: 4, nombre: "AI Vision", imagen: "/Public/images/AI Vision.jpeg" },
    { id: 5, nombre: "FaceIA", imagen: "/Public/images/FaceIA.jpeg" },
    { id: 6, nombre: "MultimediaAI", imagen: "/Public/images/MultimediAI.jpeg" },
    { id: 7, nombre: "AvAI", imagen: "/Public/images/AvAI.jpeg" },
    { id: 8, nombre: "CyberAI", imagen: "/Public/images/CyberAI.jpeg" },
    { id: 9, nombre: "TrueSing", imagen: "/Public/images/TrueSing.jpeg" },
    { id: 10, nombre: "InfluAI", imagen: "/Public/images/InfluAI.jpeg" },
    { id: 11, nombre: "db-ai", imagen: "/Public/images/db-ai.jpeg" },
    { id: 12, nombre: "TestQAI", imagen: "/Public/images/TestQAI.jpeg" },
    { id: 13, nombre: "AI Trainer", imagen: "/Public/images/AI Trainer.jpeg" },
    { id: 14, nombre: "VIRTUAL SMART VIDEO", imagen: "/Public/images/VIRTUAL SMART VIDEO.png" }
  ];
  
  const handleImageClick = () => {
    if (window.innerWidth <= 768) {
      setIsZoomed(!isZoomed);
      if (!isZoomed) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  };

  const handleProductClick = (producto: typeof productos[0]) => {
    if (window.innerWidth <= 768) {
      navigate(`/productos/${producto.id}`);
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (window.innerWidth > 768 && swiper) {
        if (e.key === 'ArrowLeft') {
          swiper.slidePrev();
        } else if (e.key === 'ArrowRight') {
          swiper.slideNext();
        }
      }
      if (e.key === 'Escape' && isZoomed) {
        handleImageClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [swiper, isZoomed]);

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Products Image with Zoom Functionality */}
        <div className="flex justify-center mb-8 md:mb-12 relative">
          <img 
            src={language === 'es' ? "/Public/images/PRODUCTOS AI CONNECT.png" : "/Public/images/PRODUCTOS AI CONNECT INGLES.png"}
            alt={language === 'es' ? "Productos AI Connect" : "AI Connect Products"}
            className={`w-full max-w-[90%] md:max-w-full h-auto object-contain cursor-pointer transition-all duration-300`}
            onClick={handleImageClick}
          />

          {/* Zoom Modal */}
          {isZoomed && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a4d8c]/95 to-[#13477a]/95 backdrop-blur-sm">
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img 
                  src={language === 'es' ? "/Public/images/PRODUCTOS AI CONNECT.png" : "/Public/images/PRODUCTOS AI CONNECT INGLES.png"}
                  alt={language === 'es' ? "Productos AI Connect" : "AI Connect Products"}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                  onClick={handleImageClick}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mb-8 md:mb-16">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4 md:px-0">
            {language === 'es' ? (
              <>
                Descubre cómo AIConnect ha transformado negocios con el lanzamiento de productos potenciados por IA. Haz clic{' '}
                <Link to="/proyectos" className="text-[#38bdf8] font-medium hover:text-[#60ccff] transition-colors">
                  aquí
                </Link>.
              </>
            ) : (
              <>
                Discover how AIConnect has transformed businesses with the launch of AI-powered products. Click{' '}
                <Link to="/proyectos" className="text-[#38bdf8] font-medium hover:text-[#60ccff] transition-colors">
                  here
                </Link>.
              </>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="relative max-w-6xl mx-auto px-2 md:px-0">
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {productos.map((producto) => (
              <SwiperSlide 
                key={producto.id}
                onClick={() => handleProductClick(producto)}
                className="cursor-pointer md:cursor-default py-4"
              >
                <div className="relative group">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-[200px] md:h-[300px] object-contain transition-transform duration-200 md:transform-none"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity md:hidden group-active:opacity-100">
                    <span className="text-white text-sm font-medium px-4 py-2 bg-black/30 rounded-lg backdrop-blur-sm">
                      {language === 'es' ? 'Ver detalles' : 'View details'}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <ChevronLeft className="h-8 w-8 text-[#38bdf8]" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
            <ChevronRight className="h-8 w-8 text-[#38bdf8]" />
          </button>
        </div>
      </div>
      
      <style>{`
        .swiper {
          width: 100%;
          padding: 20px 0;
        }
        
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet {
          background-color: #38bdf8;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          padding: 0;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }

        @media (max-width: 768px) {
          .swiper-slide:active img {
            transform: scale(0.95);
            transition: transform 0.2s;
          }
          
          .swiper-slide:active .group-active\\:opacity-100 {
            opacity: 1;
          }

          .swiper-pagination {
            bottom: 0 !important;
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }
        }

        @media (min-width: 769px) {
          .swiper-slide {
            pointer-events: none;
          }
        }

        @media (max-width: 480px) {
          .swiper {
            padding: 10px 0;
          }
          
          .swiper-slide {
            padding: 0 5px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;