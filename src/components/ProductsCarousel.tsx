import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const productos = [
    { nombre: "InfluAI", imagen: "/Public/images/InfluAI.jpeg" },
    { nombre: "TrueSing", imagen: "/Public/images/TrueSing.jpeg" },
    { nombre: "CyberAI", imagen: "/Public/images/CyberAI.jpeg" },
    { nombre: "AvAI", imagen: "/Public/images/AvAI.jpeg" },
    { nombre: "AI Trainer", imagen: "/Public/images/AI Trainer.jpeg" },
    { nombre: "AI Vision", imagen: "/Public/images/AI Vision.jpeg" },
    { nombre: "AsistAI", imagen: "/Public/images/AsistAI.jpeg" },
    { nombre: "db-ai", imagen: "/Public/images/db-ai.jpeg" },
    { nombre: "ProcessAI", imagen: "/Public/images/ProcessAI.jpeg" },
    { nombre: "SellAI", imagen: "/Public/images/SellAI.jpeg" },
    { nombre: "TestQAI", imagen: "/Public/images/TestQAI.jpeg" },
    { nombre: "MultimediaAI", imagen: "/Public/images/MultimediAI.jpeg" },
    { nombre: "MulticonnectAI", imagen: "/Public/images/MulticonnectAI.jpeg" },
    { nombre: "FaceIA", imagen: "/Public/images/FaceIA.jpeg" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre cómo AIConnect ha transformado negocios con el lanzamiento de productos potenciados por IA. Haz clic <a href="#" className="text-[#38bdf8] font-medium">aquí</a>.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {productos.map((producto, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="max-h-[300px] w-auto object-contain"
                />
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
          padding: 50px 0;
        }
        
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          opacity: 0.5;
          background: transparent;
        }
        
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.1);
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
      `}</style>
    </section>
  );
};

export default ProductsSection;