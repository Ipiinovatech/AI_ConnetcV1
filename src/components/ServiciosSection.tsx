import React from 'react';
import { Server, Cpu, Network, Shield, Database, Globe } from 'lucide-react';

const ServiciosSection = () => {
  const servicios = [
    {
      icon: <Server className="h-10 w-10" />,
      title: 'Infraestructura de Red',
      description: 'Soluciones de infraestructura de red escalables y seguras para empresas de todos los tamaños.'
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: 'Servicios Cloud',
      description: 'Migración y gestión de servicios en la nube con máxima seguridad y rendimiento.'
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: 'Conectividad Avanzada',
      description: 'Soluciones de conectividad de alta velocidad para entornos empresariales exigentes.'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Ciberseguridad',
      description: 'Protección integral contra amenazas cibernéticas y gestión de vulnerabilidades.'
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: 'Gestión de Datos',
      description: 'Almacenamiento, procesamiento y análisis de datos empresariales con tecnologías avanzadas.'
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Soluciones IoT',
      description: 'Implementación y gestión de dispositivos IoT para optimizar procesos empresariales.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a4d8c]">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de conectividad y servicios de red para impulsar la transformación digital de su empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#0a4d8c] mb-4">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#0a4d8c]">{servicio.title}</h3>
              <p className="text-gray-600">{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;