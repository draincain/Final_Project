import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Store from "./components/Store";
import Contact from "./components/Contact";
import About from "./components/About";

const AppRouter = () => (
  <div>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Store" element={<Store />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default AppRouter;
