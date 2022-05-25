import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import CreateContestCard from './Components/Create_Contest_Card';
import Footer from './Components/Footer';
import MainCard from './Components/Main_Card';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainCard/>
      <div className="create-contest-card-background">
        <CreateContestCard/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;