import React from 'react'
import logo from '../Assets/CodeG-Logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="header-navbar">
        <nav className="nav-list">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Practice</a></li>
            </ul>
        </nav>
        <div className="codeg-badge">
            <div className="logo-img"><img src = {logo}/></div>
            <div className="logo-name">CODE<span className="logo-name-G">G</span></div>
        </div>
        <div className="user-info">
            <a href="#" class="sign-in">Sign In</a>
            <a href="#" class="sign-up">Sign Up</a>
        </div>
    </div>
  )
}
