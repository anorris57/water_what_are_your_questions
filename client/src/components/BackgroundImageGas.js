import React, { Component } from 'react';
import "./BackgroundImage.css";


class BackgroundImageGas extends Component {

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
      alt="gyser" 
      src={require("./images/vapor2.jpg")} />
      
    );
  }
      
}//component

export default BackgroundImageGas;