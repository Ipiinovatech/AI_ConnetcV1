import React, { useState, useEffect, useRef } from 'react';
import { X, RefreshCw, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from 'react-router-dom';

interface FormData {
  nombre: string;
  correo: string;
  empresa: string;
  telefono: string;
  captcha: string;
}

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    empresa: '',
    telefono: '',
    captcha: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [captchaError, setCaptchaError] = useState('');
  const captchaRef = useRef<HTMLDivElement>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');
  
  // Cargar CAPTCHA cuando el modal se abre
  useEffect(() => {
    if (isOpen && captchaRef.current) {
      // Pequeño retraso para asegurar que el DOM esté listo
      const timer = setTimeout(() => {
        try {
          loadCaptchaEnginge(6);
        } catch (error) {
          console.error("Error al cargar CAPTCHA:", error);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'El nombre de la empresa es requerido';
    }
    
    // Verificar que se hayan aceptado los términos y la política de privacidad
    if (!termsAccepted || !privacyAccepted) {
      setTermsError('Debes aceptar los Términos y Condiciones y la Política de Privacidad para continuar.');
      return false;
    }
    
    if (!validateCaptcha(formData.captcha)) {
      newErrors.captcha = 'El código CAPTCHA no es correcto';
      setCaptchaError('El código CAPTCHA no es correcto');
      return false;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      // Redirigir a la página de bienvenida al demo
      navigate('/demo-bienvenido');
      // Cerrar el modal después de redirigir
      onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        {/* Encabezado */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-blue-700 font-bold text-sm">AI</span>
            </div>
            <h3 className="font-semibold">Solicitar demostración</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6">
          <p className="text-gray-700 mb-6">
            Para ver el demo en VIVO de los productos, aprueba el CAPTCHA y regístrate:
          </p>
          
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
              <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.empresa ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
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
            
            {/* CAPTCHA */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verificación CAPTCHA
              </label>
              <div ref={captchaRef} className="bg-gray-100 p-3 rounded-lg flex justify-center mb-3">
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
                <p className="text-red-500 text-sm mt-1">{captchaError}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors mt-6"
            >
              Ver demostración
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoRequestModal;