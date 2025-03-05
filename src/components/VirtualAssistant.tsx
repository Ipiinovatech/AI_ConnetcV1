import React, { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Send, RefreshCw, ExternalLink } from 'lucide-react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';

interface FormData {
  nombre: string;
  correo: string;
  pais: string;
  mensaje: string;
  captcha: string;
}

const VirtualAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    pais: '',
    mensaje: '',
    captcha: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [step, setStep] = useState<'captcha' | 'form' | 'success'>('captcha');
  const [captchaError, setCaptchaError] = useState('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const captchaRef = useRef<HTMLDivElement>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');

  // Cargar CAPTCHA solo cuando el componente está abierto y montado
  useEffect(() => {
    if (isOpen && captchaRef.current) {
      // Pequeño retraso para asegurar que el DOM esté listo
      const timer = setTimeout(() => {
        try {
          loadCaptchaEnginge(6);
          setCaptchaLoaded(true);
        } catch (error) {
          console.error("Error al cargar CAPTCHA:", error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'terms') {
      setTermsAccepted(checked);
    } else if (name === 'privacy') {
      setPrivacyAccepted(checked);
    }
    
    // Limpiar error de términos si alguno de los checkboxes es marcado
    if (checked) {
      setTermsError('');
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }
    
    if (!formData.pais.trim()) {
      newErrors.pais = 'El país es requerido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      setStep('success');
    }
  };

  const handleCaptchaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar que se hayan aceptado los términos y la política de privacidad
    if (!termsAccepted || !privacyAccepted) {
      setTermsError('Debes aceptar los Términos y Condiciones y la Política de Privacidad para continuar.');
      return;
    }
    
    if (validateCaptcha(formData.captcha)) {
      setCaptchaError('');
      setStep('form');
    } else {
      setCaptchaError('El código CAPTCHA no es correcto');
    }
  };

  const refreshCaptcha = () => {
    if (captchaRef.current) {
      try {
        loadCaptchaEnginge(6);
        setFormData(prev => ({ ...prev, captcha: '' }));
        setCaptchaError('');
      } catch (error) {
        console.error("Error al refrescar CAPTCHA:", error);
      }
    }
  };

  const resetAssistant = () => {
    setFormData({
      nombre: '',
      correo: '',
      pais: '',
      mensaje: '',
      captcha: ''
    });
    setErrors({});
    setCaptchaError('');
    setTermsError('');
    setTermsAccepted(false);
    setPrivacyAccepted(false);
    setStep('captcha');
    
    // Solo intentar cargar el CAPTCHA si el componente está abierto
    if (isOpen && captchaRef.current) {
      try {
        setTimeout(() => {
          loadCaptchaEnginge(6);
        }, 100);
      } catch (error) {
        console.error("Error al reiniciar CAPTCHA:", error);
      }
    }
  };

  const toggleAssistant = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    // Si estamos abriendo el asistente, reiniciamos el formulario
    if (newIsOpen) {
      setFormData({
        nombre: '',
        correo: '',
        pais: '',
        mensaje: '',
        captcha: ''
      });
      setErrors({});
      setCaptchaError('');
      setTermsError('');
      setTermsAccepted(false);
      setPrivacyAccepted(false);
      setStep('captcha');
      setCaptchaLoaded(false);
    }
  };

  return (
    <>
      {/* Botón flotante para abrir el asistente */}
      <button
        onClick={toggleAssistant}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 transform hover:scale-110"
        aria-label="Abrir asistente virtual"
      >
        <MessageSquare size={24} />
      </button>

      {/* Ventana del asistente virtual */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm bg-white rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-300 animate-fade-in">
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <span className="text-blue-700 font-bold text-sm">AI</span>
              </div>
              <h3 className="font-semibold">Asistente Virtual</h3>
            </div>
            <button 
              onClick={toggleAssistant}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Cerrar asistente"
            >
              <X size={20} />
            </button>
          </div>

          {/* Contenido */}
          <div className="p-4 max-h-[400px] overflow-y-auto">
            {step === 'captcha' && (
              <div className="space-y-4">
                <p className="text-gray-700">
                  Para continuar, por favor complete la verificación CAPTCHA:
                </p>
                
                <form onSubmit={handleCaptchaSubmit} className="space-y-4">
                  <div ref={captchaRef} className="bg-gray-100 p-3 rounded-lg flex justify-center">
                    <LoadCanvasTemplate />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      type="button" 
                      onClick={refreshCaptcha}
                      className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                      aria-label="Refrescar CAPTCHA"
                    >
                      <RefreshCw size={18} />
                    </button>
                    
                    <input
                      type="text"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      placeholder="Ingrese el código"
                      className={`flex-1 px-3 py-2 border ${captchaError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                  
                  {captchaError && (
                    <p className="text-red-500 text-sm">{captchaError}</p>
                  )}
                  
                  {/* Checkboxes para aceptar términos y política de privacidad */}
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-700">
                          He leído y acepto los{' '}
                          <Link 
                            to="/terminos-y-condiciones" 
                            target="_blank" 
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                          >
                            Términos y Condiciones
                            <ExternalLink size={12} className="ml-1" />
                          </Link>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          checked={privacyAccepted}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className="text-gray-700">
                          He leído y acepto la{' '}
                          <Link 
                            to="/politica-de-privacidad" 
                            target="_blank" 
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                          >
                            Política de Privacidad
                            <ExternalLink size={12} className="ml-1" />
                          </Link>
                        </label>
                      </div>
                    </div>
                    
                    {termsError && (
                      <p className="text-red-500 text-sm">{termsError}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Verificar
                  </button>
                </form>
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className={`w-full px-3 py-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                </div>
                
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.correo ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
                </div>
                
                <div>
                  <label htmlFor="pais" className="block text-sm font-medium text-gray-700 mb-1">
                    País
                  </label>
                  <select
                    id="pais"
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.pais ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Seleccione un país</option>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Perú">Perú</option>
                    <option value="España">España</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.pais && <p className="text-red-500 text-sm mt-1">{errors.pais}</p>}
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
                    rows={3}
                    className={`w-full px-3 py-2 border ${errors.mensaje ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  ></textarea>
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Enviar mensaje
                </button>
              </form>
            )}

            {step === 'success' && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">¡Mensaje enviado!</h3>
                <p className="text-gray-600">
                  Gracias por contactarnos, {formData.nombre}. Nos pondremos en contacto contigo a la brevedad posible.
                </p>
                <button
                  onClick={resetAssistant}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VirtualAssistant;