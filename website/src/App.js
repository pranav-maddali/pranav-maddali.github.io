import React, {Component} from 'react';
import logo from './assets/memoji.svg';
import { CircularMenu } from "./components/CircularMenu";

import {
  Route,
  NavLink, 
  HashRouter,
  Routes
} from "react-router-dom";

import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Organizations from "./components/Organizations";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HashRouter>
          <div className='Column'>
            <div className='header'>
              <NavLink to="/">
                  <img
                    src={logo}
                    alt="my memoji."
                    style={{'height':'80px', 'width':'80px', 'border-radius':'50%'}}
                    className="nav-logo" 
                  />
              </NavLink>
              <ul className="header-navbar">
                <li><NavLink className='nav-item' to="/experiences">experiences</NavLink></li>
                <li><NavLink className='nav-item' to="/projects">projects</NavLink></li>
                <li><NavLink className='nav-item' to="/skills">skills</NavLink></li>
                <li><NavLink className='nav-item' to="/organizations">organizations</NavLink></li>
                <li><NavLink className='nav-item' to="/interests">interests</NavLink></li>
                <li><NavLink className='nav-item' to="/about">about</NavLink></li>
              </ul>
            </div>
          </div>
          <div className='Column'>
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/experiences" element={<Experiences />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/organizations" element={<Organizations />}/>
                <Route path="/interests" element={<Interests />}/>
                <Route path="/about" element={< About />}/>
              </Routes>
            </div>
          </div>
        </HashRouter>
        <div className='circular-menu'>
          <CircularMenu />
        </div>
      </div>
    );
  }
};

export default App;
