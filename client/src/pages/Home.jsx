import React from "react";
import CreateContestCard from "components/home-components/CreateContest";
import Mainbox from "components/home-components/Mainbox";
import BecomeCodie from "components/home-components/BecomeCodie";
import MidNavigation from "components/home-components/MidNavigation";
import ExploreCommunityTimeline from "components/home-components/ExploreCommunityTimeline";
//programatic classes react

const Home = () => {
  return (
    <>
      <Mainbox />
      <section className="create-contest-card-background">
        <CreateContestCard />
      </section>
      <MidNavigation />
      <section className="explore-community-timeline-container">
      <ExploreCommunityTimeline/>
      </section>
      <section className="become-codie-card-background">
        <BecomeCodie />
      </section>
    </>
  );
};

export default Home;