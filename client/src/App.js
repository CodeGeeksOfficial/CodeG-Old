import React from "react";
import "./App.css";
import Navbar from "components/partials/Navbar";
import Footer from "components/partials/Footer";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "pages/SignUp";

function App() {
  return (
    // <Mainbox/>
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
