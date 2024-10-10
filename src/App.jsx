import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiance from "./components/Experiance";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experiance />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
