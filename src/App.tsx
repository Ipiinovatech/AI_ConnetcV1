import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import DemoWelcomePage from './pages/DemoWelcomePage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/demo-bienvenido" element={<DemoWelcomePage />} />
          <Route path="/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;