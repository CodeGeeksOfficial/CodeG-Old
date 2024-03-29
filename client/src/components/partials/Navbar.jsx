import React, { useState } from "react";
import logo from "assets/images/CodeG-Logo.png";
import placeholderProfilePic from "assets/images/placeholder-profile-pic.png";
import "assets/css//Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

let navItems = [
  { title: "Home", link: "/" },
  { title: "Team", link: "/team" },
  { title: "About", link: "/about" },
  { title: "Practice", link: "/practice" },
];

//TODO use memo hooks
//TODO research about vite and tysx (Better dev experience)

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const leftNavbar = displayMenu
    ? "navbar-left-menu"
    : "navbar-left-menu navbar-left-menu-close";
  return (
    <div className="header-navbar">
      <div className="navbar-hamburger-icon__container">
        {displayMenu && <IoMdClose onClick={() => setDisplayMenu(false)} />}
        {!displayMenu && (
          <GiHamburgerMenu onClick={() => setDisplayMenu(true)} />
        )}
      </div>
      <nav className="header-nav-list">
        <ul className="header-nav-links">
          {navItems.map((navItem) => (
            <li className="navbar-link-element" key={navItem.title}>
              <Link className="navbar-link-element" to={navItem.link}>
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="codeg-badge">
        <Link className="codeg-badge-link" to="/">
          <img className="navbar-logo-img" src={logo} alt="CodeG Logo" />
          <p className="logo-name">
            CODE<span className="logo-name-G">G</span>
          </p>
        </Link>
      </div>
      <div className="user-info">
        {/* FIXME */}
        {/* TODO: Swap these elements */}
        {!localStorage.getItem("authToken") && (
          <>
            <Link className="sign-in" to="/login">
              Sign In
            </Link>
            <Link className="sign-up" to="/register">
              Sign Up
            </Link>
          </>
        )}

        {localStorage.getItem("authToken") && (
          <>
            <div
              className="navbar-profile-badge"
              onClick={() => {
                localStorage.removeItem("authToken");
              }}
            >
              <img
                className="navbar-profile-pic"
                src={placeholderProfilePic}
                alt=""
              />
              <div className="navbar-profile-name">
                {jwt_decode(localStorage.getItem("authToken")).username}
              </div>
            </div>
          </>
        )}
      </div>
      <nav className={leftNavbar}>
        <ul className="navbar-left-menu-links__container">
          {navItems.map((e) => (
            <li
              className="navbar-left-menu-link"
              key={e.title}
              onClick={() => window.open(e.link)}
            >
              {e.title}
            </li>
          ))}
        </ul>
        <div className="navbar-left-menu-auth__container">
          {/* FIXME */}
          <a href="#" className="sign-in">
            Sign In
          </a>
          <a href="#" className="sign-up">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}
