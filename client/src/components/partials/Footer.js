import React from "react";
import "./Footer.css";
import discordlogo from "assets/discord-footer-logo.png";
import telegramlogo from "assets/telegram-footer-logo.png";
import instagramlogo from "assets/instagram-footer-logo.png";
import facebooklogo from "assets/facebook-footer-logo.png";
import youtubelogo from "assets/youtube-footer-logo.png";

export default function Footer() {
  return (
    <div className="footer-container">
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
        <img className="footer-socialmedia-icon" src={discordlogo} alt="Discord-logo"></img>
        <img className="footer-socialmedia-icon" src={telegramlogo} alt="Telegram-logo"></img>
        <img className="footer-socialmedia-icon" src={instagramlogo} alt="Instagram-logo"></img>
        <img className="footer-socialmedia-icon" src={facebooklogo} alt="Facebook-logo"></img>
        <img className="footer-socialmedia-icon" src={youtubelogo} alt="Youtube-logo"></img>
      </div>
    </div>
  );
}
