import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CreateContestCard from "./Components/CreateContest";
import Footer from "./Components/Footer";
import Mainbox from "./Components/Mainbox";
import BecomeCodie from "./Components/BecomeCodie";
import SignUp from "./pages/SignUp";

function App() {
  return (
    // <Mainbox/>
    <div className="App">
      <Navbar />
      {/* <Mainbox/> */}
      <section className="create-contest-card-background">
        <CreateContestCard />
      </section>
      <section className="become-codie-card-background">
        <BecomeCodie />
      </section>
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
