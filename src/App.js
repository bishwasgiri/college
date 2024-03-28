import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admissions from "./Pages/Admissions";
import Contact from "./Pages/Contact";
import Academics from "./Pages/Academics";
import Profile from "./Pages/Dashboard/Profile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/staff/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
