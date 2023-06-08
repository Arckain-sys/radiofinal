import React, { useRef } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TVSection from './components/TVSection';
import ContactSection from './components/ContactSection';
import IndexNavbar from 'components/IndexNavbar';
import "./assets/css/App.css";

function App() {
  const tvSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const handleClick = (section) => {
    if (section === 'tv') {
      tvSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="App">
      <IndexNavbar onTVButtonClick={() => handleClick('tv')} onContactButtonClick={() => handleClick('contact')} />
      <div className="gallery">
        <Hero />
        <TVSection ref={tvSectionRef} />
        <ContactSection ref={contactSectionRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

