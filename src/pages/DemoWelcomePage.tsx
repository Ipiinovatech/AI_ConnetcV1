import React, { useEffect, useState, useRef } from 'react';
import { Linkedin, Facebook, Instagram, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

const DemoWelcomePage = () => {
  const { user } = useAuth();
  const [activeVideo, setActiveVideo] = useState<'call' | 'multilingual' | 'chat'>('call');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [videoStyle, setVideoStyle] = useState({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Configuración de videos con relaciones de aspecto
  const videos = {
    call: {
      title: 'Llamada',
      src: '/Public/videos/DEMOSTRACION/SELL_AI/DEMOSellAI.mp4',
      poster: '/Public/images/SellAI.jpeg',
      aspectRatio: '16/9' // Horizontal
    },
    multilingual: {
      title: 'Multilingüe',
      src: '/Public/videos/DEMOSTRACION/SELL_AI/DEMO SELLAI (INGLES).mp4',
      poster: '/Public/images/SellAI.jpeg',
      aspectRatio: '16/9' // Horizontal
    },
    chat: {
      title: 'Chat',
      src: '/Public/videos/DEMOSTRACION/SELL_AI/CHAT_DEMO_SELL_AI.mp4',
      fallbackSrc: '/Public/videos/DEMOSTRACION/SELL_AI/CHAT DEMO SELL AI.mp4',
      poster: '/Public/images/SellAI.jpeg',
      aspectRatio: '9/16' // Vertical
    }
  };

  // Ajustar el estilo del video según su relación de aspecto
  const adjustVideoStyle = () => {
    const aspectRatio = videos[activeVideo].aspectRatio;
    const isVertical = aspectRatio === '9/16';

    if (isVertical) {
      setVideoStyle({
        width: 'auto',
        height: '100%',
        objectFit: 'contain'
      });
    } else {
      setVideoStyle({
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      });
    }
  };

  const handlePlayPause = async () => {
    if (!videoRef.current) return;
    
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
        setError(null);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error('Error al reproducir:', err);
      setError('Error al iniciar la reproducción del video');
      
      if (activeVideo === 'chat' && videoRef.current.src !== videos.chat.fallbackSrc) {
        videoRef.current.src = videos.chat.fallbackSrc;
        videoRef.current.load();
        setError('Cargando versión alternativa del video de chat...');
      }
    }
  };

  const handleVideoError = () => {
    if (!videoRef.current) return;
    
    const error = videoRef.current.error;
    let errorMessage = 'Error al cargar el video';
    
    if (error) {
      switch(error.code) {
        case 1: errorMessage = 'Error: La carga del video fue interrumpida'; break;
        case 2: errorMessage = 'Error: Problema de red al cargar el video'; break;
        case 3: errorMessage = 'Error: No se puede decodificar el video'; break;
        case 4: errorMessage = 'Error: Formato de video no soportado'; break;
      }
    }
    
    setError(errorMessage);
    
    if (activeVideo === 'chat' && videoRef.current.src !== videos.chat.fallbackSrc) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.src = videos.chat.fallbackSrc;
          videoRef.current.load();
        }
      }, 1000);
    }
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
        console.error('Error al activar pantalla completa:', err);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      // Corrección específica para la duración del video de chat
      if (activeVideo === 'chat' && videoRef.current.duration < 120) {
        setDuration(600); // 10 minutos en segundos
      } else {
        setDuration(videoRef.current.duration);
      }
      adjustVideoStyle(); // Reajustar el estilo después de cargar los metadatos
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setError(null);
    if (videoRef.current) {
      videoRef.current.src = videos[activeVideo].src;
      videoRef.current.load();
      adjustVideoStyle();
    }
  }, [activeVideo]);

  useEffect(() => {
    const handleResize = () => adjustVideoStyle();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
            />
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
              {error && (
                <div className="text-yellow-500 p-4 bg-black/50 rounded-lg mb-4 text-center">
                  {error}
                </div>
              )}

              {/* Contenedor del video con relación de aspecto 16:9 */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="mx-auto bg-black"
                  style={videoStyle}
                  poster={videos[activeVideo].poster}
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onError={handleVideoError}
                  playsInline
                >
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Custom Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 space-y-2">
                  {/* Timeline */}
                  <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full appearance-none h-2 rounded-lg bg-white/30 accent-blue-500"
                  />
                  
                  {/* Time display */}
                  <div className="text-sm text-white/80 flex justify-between px-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>

                  {/* Controls */}
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
            <a href="https://co.linkedin.com/in/yoseph-orozco-66bab327" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/share/1BP7bZVZLr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/ipinnovatech_aiconnect/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
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