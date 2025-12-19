import { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Navigation } from './components/Navigation';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

type Page = 'home' | 'about' | 'projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e16] text-gray-100">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onContactClick={() => setIsContactOpen(true)}
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
