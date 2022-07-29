import React from "react";
import "./App.css";
import ContactUs from "./Components/Pages/contact-us/ContactUs";
import JazanRegion from "./Components/Pages/Jizan-region/JazanRegion";
import Navbar from "./Components/Pages/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import JazanSidebar from "./Components/Pages/jazancomponents/JazanSidebar";
import MunicipalitiesSidebar from "./Components/Pages/jazancomponents/MunicipalitiesSidebar";
import Map from "./Components/Pages/map/Map"
import Provinces from "./Components/Pages/jazancomponents/Provinces";
import CentersSidebar from "./Components/Pages/jazancomponents/CentersSidebar";
import Footer from "./Components/Pages/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/jazan_region" element={<JazanRegion />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/jazan" element={<JazanSidebar />} />
        <Route path="/jazanMunici" element={<MunicipalitiesSidebar />} />
        <Route path="/provinces" element={<Provinces />} />
        <Route path="/centers" element={<CentersSidebar />} />
      </Routes>
      <Footer />

    </div>
  );
};

export default App;
