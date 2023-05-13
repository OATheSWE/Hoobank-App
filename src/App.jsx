import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';






function App() {

  return(
    <div className="bg-primary w-full overflow-hidden z-10">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTopButton />
    </div>
    
  )




  


  
  
}

export default App;