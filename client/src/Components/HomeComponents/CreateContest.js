//TODO Doubt: How to name react component file with more than one word like this ? What is the standard ?

import React from "react";
import "./CreateContest.css";
import Illustration from "../../Assets/Create-Contest-Illustration.png";

export default function Create_Contest_Card() {
  return (
    <div className="create-contest-card">
      <div className="create-contest-card-content">
        <div href="#" className="create-contest-link">
          <span>Create a Contest</span>
        </div>
        <div className="create-contest-card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          corporis nihil quas, fuga temporibus, veniam vero pariatur molestias
          quo totam illo recusandae incidunt iure mollitia eos magni! Aut, alias
          necessitatibus.
        </div>
      </div>
      <div className="create-contest-card-illustration">
        <img src={Illustration} alt="Create a contest" />
      </div>
    </div>
  );
}
