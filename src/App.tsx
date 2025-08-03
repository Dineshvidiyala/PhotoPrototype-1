import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import WeddingPage from './components/WeddingPage';
import BabyShootPage from './components/BabyShootPage';
import ModelShootsPage from './components/ModelShootsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'wedding':
        return <WeddingPage />;
      case 'baby-shoot':
        return <BabyShootPage />;
      case 'model-shoots':
        return <ModelShootsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;