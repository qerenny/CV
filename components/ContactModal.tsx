import { X, Mail, Phone, Send } from 'lucide-react';
import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const contactOptions = [
    { label: "Let's collaborate on a project", icon: '💻' },
    { label: 'Just saying hello!', icon: '👋' },
    { label: 'Interested in hiring', icon: '🚀' },
    { label: 'Ask about my experience', icon: '💡' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-emerald-900/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-2xl">
              👨‍💻
            </div>
            <div>
              <h2 className="text-xl text-emerald-400 font-mono">Vadim Korchagin</h2>
              <p className="text-gray-400">Let's get in touch</p>
            </div>
          </div>

          {/* Message Bubbles */}
          <div className="space-y-3 mb-6">
            <div className="bg-[#0a0e16]/60 rounded-2xl p-4 border border-emerald-900/20">
              <p className="text-gray-300">
                I'm always open to new opportunities and collaborations! 🚀
              </p>
            </div>
            <div className="bg-[#0a0e16]/60 rounded-2xl p-4 border border-emerald-900/20">
              <p className="text-gray-300">
                Feel free to reach out through any of the channels below:
              </p>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-3 mb-6">
            {contactOptions.map((option, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-3 rounded-xl border-2 border-emerald-900/30 hover:border-emerald-600/50 hover:bg-emerald-900/10 transition-all text-gray-300 hover:text-emerald-300"
              >
                <span className="mr-2">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>

          {/* Contact Information */}
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <a
              href="mailto:inequality000@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-900/20 flex items-center justify-center group-hover:bg-emerald-900/40 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-mono">inequality000@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+79270611818"
              className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-900/20 flex items-center justify-center group-hover:bg-emerald-900/40 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-mono">(+7) 927-061-18-18</div>
              </div>
            </a>

            <a
              href="https://t.me/gerenny"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-900/20 flex items-center justify-center group-hover:bg-emerald-900/40 transition-colors">
                <Send size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Telegram</div>
                <div className="font-mono">@gerenny</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
