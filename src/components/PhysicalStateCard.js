import React, { Component } from 'react'
import "./PhysicalState.css";
import physicalstates from "../physicalstates.json";
import Wrapper from "./Wrapper";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Link } from 'react-router-dom';
import Solid from './Solid';
import Liquid from './Liquid';
import Gaseous from './Gaseous';


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
      <BrowserRouter>
      <div className=" container image-list">
        <div className="card-columns">
          {physicalstateList}
        </div>
        <Switch>
        <Route path='/Solid' component ={Solid} />
        <Route path='/Liquid' component ={Liquid} />
        <Route path='/Gaseous' component ={Gaseous} />
        </Switch>
      </div>
      </BrowserRouter>
    )
  
  }//render
}//component

export default PhysicalStateCard;