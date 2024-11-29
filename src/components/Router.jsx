import React from "react";
import Home from "../screens/Home";
import AboutUS from "../screens/AboutUS";
import Services from "../screens/Services";
import ContactUS from "../screens/ContactUS";
import Training from "../screens/Training";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/training" element={<Training />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <h2>404 Page NOT Found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
