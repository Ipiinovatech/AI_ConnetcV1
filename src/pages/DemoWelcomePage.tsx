import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

const DemoWelcomePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#001a33] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative py-20 pt-32">
        {/* Background particles/bokeh effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-400 opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 8 + 2}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              BIENVENIDO{user ? `, ${user.name.toUpperCase()}` : ''}
            </h1>
            <p className="text-xl text-blue-300 mb-8">
              Has iniciado sesión correctamente con {user?.provider === 'google.com' ? 'Google' : 
                user?.provider === 'facebook.com' ? 'Facebook' : 'tu cuenta de correo'}
            </p>
          </div>
          
          {/* Video Demo Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl p-4 backdrop-blur-sm">
            <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
              {/* Video Thumbnail with Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--252af506ed0fd97356946db9ed3ee66d49bfba1b/WhatsApp Image 2024-12-30 at 8.59.52 PM.jpeg"
                  alt="SellAI Demo"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-lg">
                  <span className="flex items-center">
                    <span className="text-blue-700 font-bold text-sm mr-1">AI</span>
                    Connect
                  </span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center mb-8">
                    <img 
                      src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkV5Ync9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--252af506ed0fd97356946db9ed3ee66d49bfba1b/WhatsApp Image 2024-12-30 at 8.59.52 PM.jpeg"
                      alt="SellAI Logo"
                      className="h-16 mr-4"
                    />
                    <h2 className="text-5xl font-bold">
                      Sell<span className="text-blue-400">AI</span>
                    </h2>
                  </div>
                  
                  <button className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                  <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                    <p className="text-sm text-white">
                      <span className="block font-medium">Asistente de ventas Valentina</span>
                    </p>
                  </div>
                  
                  <div className="bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                    <p className="text-sm text-white">
                      <span className="block font-medium">Cliente: {user?.name || 'David Torres'}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center mt-12 space-x-6">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default DemoWelcomePage;