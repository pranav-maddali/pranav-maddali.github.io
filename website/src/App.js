import React, { Component } from 'react';
import { CircularMenu } from "./components/CircularMenu";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import grad from "./assets/grad.svg";
import dummyText from './DummyText';
import aboutText from './AboutText';

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='Row'>
          <div className="Column" id="navbar-col">
            <div className='NavBar'><NavBar /></div>
          </div>
          <div className='Column'>
            <div className="Sections">
              <h1 className='middle-header ex'><span>p</span><span>r</span><span>a</span><span>n</span><span>a</span><span>v</span> <span>m</span><span>a</span><span>d</span><span>d</span><span>a</span><span>l</span><span>i</span></h1>
              <Section 
                title="nice to meet you!"
                subtitle={dummyText}
                id="section1"
                photo={grad}
              />
              <div className='container'>
                <Section 
                  title="experience"
                  subtitle={dummyText}
                  id="section2"
                />
              </div>
              <div className='container'>
                <Section 
                  title="projects"
                  subtitle={dummyText}
                  id="section3"
                />
              </div>
              <div className='container'>
                <Section 
                  title="interests"
                  subtitle={dummyText}
                  id="section4"
                />
              </div>
              <div className='container'>
                <Section 
                  title="about"
                  subtitle={aboutText}
                  id="section5"
                />
              </div>
            </div>
          </div>
          <div className="Column" id="menu-col">
            <div className='CircularMenu'><CircularMenu /></div>
          </div>
      </div>
    )
  }
};

export default App;
