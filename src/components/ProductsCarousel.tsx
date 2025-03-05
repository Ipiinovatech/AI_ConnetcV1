import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importar todas las imágenes de productos
const productImages = [
  {
    name: "InfluAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMW95Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1a9babcd454dae5ad4c1ba850f2f55c4e304a342/WhatsApp Image 2024-12-30 at 9.02.38 PM.jpeg"
  },
  {
    name: "TrueSing",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXN5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5c9fbb4b14b3fd313b53280155eeb9f6d2cd1846/WhatsApp Image 2024-12-30 at 9.02.29 PM.jpeg"
  },
  {
    name: "CyberAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTR5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--73f9861746645b33a241cec3dd527bc12750419c/WhatsApp Image 2024-12-30 at 9.02.07 PM.jpeg"
  },
  {
    name: "AvAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMU15Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6fdb4faa30965ee369863edd3ea5aa269dbcdd71/WhatsApp Image 2024-12-30 at 9.01.37 PM.jpeg"
  },
  {
    name: "MultimediaAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7c26cf1286a962efbe061d2febae968fbb5c2d3e/WhatsApp Image 2024-12-30 at 9.00.53 PM.jpeg"
  },
  {
    name: "FaceIA",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWt5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--79acffae3cf4c6c3644b3d5f272f1a307bbc5bc6/WhatsApp Image 2024-12-30 at 9.00.21 PM.jpeg"
  },
  {
    name: "AI Vision",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDR5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1f6d163d9b46f30e17fcb8b3b180dcc9f2160b80/WhatsApp Image 2024-12-30 at 9.00.07 PM.jpeg"
  },
  {
    name: "ProcessAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--94499a55406e0fbbfc64d21835aa0288c1a27e7c/WhatsApp Image 2024-12-30 at 8.59.06 PM.jpeg"
  },
  {
    name: "AsistAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDh5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8690180568cbd97a892ad71bcdd13ef780086781/WhatsApp Image 2024-12-30 at 8.59.19 PM.jpeg"
  },
  {
    name: "MulticonnectAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVl5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--58665808c4187a41e37502ec1652d3b719f37138/WhatsApp Image 2024-12-30 at 8.59.33 PM (1).jpeg"
  },
  {
    name: "SellAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--252af506ed0fd97356946db9ed3ee66d49bfba1b/WhatsApp Image 2024-12-30 at 8.59.52 PM.jpeg"
  },
  {
    name: "TestQAI",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3d56e1471b387c48cb1e652f04fb9bf47143288d/WhatsApp Image 2024-12-30 at 9.03.17 PM.jpeg"
  },
  {
    name: "AI Trainer",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMTh5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dd5086fbb75026b4e5aaf9a4b8316f8cae61d779/WhatsApp Image 2024-12-30 at 9.03.23 PM.jpeg"
  },
  {
    name: "db-ai",
    src: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkF5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9af9bed74cb6250e61a93659684b3173edba8288/WhatsApp Image 2024-12-30 at 9.03.05 PM.jpeg"
  }
];

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Número de productos visibles a la vez (ajustable según el ancho de la pantalla)
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
      return 4;
    }
    return 4; // Valor por defecto
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para navegar al siguiente elemento
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Función para navegar al elemento anterior
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Obtener los índices de los productos visibles
  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % productImages.length;
      products.push(productImages[index]);
    }
    return products;
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div 
        ref={carouselRef}
        className="flex overflow-hidden"
      >
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(0)` }}>
          {getVisibleProducts().map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-1/4 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.src} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Botones de navegación */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 -ml-4"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 -mr-4"
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ProductsCarousel;