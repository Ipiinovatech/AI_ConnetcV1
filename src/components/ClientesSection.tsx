import React from 'react';
import { Users, Star } from 'lucide-react';

const ClientesSection = () => {
  const testimonios = [
    {
      nombre: "María Rodríguez",
      empresa: "Tecnologías Avanzadas S.A.",
      texto: "AI Connect ha transformado nuestra infraestructura de red, mejorando significativamente la eficiencia y seguridad de nuestras operaciones.",
      estrellas: 5
    },
    {
      nombre: "Carlos Méndez",
      empresa: "Grupo Financiero Global",
      texto: "El servicio de soporte 24/7 ha sido fundamental para mantener nuestra operatividad. Respuesta rápida y soluciones efectivas.",
      estrellas: 5
    },
    {
      nombre: "Laura Sánchez",
      empresa: "Industrias Innovadoras",
      texto: "La migración a la nube con AI Connect fue impecable, sin interrupciones y con un rendimiento superior al esperado.",
      estrellas: 4
    }
  ];

  const clientes = [
    "Tecnologías Avanzadas S.A.",
    "Grupo Financiero Global",
    "Industrias Innovadoras",
    "Corporación Logística",
    "Servicios Médicos Integrados",
    "Retail Nacional"
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a4d8c]">
            Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas líderes en diversos sectores confían en AI Connect para sus soluciones de conectividad y servicios de red.
          </p>
        </div>
        
        {/* Testimonios */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-[#0a4d8c] text-center">Lo que dicen nuestros clientes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonio.estrellas)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                  {[...Array(5 - testimonio.estrellas)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{testimonio.texto}"</p>
                
                <div>
                  <p className="font-semibold text-[#0a4d8c]">{testimonio.nombre}</p>
                  <p className="text-gray-500 text-sm">{testimonio.empresa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Logos de Clientes */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-[#0a4d8c] text-center">Empresas que confían en nosotros</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientes.map((cliente, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 shadow-sm border border-gray-100"
              >
                <p className="text-[#0a4d8c] font-medium text-center">{cliente}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;