import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Links from "./components/Links";
import Contact from "./components/Contact";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
import EditArtwork from "./components/EditArtwork";

const AppRouter = () => (
  <div>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Links" element={<Links />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/edit-artwork" element={<EditArtwork />} />
    </Routes>
  </div>
);

export default AppRouter;
