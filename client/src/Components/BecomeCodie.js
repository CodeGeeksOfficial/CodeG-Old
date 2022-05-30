import React from 'react'
import './BecomeCodie.css'
import Illustration from '../Assets/Become-Codie-Illustration.png' 
import DiscordLogo from '../Assets/Discord-Bubble-Color.png'
import TelegramLogo from '../Assets/Telegram-Logo.png'

export default function BecomeCodie() {
  return (
    <div className="become-codie-card">
      <div className="become-codie-card-content">
        <span>Become A Codie Now !</span>
        <div className="become-codie-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis nihil quas, fuga temporibus, veniam vero pariatur molestias quo totam illo recusandae incidunt iure mollitia eos magni! Aut, alias necessitatibus.
        </div>
        <div className="become-codie-links">
          <div className="become-codie-discord-link">
            <img src={DiscordLogo} alt="Discord Logo" />
            <div className="join-us-at-discord">
              <div className="text">
              Join us @ <br/>
              </div>
              <span>Discord</span>
            </div>
          </div>
          <div className="become-codie-telegram-link">
            <img src={TelegramLogo} alt="Telegram Logo" />
            <div className="join-us-at-telegram">
            <div className="text">
              Join us @ <br/>
              </div>
              <span>Telegram</span>
            </div>
          </div>
        </div>
      </div>
      <div className="become-codie-card-illustration">
          <img src={Illustration} alt="become a codie" />
      </div>
    </div>
  )
}
