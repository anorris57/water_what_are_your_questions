import React from 'react';
import "./Solid.css";
import water from '../water.svg';
import Jumbotron from "../components/Jumbotron";
import BackgroundImageLiquid from "./BackgroundImageLiquid";

const Liquid = ( ) => {
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
      <BackgroundImageLiquid />
    <div className="container">
      <div className="text-block1">
       <h4>Make Up</h4>
       A water molecule is a chemical compound consisting of one oxygen atom bonded to  two hydrogen atoms. A chemical compound is when a new substance is formed two different substances. The new substance, in this case: water is totally different in chemical behavior than the original substances. The bond between the atoms is a covalent bond. </div>
       <div className="text-block2">
       <h4>Covalent Bonding</h4>
       <p>There are different types of chemical bonds. A covalent bond is when two atoms are attracted to the electrons of another atom but the attraction is not enough  to pull off the electrons so the two atoms wind up sharing the atoms. In the case of water the  oxygen and hydrogen atoms don't share the electrons evenly and this causes a polar covalent bond.</p></div>
       <div className="text-block3">
       <h4>Special Liquid</h4>
       <p>The polar bonds of water and its molecular shape gives cause water to have unique properties. Liquid water has a high heat capacity (can absorb and retain more heat than other liquids), is able to dissolve many substances (because of the uneven distribution of charge) and its solid state  (ice) is less dense. This allows ice to float in water. </p></div>
       </div>
       
    </div>//overall div
  )
}

export default Liquid;