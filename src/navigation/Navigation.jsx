import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Infrastructure from "../pages/Infrastructure/Infrastructure";
import QualityAssurance from "../pages/QualityAssurance/QualityAssurance";
import HdpeTapes from "../pages/Products/HdpeTapes";
import WovenBags from "../pages/Products/WovenBags";
import WovenFabrics from "../pages/Products/WovenFabrics";
import Sustainability from "../pages/About/Sustainability";
import OurTeam from "../pages/About/OurTeam";
import AboutUs from "../pages/About/AboutUs";
import EnquireUs from "../pages/EnquireUs/EnquireUs";
import CertificatePage from "../pages/CertificatePage/CertificatePage";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/quality-assurance" element={<QualityAssurance />} />
      <Route path="/enquire-us" element={<EnquireUs />} />

      {/* products pages */}
      <Route path="/products/hdpe-tapes" element={<HdpeTapes />} />
      <Route path="/products/woven-fabrics" element={<WovenFabrics />} />
      <Route path="/products/woven-bags" element={<WovenBags />} />

      {/* about pages */}
      <Route path="/about/sustainability" element={<Sustainability />} />
      <Route path="/about/our-team" element={<OurTeam />} />
      <Route path="/about/about-us" element={<AboutUs />} />

      <Route path="/certificate" element={<CertificatePage />} />
    </Routes>
  );
};

export default Navigation;
