import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import VirtualAssistant from '../components/VirtualAssistant';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to FAQs section
    if (location.state?.scrollToFAQs) {
      const faqsSection = document.getElementById('faqs');
      if (faqsSection) {
        faqsSection.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FAQSection />
      </main>
      <Footer />
      <VirtualAssistant />
    </div>
  );
}

export default HomePage;