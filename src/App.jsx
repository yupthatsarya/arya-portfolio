import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <main>
      <Hero onPreloadComplete={() => setPreloaderComplete(true)} />

      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <Navbar />
          <Services />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;
