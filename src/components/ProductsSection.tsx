import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  
  const productos = [
    { id: 1, nombre: "ProcessAI", imagen: "/Public/Images/ProcessAI.jpeg" },
    { id: 2, nombre: "MulticonnectAI", imagen: "/Public/Images/MulticonnectAI.jpeg" },
    { id: 3, nombre: "SellAI", imagen: "/Public/Images/SellAI.jpeg" },
    { id: 4, nombre: "AI Vision", imagen: "/Public/Images/AI Vision.jpeg" },
    { id: 5, nombre: "FaceIA", imagen: "/Public/Images/FaceIA.jpeg" },
    { id: 6, nombre: "MultimediaAI", imagen: "/Public/Images/MultimediAI.jpeg" },
    { id: 7, nombre: "AvAI", imagen: "/Public/Images/AvAI.jpeg" },
    { id: 8, nombre: "CyberAI", imagen: "/Public/Images/CyberAI.jpeg" },
    { id: 9, nombre: "TrueSing", imagen: "/Public/Images/TrueSing.jpeg" },
    { id: 10, nombre: "InfluAI", imagen: "/Public/Images/InfluAI.jpeg" },
    { id: 11, nombre: "TestQAI", imagen: "/Public/Images/TestQAI.jpeg" },
    { id: 12, nombre: "AI Trainer", imagen: "/Public/Images/AI Trainer.jpeg" },
    { id: 13, nombre: "db-ai", imagen: "/Public/Images/db-ai.jpeg" },
    { id: 14, nombre: "VIRTUAL IPV", imagen: "/Public/Images/VIRTUAL IPV.png" },
    { id: 15, nombre: "VIRTUAL QUALITY FIELD", imagen: "/Public/Images/VIRTUAL QUALITY FIELD.png" },
    { id: 16, nombre: "VIRTUAL SMART VIDEO", imagen: "/Public/Images/VIRTUAL SMART VIDEO.png" },
    { id: 17, nombre: "ANALITICA BIG DATA", imagen: "/Public/Images/ANALITICA BIG DATA.png" },
    { id: 18, nombre: "FABRICA DE SOFTWARE", imagen: "/Public/Images/FABRICA DE SOFTWARE.png" },
    { id: 19, nombre: "PA YA 2.0", imagen: "/Public/Images/PA YA.png" }
  ];

  const handleProductClick = (product: any) => {
    // Only handle click on mobile devices
    if (window.innerWidth <= 768) {
      navigate('/proyectos', { 
        state: { 
          selectedProduct: product,
          openModal: true 
        }
      });
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard navigation on desktop
      if (window.innerWidth > 768 && swiper) {
        if (e.key === 'ArrowLeft') {
          swiper.slidePrev();
        } else if (e.key === 'ArrowRight') {
          swiper.slideNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [swiper]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-justify">
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
        
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            spaceBetween={30}
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
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            {productos.map((producto) => (
              <SwiperSlide 
                key={producto.id}
                onClick={() => handleProductClick(producto)}
                className="cursor-pointer md:cursor-default" // Only show pointer cursor on mobile
              >
                <div className="relative group">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-[300px] object-contain transition-transform duration-200 md:transform-none"
                  />
                  {/* Mobile-only overlay with tap indication */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity md:hidden group-active:opacity-100">
                    <span className="text-white text-sm font-medium">
                      {language === 'es' ? 'Ver detalles' : 'View details'}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="h-8 w-8 text-[#38bdf8]" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
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

        /* Mobile-specific touch feedback */
        @media (max-width: 768px) {
          .swiper-slide:active img {
            transform: scale(0.98);
            transition: transform 0.2s;
          }
          
          .swiper-slide:active .group-active\\:opacity-100 {
            opacity: 1;
          }
        }

        /* Disable click effects on desktop */
        @media (min-width: 769px) {
          .swiper-slide {
            pointer-events: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;