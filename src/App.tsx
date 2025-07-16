import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Palmares from "./components/Palmares";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Palmares />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
