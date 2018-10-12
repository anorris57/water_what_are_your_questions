import React, { Component } from 'react';
import "./BackgroundImage.css";


class BackgroundImage extends Component {

  componentWillMount(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
    this.setState({x:x,y:y});
  }
  render() {
    return (
      <img 
      className='bg'
      alt="snowflake" 
      src={require("./images/ice_crystal.jpg")} />
      
    );
  }
      
}//component

export default BackgroundImage;
