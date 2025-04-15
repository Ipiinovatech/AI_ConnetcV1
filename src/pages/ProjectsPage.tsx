import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Video } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import ProductDetailModal from '../components/ProductDetailModal';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const ProjectsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedProduct && location.state?.openModal) {
      const productData = products.find(p => p.name === location.state.selectedProduct.nombre);
      if (productData) {
        setSelectedProduct(productData);
        setIsModalOpen(true);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const products = [
    {
      id: 1,
      name: "ProcessAI",
      category: "ai-connect",
      image: "/Public/images/ProcessAI.jpeg",
      summary: {
        es: "Sistema avanzado de automatización inteligente de procesos empresariales que optimiza operaciones y reduce costos.",
        en: "Advanced intelligent business process automation system that optimizes operations and reduces costs."
      },
      description: {
        es: "ProcessAI es una plataforma avanzada que automatiza tareas, optimiza procesos y facilita la creación de productos y servicios mediante Inteligencia Artificial de última generación. Al integrar soluciones tecnológicas innovadoras, permite a las empresas reducir costos, mejorar la productividad y facilitar su adaptación a los constantes cambios del mercado. Desde la digitalización de operaciones hasta la optimización de flujos de trabajo, ProcessAI transforma la manera en que las empresas operan, eliminando ineficiencias y potenciando la competitividad. Su capacidad de diseñar soluciones a medida garantiza que cada negocio se mantenga a la vanguardia de la transformación digital, asegurando no solo una mayor rentabilidad, sino también un crecimiento sostenible en la era 4.0.",
        en: "ProcessAI is an advanced platform that automates tasks, optimizes processes, and facilitates the creation of products and services through cutting-edge Artificial Intelligence. By integrating innovative technological solutions, it enables companies to reduce costs, improve productivity, and facilitate their adaptation to constant market changes. From digitizing operations to optimizing workflows, ProcessAI transforms the way companies operate, eliminating inefficiencies and enhancing competitiveness. Its ability to design tailored solutions ensures that each business stays at the forefront of digital transformation, ensuring not only greater profitability but also sustainable growth in the 4.0 era."
      }
    },
    {
      id: 2,
      name: "MulticonnectAI",
      category: "ai-connect",
      image: "/Public/images/MulticonnectAI.jpeg",
      summary: {
        es: "Plataforma integral de conectividad múltiple que integra canales de comunicación con inteligencia artificial avanzada.",
        en: "Comprehensive multi-connectivity platform that integrates communication channels with advanced artificial intelligence."
      },
      description: {
        es: "Nuestros Asistentes de Inteligencia Artificial transforman la manera en que las empresas se comunican con sus clientes, ofreciendo una interacción fluida, personalizada y eficiente a través de múltiples canales como llamadas de voz, chat en tiempo real y redes sociales. Gracias a su soporte multilingüe, garantizan una experiencia inclusiva y adaptada a audiencias globales. Diseñados para gestionar tareas clave como servicio al cliente, agendamiento, soporte técnico y encuestas, estos asistentes se integran perfectamente con los sistemas empresariales, proporcionando respuestas rápidas y precisas con un tono natural y humano. Su capacidad de adaptabilidad y precisión les permite abordar tanto consultas simples como solicitudes complejas, optimizando procesos y fortaleciendo la relación con los clientes.",
        en: "Our Artificial Intelligence Assistants transform the way companies communicate with their customers, offering fluid, personalized, and efficient interaction across multiple channels such as voice calls, real-time chat, and social media. Thanks to their multilingual support, they guarantee an inclusive experience adapted to global audiences. Designed to manage key tasks such as customer service, scheduling, technical support, and surveys, these assistants integrate perfectly with business systems, providing quick and accurate responses with a natural and human tone. Their adaptability and precision allow them to handle both simple queries and complex requests, optimizing processes and strengthening customer relationships."
      }
    },
    {
      id: 3,
      name: "SellAI",
      category: "ai-connect",
      image: "/Public/images/SellAI.jpeg",
      summary: {
        es: "Sistema de ventas potenciado por IA para optimizar procesos comerciales y aumentar conversiones.",
        en: "AI-powered sales system to optimize business processes and increase conversions."
      },
      description: {
        es: "Nuestros Agentes de Ventas con Inteligencia Artificial están diseñados para transformar sus estrategias comerciales mediante una experiencia de venta personalizada, efectiva y escalable en Múltiples canales, como voz, chat y redes sociales, con soporte multilingüe. Gracias a un enfoque innovador y tecnológico, estos agentes no solo asesoran a los clientes desde el primer contacto hasta la compra o reserva de servicios, sino que también se adaptan a la identidad de su empresa, asegurando una representación auténtica y profesional. Equipados con IA avanzada, utilizan inteligencia artificial, web scraping y análisis de datos en tiempo real para identificar oportunidades y optimizar cada interacción, aumentando la conversión de ventas.",
        en: "Our AI Sales Agents are designed to transform your commercial strategies through a personalized, effective, and scalable sales experience across multiple channels, such as voice, chat, and social media, with multilingual support. Thanks to an innovative and technological approach, these agents not only advise customers from first contact to purchase or service booking but also adapt to your company's identity, ensuring authentic and professional representation. Equipped with advanced AI, they use artificial intelligence, web scraping, and real-time data analysis to identify opportunities and optimize each interaction, increasing sales conversion."
      }
    },
    {
      id: 4,
      name: "AI Vision",
      category: "ai-connect",
      image: "/Public/images/AI Vision.jpeg",
      summary: {
        es: "Sistema de visión artificial que analiza imágenes y videos para extraer información valiosa.",
        en: "Computer vision system that analyzes images and videos to extract valuable information."
      },
      description: {
        es: "Nuestro servicio de Visión Artificial convierte datos visuales en información procesable, permitiendo a las empresas optimizar procesos, reducir errores y mejorar la eficiencia operativa. Mediante la automatización avanzada, agiliza tareas como etiquetado, clasificación y conteo, liberando recursos para actividades estratégicas. Además, fortalece el control de calidad, optimiza la gestión de inventarios y minimiza el desperdicio en sectores como retail, fabricación, salud y seguridad. Su capacidad de monitoreo inteligente, con reconocimiento facial y validación en tiempo real, garantiza entornos más seguros y controlados.",
        en: "Our Computer Vision service converts visual data into actionable information, enabling businesses to optimize processes, reduce errors, and improve operational efficiency. Through advanced automation, it streamlines tasks such as labeling, classification, and counting, freeing up resources for strategic activities. It also strengthens quality control, optimizes inventory management, and minimizes waste in sectors such as retail, manufacturing, healthcare, and security. Its intelligent monitoring capabilities, with facial recognition and real-time validation, ensure safer and more controlled environments."
      }
    },
    {
      id: 5,
      name: "FaceIA",
      category: "ai-connect",
      image: "/Public/images/FaceIA.jpeg",
      summary: {
        es: "Sistema avanzado de reconocimiento facial con detección de vida para verificación de identidad segura.",
        en: "Advanced facial recognition system with liveness detection for secure identity verification."
      },
      description: {
        es: "FaceIA redefine la verificación de identidad digital al combinar precisión, velocidad y seguridad mediante reconocimiento facial avanzado con tecnología de detección de vida (liveness). Este sistema no solo identifica rostros con alta exactitud, sino que previene fraudes al garantizar que el usuario es una persona real, evitando suplantaciones con fotos, videos o modelos 3D. Su autenticación segura protege contra intentos de fraude, mientras que su validación ultrarrápida permite operaciones eficientes en entornos de alta demanda.",
        en: "FaceIA redefines digital identity verification by combining precision, speed, and security through advanced facial recognition with liveness detection technology. This system not only identifies faces with high accuracy but also prevents fraud by ensuring that the user is a real person, preventing impersonation with photos, videos, or 3D models. Its secure authentication protects against fraud attempts, while its ultra-fast validation enables efficient operations in high-demand environments."
      }
    },
    {
      id: 6,
      name: "MultimediaAI",
      category: "ai-connect",
      image: "/Public/images/MultimediAI.jpeg",
      summary: {
        es: "Plataforma de creación y edición de contenido multimedia con IA para resultados profesionales.",
        en: "AI-powered multimedia content creation and editing platform for professional results."
      },
      description: {
        es: "MultimediaAI es el servicio de generación multimodal que revoluciona la creación de contenidos, permitiendo a las empresas optimizar y sofisticar su producción mediante inteligencia artificial. Desde texto a voz, imágenes y vídeos hasta música y audio profesional, esta innovadora plataforma abre nuevas posibilidades para potenciar productos y servicios. MultimediaAI ofrece imágenes personalizadas, alineadas con la identidad de marca; videos de alto impacto para marketing y capacitación; clonación de voces auténticas, mejorando la conexión emocional con los clientes.",
        en: "MultimediaAI is the multimodal generation service that revolutionizes content creation, allowing companies to optimize and sophisticate their production through artificial intelligence. From text to voice, images and videos to music and professional audio, this innovative platform opens new possibilities to enhance products and services. MultimediaAI offers customized images, aligned with brand identity; high-impact videos for marketing and training; authentic voice cloning, improving emotional connection with customers."
      }
    },
    {
      id: 7,
      name: "AvAI",
      category: "varios",
      image: "/Public/images/AvAI.jpeg",
      summary: {
        es: "Avatares inteligentes para interacciones digitales más naturales y personalizadas.",
        en: "Intelligent avatars for more natural and personalized digital interactions."
      },
      description: {
        es: "AvAI es la solución definitiva en avatares con inteligencia artificial, diseñada para transformar la interacción entre empresas y sus clientes, empleados y audiencias. Gracias a su combinación de realismo, adaptabilidad y tecnología avanzada, AvAI crea experiencias digitales inmersivas y personalizadas, elevando la comunicación a un nivel superior. Con aplicaciones en soporte al cliente, ventas y capacitación, AvAI optimiza la atención personalizada y fortalece la conexión con los usuarios.",
        en: "AvAI is the ultimate solution in artificial intelligence avatars, designed to transform interaction between companies and their customers, employees, and audiences. Thanks to its combination of realism, adaptability, and advanced technology, AvAI creates immersive and personalized digital experiences, elevating communication to a higher level. With applications in customer support, sales, and training, AvAI optimizes personalized attention and strengthens connection with users."
      }
    },
    {
      id: 8,
      name: "CyberAI",
      category: "varios",
      image: "/Public/images/CyberAI.jpeg",
      summary: {
        es: "Protección cibernética avanzada con IA para detectar y prevenir amenazas en tiempo real.",
        en: "Advanced AI-powered cyber protection to detect and prevent threats in real-time."
      },
      description: {
        es: "CyberAI es la solución definitiva en ciberseguridad impulsada por inteligencia artificial, diseñada para detectar, prevenir y responder a ciberataques en tiempo real, protegiendo los activos más valiosos de su empresa. Con una detección proactiva de amenazas, analiza continuamente redes y sistemas para identificar actividades sospechosas antes de que representen un riesgo. Su monitoreo 24/7 garantiza una vigilancia ininterrumpida, mientras que el análisis predictivo permite anticiparse a posibles vulnerabilidades con estrategias preventivas.",
        en: "CyberAI is the ultimate solution in artificial intelligence-powered cybersecurity, designed to detect, prevent, and respond to cyberattacks in real-time, protecting your company's most valuable assets. With proactive threat detection, it continuously analyzes networks and systems to identify suspicious activities before they pose a risk. Its 24/7 monitoring ensures uninterrupted surveillance, while predictive analysis allows anticipating potential vulnerabilities with preventive strategies."
      }
    },
    {
      id: 9,
      name: "TrueSing",
      category: "varios",
      image: "/Public/images/TrueSing.jpeg",
      summary: {
        es: "Sistema de firmas digitales con IA para autenticación segura de documentos.",
        en: "AI-powered digital signature system for secure document authentication."
      },
      description: {
        es: "TrueSing es la solución definitiva para proteger la autenticidad y propiedad de documentos, imágenes y videos mediante Firmas Digitales impulsadas por Inteligencia Artificial y Embeddings. Diseñado para creadores, empresas y profesionales, TrueSing garantiza que cada contenido firmado sea único, verificable y seguro frente a alteraciones o suplantaciones. Su tecnología de identificación multifactorial utiliza datos únicos como rostro, voz, escritura y datos personales para generar un identificador exclusivo.",
        en: "TrueSing is the ultimate solution for protecting the authenticity and ownership of documents, images, and videos through Digital Signatures powered by Artificial Intelligence and Embeddings. Designed for creators, businesses, and professionals, TrueSing ensures that each signed content is unique, verifiable, and secure against alterations or impersonations. Its multifactorial identification technology uses unique data such as face, voice, writing, and personal data to generate an exclusive identifier."
      }
    },
    {
      id: 10,
      name: "InfluAI",
      category: "varios",
      image: "/Public/images/InfluAI.jpeg",
      summary: {
        es: "Gestión y análisis de campañas de influencers con IA para optimizar resultados.",
        en: "AI-powered influencer campaign management and analysis to optimize results."
      },
      description: {
        es: "InfluAI es la solución revolucionaria para transformar su estrategia digital con influencers virtuales impulsados por Inteligencia Artificial, diseñada para conectar marcas con audiencias globales de manera estratégica, innovadora y efectiva. Con una presencia visual única, InfluAI crea personajes personalizados que reflejan la identidad de su empresa, destacándose en redes sociales como Instagram, TikTok y YouTube. Gracias a su capacidad de generar voz y video realistas mediante IA, estos influencers interactúan de manera dinámica y continua.",
        en: "InfluAI is the revolutionary solution to transform your digital strategy with AI-powered virtual influencers, designed to connect brands with global audiences in a strategic, innovative, and effective way. With a unique visual presence, InfluAI creates customized characters that reflect your company's identity, standing out on social networks like Instagram, TikTok, and YouTube. Thanks to its ability to generate realistic voice and video through AI, these influencers interact dynamically and continuously."
      }
    },
    {
      id: 11,
      name: "db-ai",
      category: "varios",
      image: "/Public/images/db-ai.jpeg",
      summary: {
        es: "Gestión inteligente de bases de datos para optimizar rendimiento y eficiencia.",
        en: "Intelligent database management to optimize performance and efficiency."
      },
      description: {
        es: "db-ai revoluciona la gestión empresarial al combinar Bases de Datos Vector (RAG) con Modelos de Lenguaje (LLMs), permitiendo consultas en lenguaje natural para acceder, analizar y visualizar datos textuales, métricos y visuales de manera rápida, segura y eficiente. Con capacidades avanzadas como análisis predictivo, monitoreo en tiempo real y automatización de informes, db-ai optimiza la toma de decisiones estratégicas, agiliza la gestión financiera, el control de inventarios y el análisis de ventas.",
        en: "db-ai revolutionizes business management by combining Vector Databases (RAG) with Language Models (LLMs), enabling natural language queries to access, analyze, and visualize textual, metric, and visual data quickly, securely, and efficiently. With advanced capabilities such as predictive analytics, real-time monitoring, and report automation, db-ai optimizes strategic decision-making, streamlines financial management, inventory control, and sales analysis."
      }
    },
    {
      id: 12,
      name: "TestQAI",
      category: "varios",
      image: "/Public/images/TestQAI.jpeg",
      summary: {
        es: "Sistema automatizado de pruebas y control de calidad para software con IA.",
        en: "Automated AI-powered testing and quality control system for software."
      },
      description: {
        es: "TestQAAI revoluciona el aseguramiento de calidad del software con agentes de prueba impulsados por inteligencia artificial, automatizando el ciclo completo de pruebas en aplicaciones web y móviles con velocidad, precisión y eficiencia. Su capacidad para diseñar, ejecutar y analizar pruebas sin intervención manual optimiza el desarrollo, asegurando compatibilidad multiplataforma, detección avanzada de errores y generación de informes detallados. Integrado con DevOps, TestQAAI acelera los ciclos de desarrollo y reduce costos.",
        en: "TestQAAI revolutionizes software quality assurance with artificial intelligence-powered test agents, automating the complete testing cycle in web and mobile applications with speed, precision, and efficiency. Its ability to design, execute, and analyze tests without manual intervention optimizes development, ensuring cross-platform compatibility, advanced error detection, and detailed report generation. Integrated with DevOps, TestQAAI accelerates development cycles and reduces costs."
      }
    },
    {
      id: 13,
      name: "AI Trainer",
      category: "varios",
      image: "/Public/images/AI Trainer.jpeg",
      summary: {
        es: "Plataforma de entrenamiento personalizado con IA para desarrollo profesional.",
        en: "AI-powered personalized training platform for professional development."
      },
      description: {
        es: "AITrainer es la solución definitiva para capacitar a empresas en la adopción y uso estratégico de la inteligencia artificial, brindando formación adaptada a distintos niveles, desde conceptos básicos hasta especializaciones avanzadas. A través de una metodología práctica y enfocada en desafíos reales, AITrainer no solo enseña teoría, sino que prepara a su equipo para aplicar la IA en sus operaciones diarias, impulsando la innovación y la competitividad.",
        en: "AITrainer is the ultimate solution for training companies in the adoption and strategic use of artificial intelligence, providing training adapted to different levels, from basic concepts to advanced specializations. Through a practical methodology focused on real challenges, AITrainer not only teaches theory but prepares your team to apply AI in their daily operations, driving innovation and competitiveness."
      }
    },
    {
      id: 14,
      name: "VIRTUAL SMART VIDEO",
      category: "varios",
      image: "/Public/images/VIRTUAL SMART VIDEO.png",
      summary: {
        es: "Análisis inteligente de video para detección de patrones y eventos.",
        en: "Intelligent video analysis for pattern and event detection."
      },
      description: {
        es: "Virtual Smart Video es la plataforma innovadora que transforma entrevistas y capacitaciones mediante inteligencia artificial, optimizando procesos y reduciendo costos operativos. Con capacidades avanzadas como el reconocimiento de emociones y el perfil biofísico, esta herramienta disponible 24 horas al día, 7 días a la semana asegura un análisis en tiempo real, proporcionando insights valiosos. Además, su almacenamiento seguro de información garantiza la confidencialidad.",
        en: "Virtual Smart Video is the innovative platform that transforms interviews and training through artificial intelligence, optimizing processes and reducing operational costs. With advanced capabilities such as emotion recognition and biophysical profiling, this 24/7 tool ensures real-time analysis, providing valuable insights. Plus, its secure data storage guarantees confidentiality."
      }
    },
    {
      id: 15,
      name: "VIRTUAL QUALITY FIELD",
      category: "varios",
      image: "/Public/images/VIRTUAL QUALITY FIELD.png",
      summary: {
        es: "Sistema de control de calidad en campo con IA para optimización de procesos.",
        en: "AI-powered field quality control system for process optimization."
      },
      description: {
        es: "VIRTUAL QUALITY FIELD es una solución innovadora que revoluciona el control de calidad en campo mediante la integración de inteligencia artificial avanzada. Esta plataforma permite realizar inspecciones y auditorías de calidad en tiempo real, utilizando tecnologías como realidad aumentada y procesamiento de imágenes para identificar defectos y desviaciones de manera precisa y eficiente. Con capacidades de análisis predictivo y aprendizaje continuo, el sistema mejora constantemente sus criterios de evaluación.",
        en: "VIRTUAL QUALITY FIELD is an innovative solution that revolutionizes field quality control through the integration of advanced artificial intelligence. This platform enables real-time quality inspections and audits, using technologies such as augmented reality and image processing to identify defects and deviations accurately and efficiently. With predictive analysis and continuous learning capabilities, the system constantly improves its evaluation criteria."
      }
    }
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFAQsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faqs');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#13477a] text-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/public/images/AI CONNECT FINAL.png"
                  alt="AI Connect"
                  className="h-16 md:h-20 object-contain transition-all duration-300"
                  style={{ filter: 'brightness(1.05)' }}
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <Link to="/productos" className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                AI Connect
              </Link>
              <span className="text-sm font-medium text-gray-200">
                {language === 'es' ? 'Productos' : 'Products'}
              </span>
              <a 
                href="#faqs"
                onClick={handleFAQsClick}
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors cursor-pointer"
              >
                FAQs
              </a>
              <LanguageToggle />
            </div>
            
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              <span>{language === 'es' ? 'Volver al inicio' : 'Back to home'}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#13477a] mb-4">
              {language === 'es' ? 'Nuestros Productos' : 'Our Products'}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Soluciones innovadoras impulsadas por IA para transformar su negocio'
                : 'Innovative AI-powered solutions to transform your business'}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image */}
                <div className="relative h-48 w-full">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/400x300?text=Image+not+available';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-white/10 text-white p-2 rounded-full backdrop-blur-sm">
                    <Video size={16} />
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6 bg-gradient-to-br from-[#13477a] to-[#0d2d4d] relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow-sm">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-100 text-sm mb-4 leading-relaxed tracking-wide">
                      {product.summary[language as keyof typeof product.summary]}
                    </p>
                    
                    <button 
                      className="inline-flex items-center text-[#38bdf8] hover:text-[#60ccff] text-sm font-medium transition-colors bg-white/5 px-4 py-2 rounded-full"
                    >
                      {language === 'es' ? 'Saber más' : 'Learn more'} <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />

      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default ProjectsPage;