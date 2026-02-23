import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TrendingUp, Share2, Briefcase, Target, Sparkles } from 'lucide-react';

const focusAreas = [
  { icon: TrendingUp, text: 'Digital Marketing' },
  { icon: Share2, text: 'Social Media Advertising' },
  { icon: Briefcase, text: 'Business Development' },
  { icon: Target, text: 'Lead Generation' },
  { icon: Sparkles, text: 'Branding Strategy' },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-luxury-black slide-section"
    >
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-30" />
      
      <div
        className={`relative container mx-auto px-6 md:px-12 max-w-6xl transition-all duration-1500 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="glassmorphism-card p-12 md:p-16 lg:p-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold-gradient mb-8 md:mb-12 text-center">
            About ZINMATT GLOBAL
          </h2>
          
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center font-light tracking-wide mb-12">
            ZINMATT GLOBAL is a performance-driven digital growth agency specializing in transforming brands into global authorities through strategic digital solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gold/5 hover:bg-gold/10 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gold/20">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-sans text-base md:text-lg text-white/90 font-light">
                    {area.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
