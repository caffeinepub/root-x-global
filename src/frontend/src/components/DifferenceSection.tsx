import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const advantages = [
  'Data-Driven Growth Strategy',
  'Performance-Focused Execution',
  'Premium Client Support',
  'Local & Global Market Expertise',
  'Result-Oriented Approach',
];

export default function DifferenceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-luxury-black slide-section"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-navy-dark/20" />
      </div>

      <div
        className={`relative container mx-auto px-6 md:px-12 max-w-5xl transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-gradient mb-16 md:mb-20 text-center">
          Why Global Brands Trust Us
        </h2>

        <div className="space-y-6 md:space-y-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 md:gap-8 glassmorphism-card p-6 md:p-8 transition-all duration-700 hover:scale-105`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold/20 flex items-center justify-center gold-glow">
                <Check className="w-6 h-6 md:w-8 md:h-8 text-gold" strokeWidth={3} />
              </div>
              <p className="font-sans text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide">
                {advantage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
