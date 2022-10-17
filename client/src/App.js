import React from "react";
import "./App.css";
import Navbar from "components/partials/Navbar";
import Footer from "components/partials/Footer";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "pages/About";
import Contact from "pages/Contact";
import Team from "pages/Team";
import Practice from "pages/Practice";
import Contest from "pages/Contest";
import UserProfile from "pages/UserProfile";

import LoginScreen from "components/auth/LoginScreen";
import RegisterScreen from "components/auth/RegisterScreen";
import ForgotPasswordScreen from "components/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "components/auth/ResetPasswordScreen";
import VerifyUserScreen from "components/auth/VerifyUserScreen";

function App() {
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

        {/* Auth Routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/forgotpassword" element={<ForgotPasswordScreen />} />
        <Route
          path="/resetpassword/:resetToken"
          element={<ResetPasswordScreen />}
        />
        <Route path="/verifyuser/:verifyToken" element={<VerifyUserScreen />} />
      </Routes>
      {/* <Home /> */}
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
