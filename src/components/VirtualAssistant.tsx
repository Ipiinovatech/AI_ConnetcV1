import React, { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Send, RefreshCw, ExternalLink } from 'lucide-react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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
  const { language } = useLanguage();

  useEffect(() => {
    if (isOpen && captchaRef.current) {
      const timer = setTimeout(() => {
        try {
          loadCaptchaEnginge(6);
          setCaptchaLoaded(true);
        } catch (error) {
          console.error("Error loading CAPTCHA:", error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
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
    
    if (checked) {
      setTermsError('');
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = language === 'es' ? 'El nombre es requerido' : 'Name is required';
    }
    
    if (!formData.correo.trim()) {
      newErrors.correo = language === 'es' ? 'El correo es requerido' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = language === 'es' ? 'El correo no es válido' : 'Invalid email format';
    }
    
    if (!formData.pais.trim()) {
      newErrors.pais = language === 'es' ? 'El país es requerido' : 'Country is required';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = language === 'es' ? 'El mensaje es requerido' : 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setStep('success');
    }
  };

  const handleCaptchaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted || !privacyAccepted) {
      setTermsError(language === 'es' 
        ? 'Debes aceptar los Términos y Condiciones y la Política de Privacidad para continuar.'
        : 'You must accept the Terms and Conditions and Privacy Policy to continue.');
      return;
    }
    
    if (validateCaptcha(formData.captcha)) {
      setCaptchaError('');
      setStep('form');
    } else {
      setCaptchaError(language === 'es' 
        ? 'El código CAPTCHA no es correcto'
        : 'Invalid CAPTCHA code');
    }
  };

  const refreshCaptcha = () => {
    if (captchaRef.current) {
      try {
        loadCaptchaEnginge(6);
        setFormData(prev => ({ ...prev, captcha: '' }));
        setCaptchaError('');
      } catch (error) {
        console.error("Error refreshing CAPTCHA:", error);
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
    
    if (isOpen && captchaRef.current) {
      try {
        setTimeout(() => {
          loadCaptchaEnginge(6);
        }, 100);
      } catch (error) {
        console.error("Error resetting CAPTCHA:", error);
      }
    }
  };

  const toggleAssistant = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen) {
      resetAssistant();
    }
  };

  return (
    <>
      {/* Floating Button - Centered on Mobile */}
      <button
        onClick={toggleAssistant}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full py-2 px-4 shadow-lg z-50 transition-all duration-300 hover:shadow-xl active:scale-95 md:bottom-6 md:left-auto md:right-6 md:transform-none flex items-center space-x-2"
        aria-label={language === 'es' ? 'Abrir asistente virtual' : 'Open virtual assistant'}
      >
        <MessageSquare size={20} className="text-white" />
        <span className="text-sm font-medium md:hidden">
          {language === 'es' ? 'Asistente Virtual' : 'Virtual Assistant'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-20 md:bottom-24 md:right-6 md:left-auto w-auto max-w-sm bg-white rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-300 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white/90 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <span className="text-blue-600 font-bold text-sm">AI</span>
              </div>
              <h3 className="font-medium text-sm">
                {language === 'es' ? 'Asistente Virtual' : 'Virtual Assistant'}
              </h3>
            </div>
            <button 
              onClick={toggleAssistant}
              className="text-white/80 hover:text-white transition-colors"
              aria-label={language === 'es' ? 'Cerrar asistente' : 'Close assistant'}
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 max-h-[70vh] overflow-y-auto">
            {step === 'captcha' && (
              <div className="space-y-4">
                <p className="text-gray-700 text-sm">
                  {language === 'es'
                    ? 'Para continuar, por favor complete la verificación CAPTCHA:'
                    : 'To continue, please complete the CAPTCHA verification:'}
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
                      aria-label={language === 'es' ? 'Refrescar CAPTCHA' : 'Refresh CAPTCHA'}
                    >
                      <RefreshCw size={18} />
                    </button>
                    
                    <input
                      type="text"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      placeholder={language === 'es' ? 'Ingrese el código' : 'Enter the code'}
                      className={`flex-1 px-3 py-2 border ${captchaError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>
                  
                  {captchaError && (
                    <p className="text-red-500 text-sm">{captchaError}</p>
                  )}
                  
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
                          {language === 'es' 
                            ? 'He leído y acepto los '
                            : 'I have read and accept the '}
                          <Link 
                            to="/terminos-y-condiciones" 
                            target="_blank" 
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                          >
                            {language === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
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
                          {language === 'es'
                            ? 'He leído y acepto la '
                            : 'I have read and accept the '}
                          <Link 
                            to="/politica-de-privacidad" 
                            target="_blank" 
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                          >
                            {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                  >
                    {language === 'es' ? 'Verificar' : 'Verify'}
                  </button>
                </form>
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'es' ? 'Nombre completo' : 'Full name'}
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
                    {language === 'es' ? 'Correo electrónico' : 'Email'}
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
                    {language === 'es' ? 'País' : 'Country'}
                  </label>
                  <select
                    id="pais"
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.pais ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">{language === 'es' ? 'Seleccione un país' : 'Select a country'}</option>
                    <option value="Colombia">Colombia</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Perú">Perú</option>
                    <option value="España">España</option>
                    <option value="Estados Unidos">United States</option>
                    <option value="Otro">{language === 'es' ? 'Otro' : 'Other'}</option>
                  </select>
                  {errors.pais && <p className="text-red-500 text-sm mt-1">{errors.pais}</p>}
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    {language === 'es' ? 'Mensaje' : 'Message'}
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center text-sm"
                >
                  <Send size={18} className="mr-2" />
                  {language === 'es' ? 'Enviar mensaje' : 'Send message'}
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
                <h3 className="text-xl font-semibold text-gray-800">
                  {language === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'es'
                    ? `Gracias por contactarnos, ${formData.nombre}. Nos pondremos en contacto contigo a la brevedad posible.`
                    : `Thank you for contacting us, ${formData.nombre}. We will get back to you as soon as possible.`}
                </p>
                <button
                  onClick={resetAssistant}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                >
                  {language === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
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