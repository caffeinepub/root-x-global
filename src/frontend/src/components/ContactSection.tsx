import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleConsultation = () => {
    window.location.href = 'tel:7557831531';
  };

  return (
    <section
      id="contact-section"
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-luxury-black via-navy-dark to-luxury-black slide-section"
    >
      <div
        className={`container mx-auto px-6 md:px-12 max-w-4xl transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-gradient mb-16 md:mb-20 text-center">
          Let's Build Your Global
          <br />
          Success Story
        </h2>

        <div className="luxury-contact-box p-8 md:p-12 lg:p-16 mb-12">
          <div className="space-y-8">
            <a
              href="tel:7557831531"
              className="flex items-center justify-center gap-4 md:gap-6 group transition-all duration-300 hover:scale-105"
            >
              <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-300 gold-glow">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-gold" />
              </div>
              <span className="font-sans text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wider">
                7557831531
              </span>
            </a>

            <div className="h-px bg-gold/20" />

            <a
              href="mailto:www.rootxglobal@gmail.com"
              className="flex items-center justify-center gap-4 md:gap-6 group transition-all duration-300 hover:scale-105"
            >
              <div className="p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-300 gold-glow">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-gold" />
              </div>
              <span className="font-sans text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide break-all">
                www.rootxglobal@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={handleConsultation}
            className="luxury-button-primary text-base md:text-lg lg:text-xl px-12 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 rounded-none font-sans font-semibold tracking-widest"
          >
            Book Private Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
