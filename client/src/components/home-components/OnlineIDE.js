import React from "react";
import "./OnlineIDE.css";
import Onlineide_gif from "assets/online-ide-gif.gif";
{/*import Arrowhead from 'assets/icons8-chevron-right-material-rounded-96.png'*/}

function OnlineIDE() {
  return (
    <div className="OnlineIDE">
      <div className="OnlineIDE-illustration">
        <div className="OnlineIDE-Headline">
          {/*&#9675;*/}Online IDE
        </div>
        <div className="OnlineIDE-timeline-line">
          <img className="illust" src={Onlineide_gif} alt="OnlineIDE" />
        </div>
      </div>
      <div className="OnlineIDE-text">
        <div className="OnlineIDE-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </div>
        <div className="OnlineIDE-link">
          &#8826; <u>Explore our IDE</u>
          {/*<img classname="arrowhead-right" src={Arrowhead}/>*/}
        </div>
      </div>
    </div>
  );
}
export default OnlineIDE;
