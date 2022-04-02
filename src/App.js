import React, { useEffect } from "react";
import Card from "./Component/Card";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10  sm: px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" aos-delay="400">
        <About />
      </div>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
