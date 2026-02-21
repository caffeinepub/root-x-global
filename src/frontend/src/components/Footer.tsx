import { SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'rootxglobal';

  return (
    <footer className="relative bg-luxury-black border-t border-gold/20 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gold-gradient mb-3">
              ROOT X GLOBAL
            </h3>
            <p className="font-sans text-base md:text-lg text-white/70 tracking-widest">
              Expanding Beyond Boundaries
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="p-3 rounded-full bg-gold/10 hover:bg-gold/20 transition-all duration-300 gold-glow-subtle"
              aria-label="Facebook"
            >
              <SiFacebook className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gold/10 hover:bg-gold/20 transition-all duration-300 gold-glow-subtle"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gold/10 hover:bg-gold/20 transition-all duration-300 gold-glow-subtle"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5 text-gold" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gold/20" />

          {/* Copyright & Attribution */}
          <div className="text-center space-y-2">
            <p className="font-sans text-sm text-white/50">
              © {currentYear} ROOT X GLOBAL. All rights reserved.
            </p>
            <p className="font-sans text-sm text-white/50">
              Built with{' '}
              <span className="text-gold inline-block animate-pulse">♥</span>{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
