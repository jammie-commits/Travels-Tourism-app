import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ScrollReveal from 'scrollreveal';

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #reviews,
        #destinations,
        #footer
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
   
    </>
  );
}
