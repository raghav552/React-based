import React from 'react';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};

export default Home;