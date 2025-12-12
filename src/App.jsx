import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FourPillars from './components/FourPillars';
import Schedule from './components/Schedule';
import ProjectsShowcase from './components/ProjectsShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <FourPillars />
      </section>

      <section id="program">
        <Schedule />
      </section>

      <section id="project">
        <ProjectsShowcase />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}

export default App;
