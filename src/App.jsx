
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;