import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'projects';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onContactClick: () => void;
}

export function Navigation({ currentPage, onNavigate, onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Projects', page: 'projects' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e16]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="text-xl font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            vadim@portfolio:~$
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`font-mono transition-colors ${
                  currentPage === item.page
                    ? 'text-emerald-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors font-mono"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-gray-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left font-mono transition-colors ${
                  currentPage === item.page
                    ? 'text-emerald-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-colors font-mono"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
