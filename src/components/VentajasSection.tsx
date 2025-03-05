import React from 'react';
import { CheckCircle, Clock, Award, TrendingUp } from 'lucide-react';

const VentajasSection = () => {
  const ventajas = [
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'Fiabilidad Garantizada',
      description: 'Nuestras soluciones ofrecen un 99.9% de tiempo de actividad, asegurando la continuidad de su negocio.'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: 'Soporte 24/7',
      description: 'Equipo técnico disponible las 24 horas para resolver cualquier incidencia de forma inmediata.'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Tecnología de Vanguardia',
      description: 'Implementamos las últimas tecnologías para ofrecer soluciones innovadoras y eficientes.'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Escalabilidad',
      description: 'Nuestras soluciones crecen con su negocio, adaptándose a sus necesidades cambiantes.'
    }
  ];

  return (
    <section id="ventajas" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a4d8c]">
            ¿Por qué elegir AI Connect?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos diferenciamos por nuestra experiencia, calidad de servicio y compromiso con la satisfacción del cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <div className="text-[#0a4d8c] mb-4 flex justify-center">
                {ventaja.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#0a4d8c]">{ventaja.title}</h3>
              <p className="text-gray-600">{ventaja.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#0a4d8c] rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Soluciones personalizadas para su empresa</h3>
              <p className="text-blue-100 mb-6">
                Analizamos sus necesidades específicas para diseñar e implementar soluciones que optimicen sus operaciones y mejoren su competitividad.
              </p>
              <button className="bg-white text-[#0a4d8c] hover:bg-blue-100 font-medium py-2 px-6 rounded-full transition-all duration-300">
                Solicitar consulta
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Soluciones personalizadas" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentajasSection;