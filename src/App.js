import React, { Component } from 'react';
import './App.css';
import water from './water.svg';
import Jumbotron from "./components/Jumbotron";
import PhysicalStateCard from "./components/PhysicalStateCard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Solid from './components/Solid';
import Liquid from './components/Liquid';
import Gaseous from './components/Gaseous';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
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
        <Switch>
        <Route exact path='/' component={ PhysicalStateCard } />
        <Route path='/Solid' component ={Solid} />
        <Route path='/Liquid' component ={Liquid} />
        <Route path='/Gaseous' component ={Gaseous} />
        </Switch>
      </div>
      </BrowserRouter>
      
    );//return
  }//render
}//component

export default App;
