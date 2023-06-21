import React, { Component } from 'react';
import { CircularMenu } from "./components/CircularMenu";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import grad from "./assets/grad.svg";
import dummyText from './DummyText';

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
              <h1 className='middle-header' data-replace="pranav maddali"><span>pranav</span></h1>
              <Section 
                title="hello"
                subtitle={dummyText}
                id="section1"
                photo={grad}
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
