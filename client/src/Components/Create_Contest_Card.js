import React from 'react'
import './Create_Contest_Card.css'
import Illustration from '../Assets/createacontest-illustration.png' 

export default function Create_Contest_Card() {
  return (
      <div className="create-contest-card">
          <div className="create-contest-card-content">
            <div href="#" className="create-contest-link">Create a Contest</div>
            <div className="create-contest-card-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti corporis nihil quas, fuga temporibus, veniam vero pariatur molestias quo totam illo recusandae incidunt iure mollitia eos magni! Aut, alias necessitatibus.
            </div>
          </div>
          <div className="create-contest-card-pic">
              <img src={Illustration} alt="Create a contest Picture" />
          </div>
      </div>
  )
}
