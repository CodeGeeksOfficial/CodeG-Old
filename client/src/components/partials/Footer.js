import React from "react";
import "./Footer.css";
import discordlogo from "assets/discord-footer-logo.png";
import telegramlogo from "assets/telegram-footer-logo.png";
import instagramlogo from "assets/instagram-footer-logo.png";
import facebooklogo from "assets/facebook-footer-logo.png";
import youtubelogo from "assets/youtube-footer-logo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <ul>
          <li>
            <div>&#169; 2021 CodeG</div>
          </li>
          <li>
            <div>Terms</div>
          </li>
          <li>
            <div>Privacy</div>
          </li>
          <li>
            <div>Contact</div>
          </li>
        </ul>
      </div>
      <div className="footer-socialmedia">
        <img className="footer-socialmedia-icon" src={discordlogo}></img>
        <img className="footer-socialmedia-icon" src={telegramlogo}></img>
        <img className="footer-socialmedia-icon" src={instagramlogo}></img>
        <img className="footer-socialmedia-icon" src={facebooklogo}></img>
        <img className="footer-socialmedia-icon" src={youtubelogo}></img>
      </div>
    </div>
  );
}
