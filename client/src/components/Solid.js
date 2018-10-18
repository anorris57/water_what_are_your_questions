import React from 'react'
import "./Solid.css";
import water from '../water.svg';
import Jumbotron from "../components/Jumbotron";
import BackgroundImage from "./BackgroundImage";

const Solid = ( ) => {
  return(
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
    <BackgroundImage/>
    <div className="container">
      <div className="text-block1">
       <h4>Polarity</h4>
       A water molecule consists of one oxygen atom and two hydrogen atoms. Oxygen has a very high electronegativity, meaning it has a very high affinity for electrons. The oxygen in water molecules pulls the electrons from the hydrogen atoms closer to it, creating two poles in the molecule, where the hydrogen end is partially positive and the oxygen end is partially negative.</div>
       <div className="text-block2">
       <h4>Motion</h4>
       <p>When water freezes, the molecules slow and settle into place, lining up in regular formations you see as crystals. This is due to polarity of water. The partial negative and positive ends attract and as the motion slows due to the temperature drop the attractions become stronger. </p></div>
       <div className="text-block3">
       <h4>Crystaline Solid</h4>
       <p>Ice is a crystaline solid which means its molecules occupy specific (lattice) postions. The hexagonal arrangement of water moleules is the structure which causes the attractive forces between molecues to be at their maxium strength. This configuration causes water molecules to be farther apart in the solid state causing ice to be less dense than liquid water resulting in ice floating. </p></div>
       </div>
       
       
    </div>//overall div
    
  )
}

export default Solid;