import React from 'react'
import Hero from '../components/hero/Hero';
import Highlights from '../components/highlights/Highlights';
import Testimonials from '../components/testimonials/Testimonials';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
    </div>
  )
}


export default HomePage