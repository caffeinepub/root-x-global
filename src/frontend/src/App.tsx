import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import DifferenceSection from './components/DifferenceSection';
import PowerStatement from './components/PowerStatement';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-luxury-black overflow-x-hidden">
      <div className="slide-container">
        <HeroSection />
      </div>
      <div className="slide-container">
        <ProblemSection />
      </div>
      <div className="slide-container">
        <ServicesSection />
      </div>
      <div className="slide-container">
        <DifferenceSection />
      </div>
      <div className="slide-container">
        <PowerStatement />
      </div>
      <div className="slide-container">
        <ContactSection />
      </div>
      <div className="slide-container">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
