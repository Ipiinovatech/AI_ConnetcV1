import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "¿Qué servicios ofrece AI Connect?",
      answer: "AI Connect se especializa en soluciones de inteligencia artificial personalizadas, modelos de aprendizaje automático y análisis de datos para mejorar las capacidades tecnológicas y la eficiencia de las empresas."
    },
    {
      question: "¿Cómo puede AI Connect ayudarme a mejorar mis procesos de negocio?",
      answer: "AI Connect puede automatizar tareas repetitivas, analizar grandes volúmenes de datos para obtener insights valiosos, optimizar la toma de decisiones y mejorar la experiencia del cliente a través de soluciones personalizadas de IA."
    },
    {
      question: "¿El servicio de AI Connect está disponible fuera de Colombia?",
      answer: "Sí, AI Connect ofrece sus servicios a nivel internacional. Contamos con clientes en diversos países y nuestras soluciones pueden implementarse de forma remota en cualquier parte del mundo."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm uppercase font-medium text-[#38bdf8] mb-2">PREGUNTAS FRECUENTES</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas<br />
                frecuentes sobre<br />
                <span className="inline-flex items-center">
                  <span className="bg-[#38bdf8] text-white rounded-full w-12 h-12 flex items-center justify-center mr-2">AI</span>
                  Connect
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-medium text-[#0066cc]">{faq.question}</h3>
                    <span className="text-[#0066cc]">
                      {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </span>
                  </button>
                  
                  {openFaq === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;