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
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // Get product name from location state or default to SellAI
  const productName = location.state?.product || 'SellAI';

  // Map of product demo videos
  const productDemos = {
    'SellAI': '/Public/Videos/DEMOSTRACION/DEMOSellAI.mp4'
    // Add more product demos here as they become available
  };

  const handlePlayPause = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        hideControlsWithDelay();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      }
    }
  };

  const hideControlsWithDelay = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2000);
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePlayPause();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    hideControlsWithDelay();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setVideoEnded(true);
    setShowControls(true);
  };

  const handleVideoReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setVideoEnded(false);
      hideControlsWithDelay();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    if (videoRef.current) {
      const newTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(percentage);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = async (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#001a33] text-white">
      <Header />

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              BIENVENIDO{user ? `, ${user.name.toUpperCase()}` : ''}
            </h1>
            <p className="text-xl text-blue-300 mb-8">
              Has iniciado sesión correctamente con {user?.provider === 'google.com' ? 'Google' : 
                user?.provider === 'facebook.com' ? 'Facebook' : 'tu cuenta de correo'}
            </p>
          </div>
          
          {/* Video Demo Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl p-4 backdrop-blur-sm">
              <div 
                className="relative aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg overflow-hidden cursor-pointer"
                onClick={handleVideoClick}
                onMouseMove={handleMouseMove}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={productDemos[productName]}
                  poster={`/Public/Images/${productName}.jpeg`}
                  onEnded={handleVideoEnd}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  playsInline
                >
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Video Controls Overlay */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent via-transparent to-black/30 transition-opacity duration-300 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {!isPlaying && !videoEnded && (
                    <button
                      onClick={handlePlayPause}
                      className="w-20 h-20 bg-blue-600/80 hover:bg-blue-700/80 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 group backdrop-blur-sm"
                    >
                      <Play className="w-10 h-10 text-white transition-transform group-hover:scale-110" />
                    </button>
                  )}
                  
                  {videoEnded && (
                    <button
                      onClick={handleVideoReplay}
                      className="px-6 py-3 bg-blue-600/80 hover:bg-blue-700/80 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105 backdrop-blur-sm"
                    >
                      <Play className="w-5 h-5" />
                      <span>Reproducir de nuevo</span>
                    </button>
                  )}

                  {/* Video Progress Bar and Controls */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transition-opacity duration-300 ${
                    showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Progress Bar */}
                    <div 
                      className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-4"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="h-full bg-blue-500 rounded-full relative"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
                      </div>
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
                        
                        <span className="text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
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