import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}