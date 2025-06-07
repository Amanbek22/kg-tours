import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Tours from '../components/Tours';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.state?.scrollToBooking) {
      const element = document.getElementById('booking');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tours />
      <Testimonials />
      <Gallery />
      <BookingForm />
      <Footer />
    </>
  );
};

export default HomePage;