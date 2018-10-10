import React, { Component } from 'react';
import './App.css';
import water from './Water.png';
import Jumbotron from "./components/Jumbotron";
import PhysicalStateCard from "./components/PhysicalStateCard";


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div>
        <Jumbotron>
          <div>
          <img src={water} className="App-water1" alt="water" />
          </div>
          <div className="Title">
          <h1>Water Your Questions?</h1>
          <img src={require("./components/images/drop3.jpg")} alt="waterdrop" />
          </div>
          <div>
          <img src={water} className="App-water2" alt="water" />
          </div>
        </Jumbotron>
        </div>

        <PhysicalStateCard />
      </div>
      
    );//return
  }//render
}//component

export default App;
