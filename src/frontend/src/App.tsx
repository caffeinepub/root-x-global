import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import DifferenceSection from './components/DifferenceSection';
import PortfolioSection from './components/PortfolioSection';
import CTASection from './components/CTASection';
import PowerStatement from './components/PowerStatement';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen bg-luxury-black overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="slide-container">
        <HeroSection />
      </div>
      <div className="slide-container">
        <AboutSection />
      </div>
      <div className="slide-container">
        <ServicesSection />
      </div>
      <div className="slide-container">
        <DifferenceSection />
      </div>
      <div className="slide-container">
        <PortfolioSection />
      </div>
      <div className="slide-container">
        <CTASection />
      </div>
      <div className="slide-container">
        <PowerStatement />
      </div>
      <div className="slide-container">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
