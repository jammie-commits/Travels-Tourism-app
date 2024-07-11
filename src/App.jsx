import React, { useEffect } from 'react'
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import ScrollToTop from './components/ScrollToTop';
import scrollreveal from "scrollreveal";


export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #reviews,
        #destinations,,
        #footer,
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Hero />
    <AboutUs />
    <Destinations />
    <Reviews />
    <Footer />
    </>
  )
}
