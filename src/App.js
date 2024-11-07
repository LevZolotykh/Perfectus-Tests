import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Clinic from "./pages/Clinic";
import Prices from "./pages/Prices";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="clinic" element={<Clinic />} />
          <Route path="prices" element={<Prices />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
