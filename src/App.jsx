import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CallToAction from "./components/CTA/CallToAction";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicesOverview from "./components/ServicesOverview/ServicesOverview";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import FitnessCoach from "./pages/FitnessCoach";
import "./styles/global.css";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null; // does not render anything
}

function AppRoutes() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Header />

      <main>
        <Routes>
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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fitness-coach-websites" element={<FitnessCoach />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
