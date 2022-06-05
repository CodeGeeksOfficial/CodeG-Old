import React from "react";
import CreateContestCard from "../Components/HomeComponents/CreateContest";
import Mainbox from "../Components/HomeComponents/Mainbox";
import BecomeCodie from "../Components/HomeComponents/BecomeCodie";

const Home = () => {
  return (
    <>
      <Mainbox />
      <section className="create-contest-card-background">
        <CreateContestCard />
      </section>
      <section className="become-codie-card-background">
        <BecomeCodie />
      </section>
    </>
  );
};

export default Home;
