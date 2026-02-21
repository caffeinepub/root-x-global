import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PowerStatement() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-40 lg:py-48 bg-luxury-black overflow-hidden slide-section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-dark/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Gold light streak animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gold-light-streak" />
      </div>

      <div
        className={`relative container mx-auto px-6 md:px-12 transition-all duration-2000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center leading-tight">
          <span className="block text-gold-gradient mb-4 md:mb-6">
            We Don't Just Build Businesses.
          </span>
          <span className="block text-gold-gradient-bright">
            We Build Global Brands.
          </span>
        </h2>
      </div>
    </section>
  );
}
