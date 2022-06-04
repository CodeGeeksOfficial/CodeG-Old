import React from 'react'
import logo from '../Assets/CodeG-Logo.png'
import discord_logo from '../Assets/Discord-Logo.png' //TODO Doubt: can this .. thing in this line be used to exploit file system of a server when deployed on a server ??
import './Mainbox.css'

export default function Mainbox() {
  return (
    <div className="mainbox-card">
      <div className="mainbox-content">
        <div className="mainbox-container">
          <div className="mainbox-code-geeks-text">
            CODE<br />GEEKS
          </div>
          <div className="mainbox-info">
            <div className="mainbox-codeg-tagline">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text.
            </div>
            <div className="mainbox-signup">
              <input className="mail-input-box" type="email" placeholder="Email Address"></input>
              <button className="mail-button">Sign up for CodeG</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mainbox-animated-logo">
        <div className="white-border-container">
          <div className="logo-background">
            <div className="logo-background-animation"></div>
            <div className="cg-logo-container">
              <img className="cg-logo" src={logo} alt="cg_logo"></img>
            </div>
            <div className="discord_logo_container">
              <img className="discord_logo" src={discord_logo} alt="discord_logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}