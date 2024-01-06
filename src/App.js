import './App.css';
import AnnouncementBar from './Components/AnnouncementBar';
import CallToAction from './Components/CallToAction';
import Component1 from './Components/Component1';
import Feature1 from './Components/Feature1';
import Feature2 from './Components/Feature2';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import LogoCloud from './Components/LogoCloud';
import NavBar from './Components/NavBar';
import Testimonial from './Components/Testimonial';

function App() {
  return (
      <div className='App'>
        {/* Components */}
        <AnnouncementBar />
        <NavBar />
        <HeroSection />
        <LogoCloud />
        <Feature1 />
        <Feature2 />
        <Component1 />
        <Testimonial />
        <CallToAction />
        <Footer />
      </div>
  );
}

export default App;
