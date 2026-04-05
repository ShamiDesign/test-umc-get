import React, { useEffect } from "react";
import "./i18n";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import i18next from "i18next";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

export default function App() {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage") || "ar";
    i18next.changeLanguage(savedLanguage);
    document.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/OurMessage" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </>
  );
}
