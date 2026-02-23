import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, TrendingUp, Users, Globe } from 'lucide-react';

const portfolioItems = [
  {
    icon: Award,
    title: 'Brand Authority',
    description: 'Elevated 50+ brands to industry leadership',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: '300% average ROI for our clients',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: '10,000+ qualified leads generated monthly',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Campaigns across 25+ countries',
  },
];

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-luxury-black via-charcoal to-luxury-black slide-section overflow-hidden"
    >
      <div
        className={`container mx-auto px-6 md:px-12 transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-gradient mb-16 md:mb-24 text-center">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group glassmorphism-card p-8 hover:scale-105 transition-all duration-500 hover:shadow-gold-glow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-5 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-500 gold-glow">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base text-white/70 font-light leading-relaxed">
                    {item.description}
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
