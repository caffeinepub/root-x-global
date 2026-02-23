import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TrendingUp, Share2, Search, Zap, Palette, Globe } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
  },
  {
    icon: Share2,
    title: 'Facebook & Instagram Ads',
  },
  {
    icon: Search,
    title: 'Google Ads Management',
  },
  {
    icon: Zap,
    title: 'High-Converting Funnels',
  },
  {
    icon: Palette,
    title: 'Graphic Design & Branding',
  },
  {
    icon: Globe,
    title: 'International Business Growth Strategy',
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-luxury-black via-charcoal to-luxury-black slide-section"
    >
      <div
        className={`container mx-auto px-6 md:px-12 transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-gradient mb-16 md:mb-24 text-center">
          Our Elite Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`service-card group transition-all duration-700 delay-${index * 100}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative p-8 md:p-10 h-full flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-500">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-gold" />
                  </div>
                  
                  <h3 className="font-sans text-lg md:text-xl font-semibold text-white tracking-wide leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
