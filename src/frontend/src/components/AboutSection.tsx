import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-luxury-black slide-section"
    >
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-30" />
      
      <div
        className={`relative container mx-auto px-6 md:px-12 max-w-5xl transition-all duration-1500 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="glassmorphism-card p-12 md:p-16 lg:p-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-8 md:mb-12 text-center">
            The ROOT X GLOBAL Standard
          </h2>
          
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center font-light tracking-wide">
            ROOT X GLOBAL is an elite global growth and expansion partner delivering premium marketing, 
            business development, and strategic sales solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
