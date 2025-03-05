import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importar Swiper y sus estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const productos = [
    {
      nombre: "InfluAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMW95Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1a9babcd454dae5ad4c1ba850f2f55c4e304a342/WhatsApp Image 2024-12-30 at 9.02.38 PM.jpeg"
    },
    {
      nombre: "TrueSing",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXN5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5c9fbb4b14b3fd313b53280155eeb9f6d2cd1846/WhatsApp Image 2024-12-30 at 9.02.29 PM.jpeg"
    },
    {
      nombre: "CyberAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTR5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--73f9861746645b33a241cec3dd527bc12750419c/WhatsApp Image 2024-12-30 at 9.02.07 PM.jpeg"
    },
    {
      nombre: "AvAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMU15Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6fdb4faa30965ee369863edd3ea5aa269dbcdd71/WhatsApp Image 2024-12-30 at 9.01.37 PM.jpeg"
    },
    {
      nombre: "AI Trainer",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTh5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dd5086fbb75026b4e5aaf9a4b8316f8cae61d779/WhatsApp Image 2024-12-30 at 9.03.23 PM.jpeg"
    },
    {
      nombre: "AI Vision",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDR5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1f6d163d9b46f30e17fcb8b3b180dcc9f2160b80/WhatsApp Image 2024-12-30 at 9.00.07 PM.jpeg"
    },
    {
      nombre: "AsistAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDh5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8690180568cbd97a892ad71bcdd13ef780086781/WhatsApp Image 2024-12-30 at 8.59.19 PM.jpeg"
    },
    {
      nombre: "db-ai",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9af9bed74cb6250e61a93659684b3173edba8288/WhatsApp Image 2024-12-30 at 9.03.05 PM.jpeg"
    },
    {
      nombre: "ProcessAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--94499a55406e0fbbfc64d21835aa0288c1a27e7c/WhatsApp Image 2024-12-30 at 8.59.06 PM.jpeg"
    },
    {
      nombre: "SellAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--252af506ed0fd97356946db9ed3ee66d49bfba1b/WhatsApp Image 2024-12-30 at 8.59.52 PM.jpeg"
    },
    {
      nombre: "TestQAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3d56e1471b387c48cb1e652f04fb9bf47143288d/WhatsApp Image 2024-12-30 at 9.03.17 PM.jpeg"
    },
    {
      nombre: "MultimediaAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7c26cf1286a962efbe061d2febae968fbb5c2d3e/WhatsApp Image 2024-12-30 at 9.00.53 PM.jpeg"
    },
    {
      nombre: "MulticonnectAI",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVl5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--58665808c4187a41e37502ec1652d3b719f37138/WhatsApp Image 2024-12-30 at 8.59.33 PM (1).jpeg"
    },
    {
      nombre: "FaceIA",
      imagen: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWt5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--79acffae3cf4c6c3644b3d5f272f1a307bbc5bc6/WhatsApp Image 2024-12-30 at 9.00.21 PM.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Texto central */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Descubre cómo AIConnect ha transformado negocios con el lanzamiento de productos potenciados por IA. Haz clic <a href="#" className="text-[#38bdf8] font-medium">aquí</a>.
          </p>
        </div>
        
        {/* Carrusel 3D */}
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true
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
              <SwiperSlide key={index} className="w-64 h-64 md:w-80 md:h-80">
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-white rounded-lg overflow-hidden">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{producto.nombre}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Botones de navegación personalizados */}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md cursor-pointer">
            <ChevronLeft className="h-6 w-6 text-[#38bdf8]" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md cursor-pointer">
            <ChevronRight className="h-6 w-6 text-[#38bdf8]" />
          </div>
        </div>
      </div>
      
      <style>{`
        .swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: 300px;
          filter: blur(2px);
          transition: all 0.3s ease;
        }
        
        .swiper-slide-active {
          filter: blur(0);
          transform: scale(1.1);
        }
        
        .swiper-pagination-bullet {
          background-color: #38bdf8;
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