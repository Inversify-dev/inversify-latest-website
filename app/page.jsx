'use client';

import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import FeatureServices from '../components/FeatureServices';
import FaqSection from '../components/FaqSection';
import TestimonialSection from '../components/TestimonialSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroBanner />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <FeatureServices />
          <FaqSection />
          <TestimonialSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
