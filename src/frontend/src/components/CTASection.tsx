import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleBookCall = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-r from-gold-dark via-gold to-gold-light slide-section overflow-hidden"
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-dark/90 via-gold/90 to-gold-light/90" />
      
      <div
        className={`relative container mx-auto px-6 md:px-12 text-center transition-all duration-1500 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-luxury-black mb-8 md:mb-12">
          Ready To Scale Globally?
        </h2>
        
        <Button
          onClick={handleBookCall}
          className="bg-luxury-black text-gold hover:bg-charcoal text-base md:text-lg lg:text-xl px-12 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 rounded-none font-sans font-semibold tracking-widest transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          Book Strategy Call
        </Button>
      </div>
    </section>
  );
}
