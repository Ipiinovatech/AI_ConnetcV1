import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm font-medium transition-colors"
    >
      <span className={`${language === 'es' ? 'text-white' : 'text-gray-400'}`}>ES</span>
      <span className="text-gray-400">/</span>
      <span className={`${language === 'en' ? 'text-white' : 'text-gray-400'}`}>EN</span>
    </button>
  );
};

export default LanguageToggle;