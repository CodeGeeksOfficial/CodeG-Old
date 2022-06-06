import React from "react";
import logo from "assets/CodeG-Logo.png";
import "components/partials/Navbar.css";
let navItems = [
  { title: "Home", link: "https://www.google.com" },
  { title: "Team", link: "https://www.google.com" },
  { title: "About", link: "https://www.google.com" },
  { title: "Practice", link: "https://www.google.com" },
];

//TODO use memo hooks
//TODO research about vite and tysx (Better dev experience)

export default function Navbar() {
  return (
    <div className="header-navbar">
      <nav className="nav-list">
        <ul className="header-nav-links">
          {navItems.map((e) => {
            return (
              <li key={e.title} onClick={() => window.open(e.link)}>
                <div>{e.title}</div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="codeg-badge">
        <div className="logo-img">
          <img src={logo} alt="CodeG Logo" />
        </div>
        <div className="logo-name">
          CODE<span className="logo-name-G">G</span>
        </div>
      </div>
      <div className="user-info">
        <a href="#" className="sign-in">
          Sign In
        </a>
        <a href="#" className="sign-up">
          Sign Up
        </a>
      </div>
    </div>
  );
}
