import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                  <span className="text-blue-700 font-bold text-xl">AI</span>
                </div>
                <span className="text-xl font-bold">Connect</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-white hover:text-blue-100 transition-colors">
                Inicio
              </Link>
              <Link to="/productos" className="text-sm font-medium text-white hover:text-blue-100 transition-colors">
                Productos
              </Link>
              <Link to="/proyectos" className="text-sm font-medium text-white hover:text-blue-100 transition-colors">
                Proyectos
              </Link>
              <Link to="/#faqs" className="text-sm font-medium text-white hover:text-blue-100 transition-colors">
                FAQs
              </Link>
            </div>
            
            <Link to="/" className="flex items-center text-white hover:text-blue-100 transition-colors">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Política de privacidad
            </h1>
          </div>

          {/* Privacy Policy Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                En AIConnect, entendemos la importancia de la privacidad de tus datos. Nuestra política de privacidad revela 
                nuestras prácticas de recopilación, uso y gestión de datos de los usuarios, cumpliendo con los requisitos 
                legales para proteger tu privacidad.
              </p>

              <p className="mb-6">
                Nos aseguramos de cumplir con la legislación aplicable a tus actividades y ubicación, teniendo en cuenta los 
                diferentes requisitos en cada jurisdicción.
              </p>

              <p className="mb-6">
                Nuestra política de privacidad incluye:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Tipo de información recopilada.</li>
                <li>Métodos de recopilación de datos.</li>
                <li>Razones para la recopilación de información personal.</li>
                <li>Procesos de almacenamiento, uso y compartición de datos personales.</li>
                <li>Comunicación con los usuarios del sitio web.</li>
                <li>Enfoque en la protección de datos de menores, si aplica.</li>
                <li>Procedimientos para actualizaciones de la política de privacidad.</li>
                <li>Información de contacto.</li>
              </ul>

              <p className="mb-6">
                Para obtener más información sobre cómo desarrollar una política de privacidad efectiva, consulta nuestros 
                recursos en el Centro de Ayuda.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                <p className="text-sm text-gray-700 italic">
                  Es importante recordar que nuestras explicaciones y ejemplos son generales. No sustituyen el asesoramiento 
                  legal. Te recomendamos buscar asesoramiento legal para garantizar el cumplimiento de las leyes y la 
                  elaboración efectiva de tu política de privacidad.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Información que recopilamos</h2>
              <p className="mb-4">
                En AIConnect, podemos recopilar diferentes tipos de información personal, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Información de identificación personal (nombre, dirección de correo electrónico, número de teléfono)</li>
                <li>Información de la empresa (nombre de la empresa, cargo, sector)</li>
                <li>Información técnica (dirección IP, tipo de navegador, dispositivo)</li>
                <li>Información de uso (páginas visitadas, tiempo de permanencia, interacciones)</li>
                <li>Información de comunicación (consultas, comentarios, respuestas)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Cómo recopilamos la información</h2>
              <p className="mb-4">
                Recopilamos información a través de diversos métodos, incluyendo:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Formularios de registro y contacto en nuestro sitio web</li>
                <li>Uso de cookies y tecnologías similares</li>
                <li>Interacciones con nuestros servicios y aplicaciones</li>
                <li>Comunicaciones directas (correo electrónico, chat, teléfono)</li>
                <li>Fuentes de terceros (con su consentimiento previo)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Finalidad del tratamiento de datos</h2>
              <p className="mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Proporcionar y mejorar nuestros servicios de IA</li>
                <li>Personalizar la experiencia del usuario</li>
                <li>Procesar transacciones y gestionar cuentas de usuario</li>
                <li>Comunicarnos con los usuarios sobre actualizaciones, ofertas y eventos</li>
                <li>Analizar tendencias y comportamientos para mejorar nuestros servicios</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Proteger nuestros derechos, propiedad o seguridad</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Base legal para el tratamiento</h2>
              <p className="mb-4">
                Procesamos sus datos personales basándonos en las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Consentimiento explícito proporcionado por usted</li>
                <li>Necesidad para la ejecución de un contrato</li>
                <li>Cumplimiento de obligaciones legales</li>
                <li>Protección de intereses vitales</li>
                <li>Interés legítimo que no prevalece sobre sus derechos y libertades</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Compartición de datos</h2>
              <p className="mb-4">
                Podemos compartir su información personal con:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Socios comerciales con su consentimiento previo</li>
                <li>Autoridades legales cuando sea requerido por ley</li>
                <li>Terceros en caso de fusión, adquisición o venta de activos</li>
              </ul>
              <p className="mb-4">
                No vendemos ni alquilamos su información personal a terceros para fines de marketing.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Seguridad de los datos</h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra acceso no autorizado, 
                alteración, divulgación o destrucción. Estas medidas incluyen:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Encriptación de datos sensibles</li>
                <li>Firewalls y sistemas de detección de intrusiones</li>
                <li>Acceso restringido a información personal</li>
                <li>Evaluaciones regulares de seguridad</li>
                <li>Formación de personal en prácticas de privacidad y seguridad</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Sus derechos</h2>
              <p className="mb-4">
                Dependiendo de su ubicación, puede tener los siguientes derechos respecto a sus datos personales:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Derecho de acceso a sus datos personales</li>
                <li>Derecho de rectificación de datos inexactos</li>
                <li>Derecho de supresión ("derecho al olvido")</li>
                <li>Derecho a la limitación del tratamiento</li>
                <li>Derecho a la portabilidad de los datos</li>
                <li>Derecho de oposición al tratamiento</li>
                <li>Derecho a no ser objeto de decisiones individuales automatizadas</li>
                <li>Derecho a retirar el consentimiento</li>
              </ul>
              <p className="mb-4">
                Para ejercer estos derechos, póngase en contacto con nosotros utilizando la información proporcionada en la sección "Contacto".
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookies y tecnologías similares</h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el tráfico y personalizar el contenido. 
                Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Cambios en la política de privacidad</h2>
              <p className="mb-4">
                Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por otros motivos 
                operativos, legales o regulatorios. Le notificaremos cualquier cambio material publicando la nueva política de privacidad 
                en esta página y, cuando sea apropiado, le informaremos por correo electrónico.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contacto</h2>
              <p className="mb-4">
                Si tiene preguntas o inquietudes sobre nuestra política de privacidad o el tratamiento de sus datos personales, 
                puede ponerse en contacto con nosotros en:
              </p>
              <p className="mb-4">
                Email: <a href="mailto:Info@ipinnovatech.co" className="text-blue-600 hover:text-blue-800">Info@ipinnovatech.co</a><br />
                Sitio web: <a href="http://www.ipinnovatech.co/" className="text-blue-600 hover:text-blue-800">http://www.ipinnovatech.co/</a>
              </p>

              <p className="mt-8 text-sm text-gray-600">
                Última actualización: 1 de enero de 2025
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default PrivacyPolicyPage;