import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Video } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import ProductDetailModal from '../components/ProductDetailModal';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'ai-connect' | 'varios'>('todos');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showImage, setShowImage] = useState<number | null>(null);
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
        es: "Nuestros Asistentes de Inteligencia Artificial transforman la manera en que las empresas se comunican con sus clientes, ofreciendo una interacción fluida, personalizada y eficiente a través de múltiples canales como llamadas de voz, chat en tiempo real y redes sociales. Gracias a su soporte multilingüe, garantizan una experiencia inclusiva y adaptada a audiencias globales. Diseñados para gestionar tareas clave como servicio al cliente, agendamiento, soporte técnico y encuestas, estos asistentes se integran perfectamente con los sistemas empresariales, proporcionando respuestas rápidas y precisas con un tono natural y humano. Su capacidad de adaptabilidad y precisión les permite abordar tanto consultas simples como solicitudes complejas, optimizando procesos y fortaleciendo la relación con los clientes. Al implementar estos asistentes inteligentes, su empresa no solo mejora la eficiencia operativa, sino que también eleva la calidad de cada interacción, diferenciándose con soluciones innovadoras que impulsan el éxito en la era digital.",
        en: "Our Artificial Intelligence Assistants transform the way companies communicate with their customers, offering fluid, personalized, and efficient interaction across multiple channels such as voice calls, real-time chat, and social media. Thanks to their multilingual support, they guarantee an inclusive experience adapted to global audiences. Designed to manage key tasks such as customer service, scheduling, technical support, and surveys, these assistants integrate perfectly with business systems, providing quick and accurate responses with a natural and human tone. Their adaptability and precision allow them to handle both simple queries and complex requests, optimizing processes and strengthening customer relationships. By implementing these intelligent assistants, your company not only improves operational efficiency but also elevates the quality of each interaction, differentiating itself with innovative solutions that drive success in the digital era."
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
        es: "Nuestros Agentes de Ventas con Inteligencia Artificial están diseñados para transformar sus estrategias comerciales mediante una experiencia de venta personalizada, efectiva y escalable en Múltiples canales, como voz, chat y redes sociales, con soporte multilingüe. Gracias a un enfoque innovador y tecnológico, estos agentes no solo asesoran a los clientes desde el primer contacto hasta la compra o reserva de servicios, sino que también se adaptan a la identidad de su empresa, asegurando una representación auténtica y profesional. Equipados con IA avanzada, utilizan artificial, web scraping y análisis de datos en tiempo real para identificar oportunidades y optimizar cada interacción, aumentando la conversión de ventas. Además, operan bajo un modelo de éxito garantizado, donde el cobro del servicio se basa en un porcentaje de las ventas efectivas, asegurando un enfoque estratégico y orientado a resultados. Con esta solución, cada interacción se convierte en una oportunidad de negocio, impulsando el crecimiento de su empresa y manteniéndola a la vanguardia de la innovación comercial.",
        en: "Our AI Sales Agents are designed to transform your commercial strategies through a personalized, effective, and scalable sales experience across multiple channels, such as voice, chat, and social media, with multilingual support. Thanks to an innovative and technological approach, these agents not only advise customers from first contact to purchase or service booking but also adapt to your company's identity, ensuring authentic and professional representation. Equipped with advanced AI, they use artificial intelligence, web scraping, and real-time data analysis to identify opportunities and optimize each interaction, increasing sales conversion. Additionally, they operate under a guaranteed success model, where service charges are based on a percentage of effective sales, ensuring a strategic and results-oriented approach. With this solution, each interaction becomes a business opportunity, driving your company's growth and keeping it at the forefront of commercial innovation."
      }
    },
    {
      id: 4,
      name: "AI Vision",
      category: "ai-connect",
      image: "/Public/images/AI Vision.jpeg",
      summary: {
        es: "Sistema de visión artificial que analiza imágenes y videos para extraer información valiosa y automatizar procesos visuales.",
        en: "Computer vision system that analyzes images and videos to extract valuable information and automate visual processes."
      },
      description: {
        es: "Nuestro servicio de Visión Artificial convierte datos visuales en información procesable, permitiendo a las empresas optimizar procesos, reducir errores y mejorar la eficiencia operativa. Mediante la automatización avanzada , agiliza tareas como etiquetado, clasificación y conteo, liberando recursos para actividades estratégicas. Además, fortalece el control de calidad , optimiza la gestión de inventarios y minimiza el desperdicio en sectores como retail, fabricación, salud y seguridad. Su capacidad de monitoreo inteligente , con reconocimiento facial y validación en tiempo real, garantiza entornos más seguros y controlados. Aplicable en inspección de productos, análisis de imágenes médicas y supervisión de operaciones, esta solución coloca a su empresa en la vanguardia de la era digital, transformando imágenes en decisiones estratégicas que impulsan la competitividad y el crecimiento.",
        en: "Our Computer Vision service converts visual data into actionable insights, enabling businesses to optimize processes, reduce errors, and improve operational efficiency. Through advanced automation, it streamlines tasks such as labeling, sorting, and counting, freeing up resources for strategic activities. It also strengthens quality control, optimizes inventory management, and minimizes waste in sectors such as retail, manufacturing, and healthcare and safety. Its intelligent monitoring capabilities, with facial recognition and real-time validation, ensure safer and more controlled environments. Applicable in product inspection, medical image analysis, and operations monitoring, this solution places your company at the forefront of the digital age, transforming images into strategic decisions that drive competitiveness and growth."
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
        es: "FaceIA redefine la verificación de identidad digital al combinar precisión, velocidad y seguridad mediante reconocimiento facial avanzado con tecnología de detección de vida (liveness). Este sistema no solo identifica rostros con alta exactitud, sino que previene fraudes al garantizar que el usuario es una persona real, evitando suplantaciones con fotos, videos o modelos 3D. Su autenticación segura protege contra intentos de fraude, mientras que su validación ultrarrápida permite operaciones eficientes en entornos de alta demanda. Con una experiencia de usuario fluida y sin fricciones, FaceIA es adaptable a múltiples dispositivos y fácilmente integrable en sistemas existentes. Sus aplicaciones abarcan desde accesos seguros en oficinas y eventos hasta autenticación en banca digital, e-commerce, pagos y servicios gubernamentales y de salud. Cumpliendo con estrictas normativas de privacidad, FaceIA equilibra seguridad y usabilidad, ofreciendo una solución escalable que crece con su negocio.",
        en: "FaceIA redefines digital identity verification by combining precision, speed, and security through advanced facial recognition with liveness detection technology. This system not only identifies faces with high accuracy but also prevents fraud by ensuring that the user is a real person, preventing impersonation with photos, videos, or 3D models. Its secure authentication protects against fraud attempts, while its ultra-fast validation enables efficient operations in high-demand environments. With a smooth and frictionless user experience, FaceIA is adaptable to multiple devices and easily integrable into existing systems. Its applications range from secure access in offices and events to authentication in digital banking, e-commerce, payments, and government and health services. Complying with strict privacy regulations, FaceIA balances security and usability, offering a scalable solution that grows with your business."
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
        es: "Multimedia AI es el servicio de generación multimodal que revoluciona la creación de contenidos, permitiendo a las empresas optimizar y sofisticar su producción mediante inteligencia artificial. Desde texto a voz, imágenes y vídeos hasta música y audio profesional, esta innovadora plataforma abre nuevas posibilidades para potenciar productos y servicios. Multimedia AI ofrece imágenes personalizadas, alineadas con la identidad de marca; videos de alto impacto para marketing y capacitación; clonación de voces auténticas, mejorando la conexión emocional con los clientes; composición musical original para campañas publicitarias; y audio profesional, adaptado a cada necesidad. Además, su capacidad de generar modelos exclusivos permite desarrollar soluciones personalizadas, alineadas con la estrategia empresarial. Su enfoque en creatividad ilimitada, optimización de recursos, liderazgo en innovación y escalabilidad posiciona a las marcas como referentes en tecnología y creatividad.",
        en: "Multimedia AI is the multimodal generation service that revolutionizes content creation, allowing companies to optimize and sophisticate their production through artificial intelligence. From text to voice, images and videos to music and professional audio, this innovative platform opens new possibilities to enhance products and services. Multimedia AI offers customized images, aligned with brand identity; high-impact videos for marketing and training; authentic voice cloning, improving emotional connection with customers; original music composition for advertising campaigns; and professional audio, adapted to each need. Additionally, its ability to generate exclusive models allows developing customized solutions, aligned with business strategy. Its focus on unlimited creativity, resource optimization, innovation leadership, and scalability positions brands as references in technology and creativity."
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
        es: "AvAI es la solución definitiva en avatares con inteligencia artificial, diseñada para transformar la interacción entre empresas y sus clientes, empleados y audiencias. Gracias a su combinación de realismo, adaptabilidad y tecnología avanzada, AvAI crea experiencias digitales inmersivas y personalizadas, elevando la comunicación a un nivel superior. Con aplicaciones en soporte al cliente, ventas y capacitación, AvAI optimiza la atención personalizada y fortalece la conexión con los usuarios. Su automatización multicanal le permite interactuar a través de correos electrónicos, SMS y llamadas, asegurando una comunicación fluida y eficiente. Además, se integra perfectamente con sistemas empresariales, procesando datos en tiempo real para mejorar la toma de decisiones. Compatible con sitios web, aplicaciones móviles y entornos en tiempo real, AvAI ofrece una interacción multiplataforma, adaptándose a cualquier contexto.",
        en: "AvAI is the ultimate solution in artificial intelligence avatars, designed to transform interaction between companies and their customers, employees, and audiences. Thanks to its combination of realism, adaptability, and advanced technology, AvAI creates immersive and personalized digital experiences, elevating communication to a higher level. With applications in customer support, sales, and training, AvAI optimizes personalized attention and strengthens connection with users. Its multichannel automation allows interaction through emails, SMS, and calls, ensuring fluid and efficient communication. Additionally, it integrates perfectly with business systems, processing real-time data to improve decision-making. Compatible with websites, mobile applications, and real-time environments, AvAI offers cross-platform interaction, adapting to any context."
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
        es: "CyberAI es la solución definitiva en ciberseguridad impulsada por inteligencia artificial, diseñada para detectar, prevenir y responder a ciberataques en tiempo real, protegiendo los activos más valiosos de su empresa. Con una detección proactiva de amenazas, analiza continuamente redes y sistemas para identificar actividades sospechosas antes de que representen un riesgo. Su monitoreo 24/7 garantiza una vigilancia ininterrumpida, mientras que el análisis predictivo permite anticiparse a posibles vulnerabilidades con estrategias preventivas. CyberAI actúa con respuesta automatizada, mitigando amenazas en tiempo real y notificando a los responsables mediante comunicación inteligente vía correos, SMS o llamadas. Además, simplifica el cumplimiento normativo, asegurando que su empresa cumpla con las regulaciones de seguridad más exigentes. Al integrar CyberAI, su negocio se beneficia con reacción inmediata, reducción de costos y mayor confianza operacional, proyectando una imagen de solidez y compromiso con la protección digital. CyberAI no solo mitiga riesgos, sino que también impulsa la innovación, manteniendo su empresa un paso adelante frente a amenazas emergentes. ¡Transforme la seguridad digital con CyberAI y convierta las amenazas en oportunidades para fortalecer su infraestructura tecnológica!",
        en: "CyberAI is the ultimate solution in artificial intelligence-powered cybersecurity, designed to detect, prevent, and respond to cyberattacks in real-time, protecting your company's most valuable assets. With proactive threat detection, it continuously analyzes networks and systems to identify suspicious activities before they pose a risk. Its 24/7 monitoring ensures uninterrupted surveillance, while predictive analysis allows anticipating potential vulnerabilities with preventive strategies. CyberAI acts with automated response, mitigating threats in real-time and notifying those responsible through intelligent communication via emails, SMS, or calls. Additionally, it simplifies regulatory compliance, ensuring that your company meets the most demanding security regulations. By integrating CyberAI, your business benefits from immediate reaction, cost reduction, and greater operational confidence, projecting an image of solidity and commitment to digital protection. CyberAI not only mitigates risks but also drives innovation, keeping your company one step ahead of emerging threats. Transform digital security with CyberAI and turn threats into opportunities to strengthen your technological infrastructure!"
      }
    },
    {
      id: 9,
      name: "TrueSing",
      category: "varios",
      image: "/Public/images/TrueSing.jpeg",
      summary: {
        es: "Sistema de firmas digitales con IA para autenticación segura de documentos y contenido.",
        en: "AI-powered digital signature system for secure document and content authentication."
      },
      description: {
        es: "TrueSing es la solución definitiva para proteger la autenticidad y propiedad de documentos, imágenes y videos mediante Firmas Digitales impulsadas por Inteligencia Artificial y Embeddings. Diseñado para creadores, empresas y profesionales, TrueSing garantiza que cada contenido firmado sea único, verificable y seguro frente a alteraciones o suplantaciones. Su tecnología de identificación multifactorial utiliza datos únicos como rostro, voz, escritura y datos personales para generar un identificador exclusivo que vincula de manera irrefutable al firmante con su contenido. A través de una firma binaria integrada, esta solución protege archivos sin alterar su calidad, permitiendo verificar la autenticidad y propiedad incluso en el futuro. TrueSing ofrece beneficios clave como seguridad avanzada, detección de alteraciones, compatibilidad con diversos formatos y una mayor protección para la monetización de contenido digital. Ideal para artistas, creadores y empresas, su enfoque innovador garantiza confianza, eficiencia y control total sobre el contenido. TrueSing transforma la manera en que se firman y protegen documentos, imágenes y videos, asegurando su autenticidad y valor en cada paso del camino. ¡El futuro de la seguridad digital y la gestión de derechos de autor comienza aquí!",
        en: "TrueSing is the ultimate solution for protecting the authenticity and ownership of documents, images, and videos through Digital Signatures powered by Artificial Intelligence and Embeddings. Designed for creators, businesses, and professionals, TrueSing ensures that each signed content is unique, verifiable, and secure against alterations or impersonations. Its multifactorial identification technology uses unique data such as face, voice, writing, and personal data to generate an exclusive identifier that irrefutably links the signer with their content. Through an integrated binary signature, this solution protects files without altering their quality, allowing verification of authenticity and ownership even in the future. TrueSing offers key benefits such as advanced security, alteration detection, compatibility with various formats, and enhanced protection for digital content monetization. Ideal for artists, creators, and companies, its innovative approach ensures trust, efficiency, and total control over content. TrueSing transforms the way documents, images, and videos are signed and protected, ensuring their authenticity and value every step of the way. The future of digital security and copyright management starts here!"
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
        es: "InfluAI es la solución revolucionaria para transformar su estrategia digital con influencers virtuales impulsados por Inteligencia Artificial, diseñada para conectar marcas con audiencias globales de manera estratégica, innovadora y efectiva. Con una presencia visual única, InfluAI crea personajes personalizados que reflejan la identidad de su empresa, destacándose en redes sociales como Instagram, TikTok y YouTube. Gracias a su capacidad de generar voz y video realistas mediante IA, estos influencers interactúan de manera dinámica y continua, respondiendo preguntas y manteniendo un alto nivel de engagement 24/7. Además, optimiza promociones, segmenta audiencias y mide resultados en tiempo real con análisis de IA, asegurando campañas más efectivas. InfluAI reduce costos, garantiza coherencia en el mensaje y permite una expansión multilingüe, adaptándose a diferentes culturas y regiones. Con esta tecnología, su marca no solo logrará mayor alcance e impacto, sino que también se posicionará como un referente en innovación digital, creando conexiones auténticas y memorables con su público. InfluAI redefine el marketing digital, llevando la creatividad y la interacción a un nivel sin precedentes. ¡El futuro de la influencia digital comienza ahora!",
        en: "InfluAI is the revolutionary solution to transform your digital strategy with AI-powered virtual influencers, designed to connect brands with global audiences in a strategic, innovative, and effective way. With a unique visual presence, InfluAI creates customized characters that reflect your company's identity, standing out on social networks like Instagram, TikTok, and YouTube. Thanks to its ability to generate realistic voice and video through AI, these influencers interact dynamically and continuously, answering questions and maintaining a high level of engagement 24/7. Additionally, it optimizes promotions, segments audiences, and measures results in real-time with AI analysis, ensuring more effective campaigns. InfluAI reduces costs, ensures message consistency, and enables multilingual expansion, adapting to different cultures and regions. With this technology, your brand will not only achieve greater reach and impact but will also position itself as a reference in digital innovation, creating authentic and memorable connections with your audience. InfluAI redefines digital marketing, taking creativity and interaction to unprecedented levels. The future of digital influence starts now!"
      }
    },
    {
      id: 11,
      name: "TestQAI",
      category: "varios",
      image: "/Public/images/TestQAI.jpeg",
      summary: {
        es: "Sistema automatizado de pruebas y control de calidad para software con IA.",
        en: "Automated AI-powered testing and quality control system for software."
      },
      description: {
        es: "TestQAAI revoluciona el aseguramiento de calidad del software con agentes de prueba impulsados por inteligencia artificial, automatizando el ciclo completo de pruebas en aplicaciones web y móviles con velocidad, precisión y eficiencia. Su capacidad para diseñar, ejecutar y analizar pruebas sin intervención manual optimiza el desarrollo, asegurando compatibilidad multiplataforma, detección avanzada de errores y generación de informes detallados. Integrado con DevOps, TestQAAI acelera los ciclos de desarrollo, reduce costos, mejora la cobertura de pruebas y permite una toma de decisiones basada en datos, garantizando un software más confiable y robusto. ¡Transforme su estrategia de QA con TestQAAI y lleve la calidad de su software al siguiente nivel!",
        en: "TestQAAI revolutionizes software quality assurance with artificial intelligence-powered test agents, automating the complete testing cycle in web and mobile applications with speed, precision, and efficiency. Its ability to design, execute, and analyze tests without manual intervention optimizes development, ensuring cross-platform compatibility, advanced error detection, and detailed report generation. Integrated with DevOps, TestQAAI accelerates development cycles, reduces costs, improves test coverage, and enables data-driven decision making, ensuring more reliable and robust software. Transform your QA strategy with TestQAAI and take your software quality to the next level!"
      }
    },
    {
      id: 12,
      name: "AI Trainer",
      category: "varios",
      image: "/Public/images/AI Trainer.jpeg",
      summary: {
        es: "Plataforma de entrenamiento personalizado con IA para desarrollo profesional.",
        en: "AI-powered personalized training platform for professional development."
      },
      description: {
        es: "AITrainer es la solución definitiva para capacitar a empresas en la adopción y uso estratégico de la inteligencia artificial, brindando formación adaptada a distintos niveles, desde conceptos básicos hasta especializaciones avanzadas. A través de una metodología práctica y enfocada en desafíos reales, AITrainer no solo enseña teoría, sino que prepara a su equipo para aplicar la IA en sus operaciones diarias, impulsando la innovación y la competitividad. Con AITrainer, su empresa adquiere el conocimiento necesario para liderar la transformación digital y aprovechar al máximo el potencial de la inteligencia artificial. ¡Capacite su talento y lidere el futuro con AITrainer!",
        en: "AITrainer is the ultimate solution for training companies in the adoption and strategic use of artificial intelligence, providing training adapted to different levels, from basic concepts to advanced specializations. Through a practical methodology focused on real challenges, AITrainer not only teaches theory but prepares your team to apply AI in their daily operations, driving innovation and competitiveness. With AITrainer, your company acquires the necessary knowledge to lead digital transformation and maximize the potential of artificial intelligence. Train your talent and lead the future with AITrainer!"
      }
    },
    
    {
      id: 13,
      name: "db-ai",
      category: "varios",
      image: "/Public/images/db-ai.jpeg",
      summary: {
        es: "Gestión inteligente de bases de datos para optimizar rendimiento y eficiencia.",
        en: "Intelligent database management to optimize performance and efficiency."
      },
      description: {
        es: "db-ai revoluciona la gestión empresarial al combinar Bases de Datos Vector (RAG) con Modelos de Lenguaje (LLMs), permitiendo consultas en lenguaje natural para acceder, analizar y visualizar datos textuales, métricos y visuales de manera rápida, segura y eficiente. Con capacidades avanzadas como análisis predictivo, monitoreo en tiempo real y automatización de informes, db-ai optimiza la toma de decisiones estratégicas, agiliza la gestión financiera, el control de inventarios y el análisis de ventas, asegurando confidencialidad total y protección de datos. Su integración intuitiva permite realizar búsquedas complejas sin necesidad de conocimientos técnicos, convirtiendo la información en oportunidades estratégicas para el crecimiento empresarial. ¡Lleve la inteligencia artificial a su negocio con db-ai y transforme la manera en que gestiona sus datos!",
        en: "db-ai revolutionizes business management by combining Vector Databases (RAG) with Language Models (LLMs), enabling natural language queries to access, analyze, and visualize textual, metric, and visual data quickly, securely, and efficiently. With advanced capabilities such as predictive analytics, real-time monitoring, and report automation, db-ai optimizes strategic decision-making, streamlines financial management, inventory control, and sales analysis, ensuring total confidentiality and data protection. Its intuitive integration allows performing complex searches without technical knowledge, turning information into strategic opportunities for business growth. Bring artificial intelligence to your business with db-ai and transform the way you manage your data!"
      }
    },
    {
      id: 14,
      name: "VIRTUAL IPV",
      category: "varios",
      image: "/Public/images/VIRTUAL IPV.png",
      summary: {
        es: "Sistema de protección virtual contra violencia con monitoreo en tiempo real.",
        en: "Virtual violence protection system with real-time monitoring."
      },
      description: {
        es: "VIRTUAL IPV es la solución integral para gestionar actividades en los puntos de venta, diseñada para optimizar las estrategias retail en grandes superficies y pequeñas tiendas. Con dos modos de ejecución, esta plataforma permite gestionar tareas como merchandising, promociones y análisis de competencia de manera eficiente. Su registro fotográfico georreferenciado y módulo móvil brindan la capacidad de tomar decisiones informadas al instante, transformando la gestión en los puntos de venta y fomentando la lealtad de los clientes. Con VIRTUAL IPV, eleva su negocio y transforma su estrategia retail.",
        en: "VIRTUAL IPV is the comprehensive solution for managing activities at points of sale, designed to optimize retail strategies in large surfaces and small stores. With two execution modes, this platform allows efficient management of tasks such as merchandising, promotions, and competition analysis. Its georeferenced photographic record and mobile module provide the ability to make informed decisions instantly, transforming management at points of sale and fostering customer loyalty. With VIRTUAL IPV, elevate your business and transform your retail strategy."
      }
    },
    {
      id: 15,
      name: "VIRTUAL QUALITY FIELD",
      category: "varios",
      image: "/Public/images/VIRTUAL QUALITY FIELD.png",
      summary: {
        es: "Control de calidad automatizado para operaciones de campo con IA.",
        en: "Automated quality control for field operations with AI."
      },
      description: {
        es: "VIRTUAL Quality FIELD es la plataforma web y móvil que revoluciona las auditorías y supervisiones remotas en tiempo real, permitiendo la toma de evidencia multimedia para garantizar la calidad del servicio en sectores como telecomunicaciones, energía, gas y medicina. Gracias a su integración con video analítico e inteligencia artificial, facilita la toma de decisiones informadas al instante, optimizando procesos y elevando la satisfacción del cliente. Transforme la supervisión tradicional, impulse la eficiencia y fortalezca la relación con sus clientes con CAMPO DE CALIDAD VIRTUAL.",
        en: "VIRTUAL Quality FIELD is the web and mobile platform that revolutionizes real-time remote audits and supervisions, enabling multimedia evidence collection to ensure service quality in sectors such as telecommunications, energy, gas, and medicine. Thanks to its integration with video analytics and artificial intelligence, it facilitates instant, informed decision-making, optimizing processes and increasing customer satisfaction. Transform traditional supervision, boost efficiency, and strengthen your customer relationships with VIRTUAL QUALITY FIELD."
      }
    },
    {
      id: 16,
      name: "VIRTUAL SMART VIDEO",
      category: "varios",
      image: "/Public/images/VIRTUAL SMART VIDEO.png",
      summary: {
        es: "Análisis inteligente de video para detección de patrones y eventos.",
        en: "Intelligent video analysis for pattern and event detection."
      },
      description: {
        es: "Virtual Smart Video es la plataforma innovadora que transforma entrevistas y capacitaciones mediante inteligencia artificial, optimizando procesos y reduciendo costos operativos. Con capacidades avanzadas como el reconocimiento de emociones y el perfil biofísico, esta herramienta disponible 24 horas al día, 7 días a la semana asegura un análisis en tiempo real, proporcionando insights valiosos. Además, su almacenamiento seguro de información garantiza la confidencialidad. Optimice entrevistas, capacite a su equipo y lleve la eficiencia de su empresa al siguiente nivel con Virtual Smart Video. ¡Comience hoy mismo!.",
        en: "Virtual Smart Video is the innovative platform that transforms interviews and training through artificial intelligence, optimizing processes and reducing operational costs. With advanced capabilities such as emotion recognition and biophysical profiling, this 24/7 tool ensures real-time analysis, providing valuable insights. Plus, its secure data storage guarantees confidentiality. Optimize interviews, train your team, and take your company's efficiency to the next level with Virtual Smart Video. Get started today!."
      }
    },
    {
      id: 17,
      name: "ANALITICA BIG DATA",
      category: "varios",
      image: "/Public/images/ANALITICA BIG DATA.png",
      summary: {
        es: "Análisis avanzado de grandes volúmenes de datos para insights empresariales.",
        en: "Advanced analysis of large data volumes for business insights."
      },
      description: {
        es: "ANALITICA BIG DATA es la solución definitiva para empresas que buscan extraer valor estratégico de grandes volúmenes de datos mediante modelos avanzados de predicción, clasificación y recomendación basados en inteligencia artificial. Nuestra consultoría e implementación permiten transformar información cruda en insights valiosos, optimizando la toma de decisiones y anticipando tendencias clave. Lo que nos distingue es la combinación de técnicas analíticas tradicionales con innovaciones en IA, garantizando precisión y efectividad. No se quede atrás en la era del Big Data, ¡potencie su negocio con ANALITICA BIG DATA!",
        en: "ANALITICA BIG DATA is the ultimate solution for companies seeking to extract strategic value from large volumes of data through advanced prediction, classification, and recommendation models based on artificial intelligence. Our consulting and implementation allow transforming raw information into valuable insights, optimizing decision-making and anticipating key trends. What distinguishes us is the combination of traditional analytical techniques with AI innovations, ensuring precision and effectiveness. Don't fall behind in the Big Data era, boost your business with ANALITICA BIG DATA!"
      }
    },
    {
      id: 18,
      name: "FABRICA DE SOFTWARE",
      category: "varios",
      image: "/Public/images/FABRICA DE SOFTWARE.png",
      summary: {
        es: "Desarrollo automatizado de software con IA para mayor eficiencia.",
        en: "Automated software development with AI for greater efficiency."
      },
      description: {
        es: "Fábrica de Software es el servicio integral de desarrollo a la medida que impulsa la competitividad empresarial con soluciones tecnológicas escalables y de alto rendimiento. Utilizamos tecnologías como PHP, Java y las principales bases de datos del mercado (MySQL, Oracle, SQL Server) para garantizar confiabilidad y eficiencia. Nuestra metodología abarca consultoría, diseño e implementación, con un equipo especializado que optimiza los tiempos de entrega sin comprometer la calidad. Desarrolle software a la medida de su negocio con tecnología avanzada y tiempos reducidos. ¡Contáctenos hoy y transforme su empresa!",
        en: "Software Factory is a comprehensive, custom development service that boosts business competitiveness with scalable, high-performance technological solutions. We utilize technologies such as PHP, Java, and the market's leading databases (MySQL, Oracle, SQL Server) to ensure reliability and efficiency. Our methodology encompasses consulting, design, and implementation, with a specialized team that optimizes delivery times without compromising quality. Develop software tailored to your business with advanced technology and reduced timescales. Contact us today and transform your company!"
      }
    },
    {
      id: 19,
      name: "PA YA 2.0",
      category: "varios",
      image: "/Public/images/PA YA.png",
      summary: {
        es: "Sistema de pagos inteligente para transacciones seguras y eficientes.",
        en: "Intelligent payment system for secure and efficient transactions."
      },
      description: {
        es: "!Pa' Ya! es la plataforma inteligente que revoluciona la gestión de servicios y entregas, optimizando tiempos, precisión y calidad a través de tecnología avanzada. Con tres soluciones principales— Estándar para clientes individuales, Delivery con rutas inteligentes y Business para empresas—¡Pa' Ya! maximiza la eficiencia con algoritmos de optimización, automatización RPA y soporte en tiempo real. Adaptable a sectores como salud, telecomunicaciones y educación, ofrece una experiencia más rápida, inteligente y confiable. Descubre el futuro de las entregas con ¡Pa' Ya! y transforma su forma de trabajar.",
        en: "Pa' Ya! is the intelligent platform that revolutionizes service and delivery management, optimizing time, accuracy, and quality through advanced technology. With three main solutions—Standard for individual customers, Delivery with smart routes, and Business for businesses—Pa' Ya! maximizes efficiency with optimization algorithms, RPA automation, and real-time support. Adaptable to sectors such as healthcare, telecommunications, and education, it offers a faster, smarter, and more reliable experience. Discover the future of deliveries with Pa' Ya! and transform the way you work."
      }
    }
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
                  src="/Public/images/AI CONNECT FINAL.png"
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

          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex space-x-4">
              <button
                onClick={() => setActiveFilter('todos')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'todos' 
                    ? 'bg-[#13477a] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {language === 'es' ? 'Todos los Productos' : 'All Products'}
              </button>
              <button
                onClick={() => setActiveFilter('ai-connect')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'ai-connect' 
                    ? 'bg-[#13477a] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                AI Connect
              </button>
              <button
                onClick={() => setActiveFilter('varios')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'varios' 
                    ? 'bg-[#13477a] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {language === 'es' ? 'Varios' : 'Others'}
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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