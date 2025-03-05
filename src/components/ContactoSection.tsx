import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactoSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Gracias por contactarnos. Nos pondremos en contacto con usted pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a4d8c]">
            Contacto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarle. Contáctenos para obtener más información sobre nuestros servicios o solicitar una consulta personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-[#0a4d8c]">Envíenos un mensaje</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4d8c]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4d8c]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4d8c]"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a4d8c]"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#0a4d8c] hover:bg-[#0a3d6c] text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
          
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-[#0a4d8c]">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-[#0a4d8c]/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#0a4d8c]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0a4d8c] mb-1">Teléfono</h4>
                    <p className="text-gray-600">+34 91 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-[#0a4d8c]/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#0a4d8c]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0a4d8c] mb-1">Email</h4>
                    <p className="text-gray-600">info@aiconnect.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 bg-[#0a4d8c]/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#0a4d8c]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#0a4d8c] mb-1">Dirección</h4>
                    <p className="text-gray-600">Calle Innovación, 123<br />28001 Madrid, España</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a4d8c] rounded-lg p-8 shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4">Horario de atención</h3>
              <p className="mb-4">Nuestro equipo de soporte está disponible 24/7 para emergencias.</p>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;