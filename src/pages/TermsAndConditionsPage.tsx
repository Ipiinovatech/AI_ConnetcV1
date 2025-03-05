import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';

const TermsAndConditionsPage = () => {
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
              Términos y Condiciones
            </h1>
          </div>

          {/* Terms and Conditions Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                AIConnect ofrece una plataforma de inteligencia artificial multiservicios diseñada para optimizar negocios, 
                aumentar la eficiencia y potenciar la competitividad. Los términos y condiciones son un conjunto de 
                disposiciones legales establecidas por AIConnect para regular el uso de la plataforma. Se definen los 
                términos y condiciones que rigen las actividades de los usuarios en la plataforma, así como la relación entre 
                los usuarios y AIConnect.
              </p>

              <p className="mb-6">
                En general, los términos y condiciones de AIConnect incluyen:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Quiénes pueden utilizar la plataforma y los requisitos para acceder</li>
                <li>Principales servicios ofrecidos a los usuarios</li>
                <li>Métodos de pago aceptados</li>
                <li>Política de modificaciones en los servicios</li>
                <li>Garantías y responsabilidades</li>
                <li>Propiedad intelectual y derechos de autor</li>
                <li>Derecho de suspensión o cancelación de cuentas</li>
                <li>Indemnización</li>
                <li>Limitación de responsabilidad</li>
                <li>Derecho de modificación de los términos</li>
                <li>Preferencia de legislación aplicable y resolución de conflictos</li>
                <li>Información de contacto</li>
              </ul>

              <p className="mb-6">
                Para obtener más información sobre los términos y condiciones de AIConnect, puedes consultar nuestro 
                Centro de Ayuda.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                <p className="text-sm text-gray-700 italic">
                  Toda la información proporcionada tiene carácter meramente explicativo e ilustrativo. No debe interpretarse 
                  como asesoramiento legal ni como recomendación para la redacción de términos y condiciones. Se 
                  recomienda buscar asesoramiento legal para entender y elaborar los términos y condiciones de AIConnect.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-4">
                Al acceder o utilizar la plataforma AIConnect, usted acepta estar legalmente vinculado por estos Términos y Condiciones. 
                Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Descripción del Servicio</h2>
              <p className="mb-4">
                AIConnect proporciona una plataforma de inteligencia artificial que ofrece diversos servicios como análisis de datos, 
                automatización de procesos, reconocimiento de imágenes, procesamiento de lenguaje natural, entre otros. Estos servicios 
                están diseñados para mejorar la eficiencia operativa y la toma de decisiones en entornos empresariales.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Registro y Cuentas de Usuario</h2>
              <p className="mb-4">
                Para acceder a ciertos servicios de AIConnect, es necesario registrarse y crear una cuenta. Usted es responsable de 
                mantener la confidencialidad de su información de cuenta y contraseña, así como de restringir el acceso a su computadora. 
                Acepta asumir la responsabilidad de todas las actividades que ocurran bajo su cuenta o contraseña.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todo el contenido incluido en la plataforma AIConnect, como texto, gráficos, logotipos, iconos, imágenes, clips de audio, 
                descargas digitales y compilaciones de datos, es propiedad de AIConnect o sus proveedores de contenido y está protegido 
                por las leyes internacionales de derechos de autor. La compilación de todo el contenido en esta plataforma es propiedad 
                exclusiva de AIConnect y está protegida por las leyes internacionales de derechos de autor.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                AIConnect no será responsable de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo, incluidos, 
                entre otros, daños por pérdida de beneficios, buena voluntad, uso, datos u otras pérdidas intangibles que resulten de: 
                (i) el uso o la imposibilidad de usar el servicio; (ii) el costo de adquisición de bienes y servicios sustitutos resultantes 
                de cualquier bien, dato, información o servicio comprado u obtenido, o mensajes recibidos o transacciones realizadas a través 
                del servicio; (iii) acceso no autorizado o alteración de sus transmisiones o datos; (iv) declaraciones o conducta de cualquier 
                tercero en el servicio; o (v) cualquier otro asunto relacionado con el servicio.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Modificaciones del Servicio</h2>
              <p className="mb-4">
                AIConnect se reserva el derecho, en cualquier momento y de vez en cuando, de modificar o descontinuar, temporal o permanentemente, 
                el servicio (o cualquier parte del mismo) con o sin previo aviso. Usted acepta que AIConnect no será responsable ante usted ni ante 
                ningún tercero por cualquier modificación, suspensión o interrupción del servicio.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Ley Aplicable</h2>
              <p className="mb-4">
                Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia, sin dar efecto a ningún principio de 
                conflictos de leyes. Cualquier disputa que surja en relación con estos términos y condiciones estará sujeta a la jurisdicción exclusiva 
                de los tribunales de Colombia.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contacto</h2>
              <p className="mb-4">
                Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos en:
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

export default TermsAndConditionsPage;