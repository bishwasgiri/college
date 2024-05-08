import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admissions from "./Pages/Admissions";
import Contact from "./Pages/Contact";
import Academics from "./Pages/Academics";
// import Profile from "./Pages/Dashboard/Profile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import ManageEvents from "./Pages/Dashboard/ManageEvents";
import ManageNotice from "./Pages/Dashboard/ManageNotice";

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
        {/* <Route path="/admin/profile" element={<Profile />} /> */}
        <Route path="/staff/login" element={<Login />} />
        <Route path="/staff/signup" element={<SignUp />} />
        {/* <Route path="/admin/user-alumni" element={<ManageEvents />} /> */}
        {/* <Route path="/admin/user-teachers" element={<ManageEvents />} /> */}
        <Route path="/admin/manage-events" element={<ManageEvents />} />
        <Route path="/admin/manage-notice" element={<ManageNotice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
