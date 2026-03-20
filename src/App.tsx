import { useState } from 'react';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContractorPage from './components/ContractorPage';
import ConsultantPage from './components/ConsultantPage';
import ClientPublicPage from './components/ClientPublicPage';

type Page = 'login' | 'landing' | 'About' | 'Contractor' | 'Consultant' | 'Client & Public';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('landing');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  switch (currentPage) {
    case 'landing':
      return <LandingPage onNavigate={handleNavigate} onLogout={handleLogout} />;
    case 'About':
      return <AboutPage onBack={handleBackToLanding} />;
    case 'Contractor':
      return <ContractorPage onBack={handleBackToLanding} />;
    case 'Consultant':
      return <ConsultantPage onBack={handleBackToLanding} />;
    case 'Client & Public':
      return <ClientPublicPage onBack={handleBackToLanding} />;
    default:
      return <LandingPage onNavigate={handleNavigate} onLogout={handleLogout} />;
  }
}

export default App;
