import React, { Component } from 'react';
import { CircularMenu } from "./components/CircularMenu";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import dummyText from "./DummyText"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
          <div className="CircularMenu">
            <CircularMenu />
          </div>
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="Sections">
            <Section 
              title="Home"
              subtitle={dummyText}
              dark={true}
              id="section1"
            />
          </div>
      </div>
    )
  }
};

export default App;
