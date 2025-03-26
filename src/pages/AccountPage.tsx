import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { Settings, CreditCard, FileText, Bell, LogOut, User, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';

const AccountPage = () => {
  const { user, logout } = useAuth();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'profile' | 'billing' | 'documents' | 'notifications'>('profile');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const menuItems = [
    {
      id: 'profile',
      icon: <User className="h-5 w-5" />,
      label: language === 'es' ? 'Perfil' : 'Profile'
    },
    {
      id: 'billing',
      icon: <CreditCard className="h-5 w-5" />,
      label: language === 'es' ? 'Facturación' : 'Billing'
    },
    {
      id: 'documents',
      icon: <FileText className="h-5 w-5" />,
      label: language === 'es' ? 'Documentos' : 'Documents'
    },
    {
      id: 'notifications',
      icon: <Bell className="h-5 w-5" />,
      label: language === 'es' ? 'Notificaciones' : 'Notifications'
    }
  ];

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
            
            <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              <span>{language === 'es' ? 'Volver al inicio' : 'Back to home'}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* User Info Header */}
            <div className="bg-gradient-to-r from-[#13477a] to-[#0d2d4d] p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#13477a] text-2xl font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p className="text-blue-200">{user?.email}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
              {/* Sidebar Navigation */}
              <nav className="p-4 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#13477a] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>{language === 'es' ? 'Cerrar sesión' : 'Log out'}</span>
                </button>
              </nav>

              {/* Content Area */}
              <div className="col-span-3 p-6">
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#13477a]">
                      {language === 'es' ? 'Información del Perfil' : 'Profile Information'}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {language === 'es' ? 'Nombre completo' : 'Full name'}
                        </label>
                        <input
                          type="text"
                          value={user?.name}
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {language === 'es' ? 'Correo electrónico' : 'Email'}
                        </label>
                        <input
                          type="email"
                          value={user?.email}
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {language === 'es' ? 'Método de inicio de sesión' : 'Login method'}
                        </label>
                        <input
                          type="text"
                          value={user?.provider === 'google.com' ? 'Google' : 
                                user?.provider === 'facebook.com' ? 'Facebook' : 
                                language === 'es' ? 'Correo electrónico' : 'Email'}
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-[#13477a] mb-4">
                        {language === 'es' ? 'Preferencias' : 'Preferences'}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {language === 'es' ? 'Idioma' : 'Language'}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {language === 'es' ? 'Español' : 'English'}
                            </p>
                          </div>
                          <button className="text-[#13477a] hover:text-[#0d2d4d]">
                            <Settings className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'billing' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#13477a] mb-6">
                      {language === 'es' ? 'Facturación' : 'Billing'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'es' 
                        ? 'No hay información de facturación disponible.'
                        : 'No billing information available.'}
                    </p>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#13477a] mb-6">
                      {language === 'es' ? 'Documentos' : 'Documents'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'es'
                        ? 'No hay documentos disponibles.'
                        : 'No documents available.'}
                    </p>
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#13477a] mb-6">
                      {language === 'es' ? 'Notificaciones' : 'Notifications'}
                    </h2>
                    <p className="text-gray-600">
                      {language === 'es'
                        ? 'No hay notificaciones nuevas.'
                        : 'No new notifications.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default AccountPage;