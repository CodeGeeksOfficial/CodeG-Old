import React from "react";
import "./App.css";
import Navbar from "components/partials/Navbar";
import Footer from "components/partials/Footer";
import Home from "pages/Home";

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
