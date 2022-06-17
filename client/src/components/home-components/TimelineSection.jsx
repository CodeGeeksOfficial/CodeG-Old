import React from "react";
import "assets/css/TimelineSection.css";
import TypeOneComponent from "components/home-components/timeline-components/TypeOneComponent";
import TypeTwoComponent from "components/home-components/timeline-components/TypeTwoComponent";
import ClubComponent from "components/home-components/timeline-components/TypeThreeComponent";
import { community_data, club_data } from "assets/data/TimelineComponentsData";
import mission_illustration from "assets/images/missionandvision-illustration.png";
import ide_illustration from "assets/images/online-ide-gif.gif";
import practice_illustration from "assets/images/practice-illustration.png";
import starter_illustration from "assets/images/starter-illustration.png";
import builders_illustration from "assets/images/builders-illustration.png";
import crackers_illustration from "assets/images/crackers-illustration.png";
import affinity_illustration from "assets/images/affinity-illustration.png";

const timelineNavItems = [
  { title: "Our Misson", link: "https://www.google.com" },
  { title: "Online IDE", link: "https://www.google.com" },
  { title: "Practice", link: "https://www.google.com" },
  { title: "Clubs", link: "https://www.google.com" },
];

export const TimelineSection = () => {
  return (
    <>
      <nav className="timeline-nav-list">
        {timelineNavItems.map((e) => {
          return (
            <li
              key={e.title}
              onClick={() => {
                window.open(e.link);
              }}
            >
              <div>{e.title}</div>
            </li>
          );
        })}
      </nav>
      <div className="timeline-community-container">
        <h1>Explore our community</h1>
        <div className="community-components-containers">
          <TypeOneComponent
            heading={community_data[0].heading}
            description={community_data[0].description}
            link_title={community_data[0].link_title}
            image={mission_illustration}
            id="first-id"
          />
          <TypeTwoComponent
            heading={community_data[1].heading}
            description={community_data[1].description}
            link_title={community_data[1].link_title}
            image={ide_illustration}
            id="second-id"
          />
          <TypeOneComponent
            heading={community_data[2].heading}
            description={community_data[2].description}
            link_title={community_data[2].link_title}
            image={practice_illustration}
            id="third-id"
          />
        </div>
      </div>
      <div className="timeline-clubs-container">
        <div className="clubs-container">
          <h1>Clubs</h1>
          <div className="clubs-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptas delectus harum ab est repudiandae odio commodi sapiente
            distinctio, dolores exercitationem minima labore necessitatibus
            molestiae veritatis tenetur accusamus aperiam alias sint! Similique
            a impedit eius!
          </div>
          <div className="clubs-components-container">
            <div className="club-components">
              <ClubComponent
                club_name={club_data[0].heading}
                description={club_data[0].description}
                image={starter_illustration}
              />
              <ClubComponent
                club_name={club_data[1].heading}
                description={club_data[1].description}
                image={builders_illustration}
              />
              <ClubComponent
                club_name={club_data[2].heading}
                description={club_data[2].description}
                image={crackers_illustration}
              />
              <ClubComponent
                club_name={club_data[3].heading}
                description={club_data[3].description}
                image={affinity_illustration}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
