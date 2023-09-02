
import './App.css';
import './assets/css/root.css'
import Featured from './components/Featured';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partner from './components/Partner';
import Management from './components/Management';
import Team from './components/Team';
import Sucess from './components/Sucess';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Gradient_card from './components/Gradient_card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import BackToTop from './components/BackToTop';
import Preloder from './components/Preloder';
function App() {
  useEffect(() => {
    AOS.init();

    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 1500)
    document.body.classList.add('overflow-hidden')

  }, [])
  return (
    <div className='overflow-hidden'>
      <Preloder />
      <Nav />
      <Featured />
      <About />
      <Services />
      <Partner />
      <Management />
      <Team />
      <Sucess />
      <Gradient_card />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
