import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

const DemoWelcomePage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [activeVideo, setActiveVideo] = useState<'call' | 'multilingual' | 'chat'>('call');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = {
    call: {
      title: 'Llamada',
      src: '/Public/videos/DEMOSTRACION/DEMOSellAI.mp4',
      poster: '/Public/images/SellAI.jpeg'
    },
    multilingual: {
      title: 'Multilingüe',
      src: '/Public/videos/DEMOSTRACION/DEMO SELLAI (INGLES).mp4',
      poster: '/Public/images/SellAI.jpeg'
    },
    chat: {
      title: 'Chat',
      src: '/Public/videos/DEMOSTRACION/DEMOSellAI.mp4',
      poster: '/Public/images/SellAI.jpeg'
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = async () => {
    if (videoRef.current) {
      try {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        } else {
          await videoRef.current.requestFullscreen();
        }
      } catch (err) {
        console.error('Error attempting to enable full-screen mode:', err);
      }
    }
  };

  // Reset video state when changing videos
  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [activeVideo]);

  return (
    <div className="min-h-screen bg-[#001a33] text-white">
      <Header />

      <main className="relative py-20 pt-32">
        {/* Background Effect */}
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
          {/* Welcome Message */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              BIENVENIDO{user ? `, ${user.name.toUpperCase()}` : ''}
            </h1>
            <p className="text-xl text-blue-300 mb-8">
              Has iniciado sesión correctamente con {user?.provider === 'google.com' ? 'Google' : 
                user?.provider === 'facebook.com' ? 'Facebook' : 'tu cuenta de correo'}
            </p>
          </div>

          {/* Video Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white/10 rounded-lg p-1">
              {(Object.keys(videos) as Array<keyof typeof videos>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveVideo(key)}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    activeVideo === key 
                      ? 'bg-blue-500 text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {videos[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="relative aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={videos[activeVideo].src}
                  poster={videos[activeVideo].poster}
                  onEnded={handleVideoEnd}
                  playsInline
                >
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={handlePlayPause}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                      </button>
                    </div>

                    <button
                      onClick={handleFullscreen}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center mt-12 space-x-6">
            <a 
              href="https://co.linkedin.com/in/yoseph-orozco-66bab327" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.facebook.com/share/1BP7bZVZLr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/ipinnovatech_aiconnect/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default DemoWelcomePage;