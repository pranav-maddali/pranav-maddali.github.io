import React, { Component } from 'react';
import { CircularMenu } from "./components/CircularMenu";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import dummyText from "./DummyText"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='Row'>
          <div className="Column">
            <div className='NavBar'><NavBar /></div>
          </div>
          <div className='Column'>
            <div className="Sections">
              <Section 
                title="hello"
                subtitle=""
                id="section1"
              />
              <Section 
                title="home"
                subtitle={dummyText}
                id="section2"
              />
              <Section 
                title="experience"
                subtitle={dummyText}
                id="section3"
              />
              <Section 
                title="about"
                subtitle={dummyText}
                id="section4"
              />
            </div>
          </div>
          <div className="Column">
            <div className='CircularMenu'><CircularMenu /></div>
          </div>
          
      </div>
    )
  }
};

export default App;
