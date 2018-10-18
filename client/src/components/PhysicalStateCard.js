import React, { Component } from 'react'
import "./PhysicalState.css";
import water from '../water.svg';
import Jumbotron from "../components/Jumbotron";
import physicalstates from "../physicalstates.json";
import Wrapper from "./Wrapper";
import {Link } from 'react-router-dom';


class PhysicalStateCard extends Component {
  state = {
    physicalstates
  };
  render () {
    const physicalstateList = physicalstates.map(physicalstate => {
      return ( 
      <Wrapper key={physicalstate.id}>
        <div className="card" key={physicalstate.id}
          id={physicalstate.id} >
          <img
            className="img-container"
            alt={physicalstate.name}
            src={require("./images/" + physicalstate.image)}
          />
          <span>Question: {physicalstate.question}</span><br></br>
          <span>State:<Link to={physicalstate.name}>    {physicalstate.name}</Link></span>
        </div>
        </Wrapper>
      )
    });
    return (
    <div>
      <Jumbotron>
        <div>
        <img src={water} className="App-water1" alt="water" />
        </div>
        <div className="Title">
        <h1>Water Your Questions?</h1>
        <img src={require("../components/images/drop3.jpg")} alt="waterdrop" />
        </div>
        <div>
        <img src={water} className="App-water2" alt="water" />
        </div>
      </Jumbotron>
      
      <div className=" container image-list">
        <div className="card-columns">
          {physicalstateList}
        </div>
      </div>
      </div> 
      
    );//return
  
  }//render
}//component

export default PhysicalStateCard;