import React from 'react';
import "./Solid.css";
import water from '../water.svg';
import Jumbotron from "../components/Jumbotron";
import "./Gas.css";
const Gas = ( ) => {
  return(
  <div className=' gas'>
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
    <div className="container">
      <div className="text-block1">
       <h4>Attractive Forces: KMT</h4> <p>KMT is the Kinectic Molelcular Theroy of Matter. It looks at the behavior of matter as a trade off between attractive forces between the atoms/molecules and the  movement ie speed (kinetic energy) of the individual species. Gases are made of molecules that move extremely fast and are far apart so  that their forces of attractions can't kick in. </p></div>
       <div className="text-block2">
       <h4>Vapor Pressure</h4>
       <p>A gas is called a vapor when the substance that makes it usally exists as a liquid. That's why we have water vapor and not oxygen vapor. Vapor pressure is the pressure exerted by a liquid's vapor(gas) when in contact with the liquid (like in a water bottle). Water boils when it's vapor pressure equals the prevailing atmospheric pressure.</p></div>
       <div className="text-block3">
       <h4>Water Vapor and Air</h4>
       <p>When water molecules receive enough energy (whether through direct application: boiling or ambient conditions: evaporation to overcome the attractive forces between them they escape as water vapor and don't chemically change at all. Air is a mixture of gases of which water vapor is one.git  </p></div>
       </div>
    </div>//overall div
  )
}

export default Gas;