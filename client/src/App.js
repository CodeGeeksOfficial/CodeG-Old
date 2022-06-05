import React from "react";
import "./App.css";
import Navbar from "./Components/Partials/Navbar";
import Footer from "./Components/Partials/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    // <Mainbox/>
    <div className="App">
      <Navbar />
      <Home />
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
