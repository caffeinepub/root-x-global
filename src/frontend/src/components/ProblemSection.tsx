import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AlertCircle, TrendingDown, Eye, Users } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    text: 'No consistent leads',
  },
  {
    icon: Eye,
    text: 'Weak online presence',
  },
  {
    icon: AlertCircle,
    text: 'Poor branding visibility',
  },
  {
    icon: Users,
    text: 'No structured sales system',
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-luxury-black via-navy-dark to-luxury-black slide-section"
    >
      <div
        className={`container mx-auto px-6 md:px-12 transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-gradient mb-16 md:mb-24 text-center">
          The Problem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`glassmorphism-card p-8 md:p-12 transition-all duration-700 hover:scale-105 group`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="p-5 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-500 gold-glow">
                    <Icon className="w-12 h-12 md:w-14 md:h-14 text-gold" strokeWidth={2} />
                  </div>
                  
                  <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide leading-tight">
                    {problem.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
