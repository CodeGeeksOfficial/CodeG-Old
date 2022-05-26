import React from 'react'
import logo from '../Assets/CodeG-Logo.png'
import discord_logo from '../Assets/discord_logo.png'
import './Mainbox.css'

function Mainbox() {
  return (
    <div className="mainbox-card">
      <div className="parent d-flex flex-row justify-content-center">
        <div className="left">
          <div className="left-top">
            <div className="left-top-text">
              CODE<br />GEEKS
            </div>
            <div className="left-bottom">
              <div className="left-bottom-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </div>
              <div className="left-bottom-sign d-flex flex-row justify-content-evenly">
                <input
                  className="mail"
                  type="email"
                  placeholder="Email Address"
                ></input>
                <button className="button">Sign up for CodeG</button>
              </div>
            </div>
          </div>
          <div className="left-right"></div>
        </div>
        <div className="right">
          <div className="logo">
            <div className="logo_background">
              <div className="logo_background_animation"></div>
              <div className="cg_logo_container">
                <img className="cg_logo" src={logo} alt="cg_logo"></img>
              </div>
              <div className="discord_logo_container">
                <img
                  className="discord_logo" src={discord_logo} alt="discord_logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbox;
