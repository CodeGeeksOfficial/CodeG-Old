import React from 'react';
// import './App.css';
import {Header} from './Components/Header';
import Footer from './Components/Footer';
import Mainbox from './Components/Mainbox';

function App() {
  return (
    <>
      <div className="App">
      <Header/>
      <Mainbox/> 
      <Footer/>
      </div>
    </>
  );
}

export default App;