import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ProductSection from './components/ProductSection';
import PrivacySection from './components/PrivacySection';
import ValueProposition from './components/ValueProposition';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <ProductSection />
        <ValueProposition />
        <FAQ />
        <Testimonials />
        <ContactForm />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;