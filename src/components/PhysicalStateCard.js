import React, { Component } from 'react'
import "./PhysicalState.css";
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
      <div className=" container image-list">
        <div className="card-columns">
          {physicalstateList}
        </div>
      </div>
    )
  
  }//render
}//component

export default PhysicalStateCard;