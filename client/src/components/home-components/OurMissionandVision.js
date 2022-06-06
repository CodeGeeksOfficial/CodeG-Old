import React from 'react';
import "./OurMissionandVision.css";
import Illustration from '../../Assets/missionandvision-illustration.png';
{/*import Arrowhead from '../../Assets/icons8-chevron-right-material-rounded-96.png'*/}

function OurMissionandVision({heading, description, text_link, images}) {
    return (
        <div className="OurMissionandVision">
            <div className="OurMissionandVision-text">
                <div className="OurMissionandVision-Headline">
                    {heading}
                </div>
                <div className="OurMissionandVision-timeline-line">
                    <div className="OurMissionandVision-description">
                        {description}
                    </div>
                    <div className="OurMissionandVision-link">
                        <u>{text_link}</u> &#8827;{/*<img classname="arrowhead-right" src={Arrowhead}/>*/}
                    </div>
                </div>
            </div>
            <div className="OurMissionandVision-illustration">
            <img className="illust" src={images} alt="our mission and vision"/>
            </div>
        </div>
    )
}

export default OurMissionandVision
