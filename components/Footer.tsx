import { Github, Linkedin, Send } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e16] border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 font-mono text-sm">
            © {currentYear} Vadim Korchagin. Built with React & TypeScript
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/gerenny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
