import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CreateContestCard from './Components/Create_Contest_Card';
import Footer from './Components/Footer';
import Mainbox from './Components/Mainbox';

function App() {
  return (
    // <Mainbox/>
    <div className="App">
      <Navbar/>
      <Mainbox/>
      <div className="create-contest-card-background">
        <CreateContestCard/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;