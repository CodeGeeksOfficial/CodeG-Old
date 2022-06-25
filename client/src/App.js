import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "components/partials/Navbar";
import Footer from "components/partials/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";
import About from "pages/About";
import Contact from "pages/Contact";
import Team from "pages/Team";
import Practice from "pages/Practice";
import Contest from "pages/Contest";
import UserProfile from "pages/UserProfile";

function App() {
  // const location = useLocation();
  // const [displayNavbar, setDisplayNavbar] = useState(true);

  // useEffect(() => {
  //   if (location.pathname === "/signup" || location.pathname === "/signin")
  //     setDisplayNavbar(false);
  //   else setDisplayNavbar(true);
  // }, [displayNavbar]);

  // console.log(history);
  return (
    // <Mainbox/>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {/* <Home /> */}
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
