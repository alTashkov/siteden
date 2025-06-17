// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Re-import Routes and Route

// Import your Header component
import Header from "./components/Header/Header";
// Import your new Home page component
import Home from "./pages/Home";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CallToAction from "./components/CTA/CallToAction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicesOverview from "./components/ServicesOverview/ServicesOverview";
// Ensure your global styles are imported here
import "./styles/global.css";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import FitnessCoach from "./pages/FitnessCoach";

function App() {
  return (
    <Router>
      {/* The Header component will appear on all pages */}
      <Header />

      {/* The main content area, where different pages will be rendered */}
      <main>
        <Routes>
          {/* Define route for your Home page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <ServicesOverview />
                <WhyChooseUs />
                <CallToAction />
              </>
            }
          />
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/fitness-coach-websites" element={<FitnessCoach />}></Route>
          <Route path="/services/web-development" element={<WebDevelopment />}></Route>
          {/* Future pages would go here, e.g.:
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          */}
        </Routes>
      </main>

      {/* Optionally, you might add a Footer here later if desired */}
    </Router>
  );
}

export default App;
