import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "components/partials/Navbar";
import Footer from "components/partials/Footer";
import Home from "pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
