import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import HeroSection from "./Components/HeroSection";
// import StudySection from "./Components/StudySection";
// import CampusDescription from "./Components/CampusDescription";
// import Footer from "./Components/Footer";
// import WhySection from "./Components/WhySection";
// import UpcomingEvent from "./Components/UpcomingEvent";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admissions from "./Pages/Admissions";
import Contact from "./Pages/Contact";
import Academics from "./Pages/Academics";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
