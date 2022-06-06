import React from 'react';
import "./ExploreCommunityTimeline.css";
import OurMissionandVision from "./OurMissionandVision";
import OnlineIDE from "./OnlineIDE";
import Illustration from 'assets/missionandvision-illustration.png';
import practice from 'assets/practice-illustration.png';

function ExploreCommunityTimeline() {
    const missionAndVision_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    const practice_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    return (
        <div className="ExploreCommunityTimeline">
            <div className="ExploreTheCommunity-Headline">
                <b>Explore the Community</b>
            </div>
            <div className="Timeline-content">
                <div className="Timeline-components-container">
            <OurMissionandVision heading="Our Mission and Vision" description={missionAndVision_description} text_link="Explore More About Us" images={Illustration}/>
            <OnlineIDE/>
            <OurMissionandVision heading="Practice" description={practice_description} text_link="Practice Section" images={practice}/>
            </div>
            </div>
        </div>
    )
}

export default ExploreCommunityTimeline

