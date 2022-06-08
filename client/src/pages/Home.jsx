import React from "react";
import CreateContestCard from "components/home-components/CreateContest";
import Mainbox from "components/home-components/Mainbox";
import BecomeCodie from "components/home-components/BecomeCodie";
// import MidNavigation from "components/home-components/MidNavigation";
// import ExploreCommunityTimeline from "components/home-components/ExploreCommunityTimeline";
import {TimelineSection} from 'components/home-components/TimelineSection'

//programatic classes react

const Home = () => {
  return (
    <>
      <Mainbox />
      <section className="create-contest-card-container">
        <CreateContestCard />
      </section>
      {/* <MidNavigation /> */}
      {/* <section className="explore-community-timeline-container">
      <ExploreCommunityTimeline/>
      </section> */}
      <section className="timeline-section">
        <TimelineSection/>
      </section>
      <section className="become-codie-card-container">
        <BecomeCodie />
      </section>
    </>
  );
};

export default Home;
