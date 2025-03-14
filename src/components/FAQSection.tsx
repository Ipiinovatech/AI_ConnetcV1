import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { language } = useLanguage();
  
  const faqs = {
    es: [
      {
        question: "¿Qué servicios ofrece",
        image: "/Public/Images/AI CONNECT AZUL.png",
        answer: "Se especializa en soluciones de inteligencia artificial personalizadas, modelos de aprendizaje automático y análisis de datos para mejorar las capacidades tecnológicas y la eficiencia de las empresas."
      },
      {
        question: "¿Cómo puede",
        image: "/Public/Images/AI CONNECT AZUL.png",
        answer: "Puede automatizar tareas repetitivas, analizar grandes volúmenes de datos para obtener insights valiosos, optimizar la toma de decisiones y mejorar la experiencia del cliente a través de soluciones personalizadas de IA.",
        suffix: "ayudarme a mejorar mis procesos de negocio?"
      },
      {
        question: "¿El servicio de",
        image: "/Public/Images/AI CONNECT AZUL.png",
        answer: "Sí, ofrece sus servicios a nivel internacional. Contamos con clientes en diversos países y nuestras soluciones pueden implementarse de forma remota en cualquier parte del mundo.",
        suffix: "está disponible fuera de Colombia?"
      }
    ],
    en: [
      {
        question: "What services does",
        image: "/Public/Images/AI CONNECT AZUL.png",
        answer: "Specializes in customized artificial intelligence solutions, machine learning models, and data analysis to enhance companies' technological capabilities and efficiency."
      },
      {
        question: "How can",
        image: "/Public/Images/AI CONNECT AZUL.png",
        answer: "It can automate repetitive tasks, analyze large volumes of data to obtain valuable insights, optimize decision-making, and improve customer experience through personalized AI solutions.",
        suffix: "help improve my business processes?"
      },
      {
        question: "Is",
        image: "/Public/Images/AI CONNECT AZUL.png",
        answer: "Yes, services are available internationally. We have clients in various countries, and our solutions can be implemented remotely anywhere in the world.",
        suffix: "service available outside Colombia?"
      }
    ]
  };

  const currentFaqs = language === 'es' ? faqs.es : faqs.en;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm uppercase font-medium text-[#38bdf8] mb-2">
                {language === 'es' ? 'PREGUNTAS FRECUENTES' : 'FREQUENTLY ASKED QUESTIONS'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'es' ? (
                  <>
                    Preguntas<br />
                    frecuentes sobre<br />
                  </>
                ) : (
                  <>
                    Frequently Asked<br />
                    Questions about<br />
                  </>
                )}
                <img 
                  src="/Public/Images/AI CONNECT AZUL.png" 
                  alt="AI Connect"
                  className="h-32 object-contain mt-4"
                />
              </h2>
            </div>

            <div className="space-y-4">
              {currentFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-base md:text-lg font-medium text-[#0066cc] flex items-center flex-wrap">
                      {faq.question}{' '}
                      <img 
                        src={faq.image} 
                        alt="AI Connect"
                        className="h-8 md:h-12 object-contain mx-2 inline"
                      />
                      {faq.suffix}
                    </h3>
                    <span className="text-[#0066cc] flex-shrink-0 ml-4">
                      {openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </span>
                  </button>
                  
                  {openFaq === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{faq.answer}</p>
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