import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/assets/generated/luxury-geometric-bg.dim_1920x1080.png',
    '/assets/generated/abstract-gold-lines.dim_1920x1080.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServices = () => {
    const servicesSection = document.querySelector('.slide-container:nth-child(3)');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden slide-section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-luxury-black/70 z-10" />
            <img
              src={img}
              alt="Luxury Background"
              className="w-full h-full object-cover animate-slow-zoom"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-20 container mx-auto px-6 md:px-12 text-center transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
          We Build Global
          <br />
          <span className="text-gold-gradient">Digital Authority</span>
        </h1>
        
        <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-light mb-12 md:mb-16 tracking-wide font-light">
          Premium Digital Marketing, Social Media Ads & Business Development Solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={handleConsultation}
            className="luxury-button-primary text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-none font-sans font-semibold tracking-wider"
          >
            Get Free Consultation
          </Button>
          <Button
            onClick={handleViewServices}
            className="luxury-button-secondary text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-none font-sans font-semibold tracking-wider"
          >
            View Our Services
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
