import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import OurValues from "./components/OurValues";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <OurValues />
      <Contact />
      <Footer />
    </>
  );
}
