import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
import ProfileCard from "./ProfileCard";
import Navbar from "./NavBar";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import Skills from "./Skills"
import Footer from "./Footer";
import About from "./About"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero/>
        {/* <ProfileCard/> */}
        <ProductGrid />
        <Skills/>
        <Footer />
      </div>
    </>
  );
}

export default App;
