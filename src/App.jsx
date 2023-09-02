import "./App.css";

import About from "./components/about/About";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
