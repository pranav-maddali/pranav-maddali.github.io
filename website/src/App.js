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
import Card from "./components/ExperienceDetail";

import FmdGoodIcon from '@mui/icons-material/FmdGood';

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
                <Route exact path="/experiences" element={<Experiences />}/>
                <Route exact path="/projects" element={<Projects />}/>
                <Route exact path="/skills" element={<Skills />}/>
                <Route exact path="/organizations" element={<Organizations />}/>
                <Route exact path="/interests" element={<Interests />}/>
                <Route exact path="/about" element={< About />}/>
                <Route exact path="/meta" element={<Card title="meta" subtitle={<p><i>software engineer intern</i>
                                                                                          <br></br>
                                                                                          <small>applied research</small>
                                                                                          <br></br>
                                                                                          <b>menlo park, ca</b>
                                                                                          <br></br><br></br>
                                                                                          <small>
                                                                                          <b>designed</b> models for paraphrase generation through probabilistic masking to broaden datasets using AWS & ECS
                                                                                          <br></br>
                                                                                          <b>implemented</b> fine-tuning strategies by augmenting data through delexicalization improving paraphrasing by 8%
                                                                                          <br></br>
                                                                                          <b>developed</b> metric to evaluate paraphrases resulting in a 7% increase in correlation and a 20% increase in efficiency
                                                                                          <br></br>
                                                                                          <b>optimized</b> modular Seq2Seq pipeline which incorporated 2 methods of paraphrase generation chosen by the user
                                                                                          </small>
                                                                                      </p>} img=""/>}/>
                <Route exact path="/creative-labs" element={<Card title="creative labs" subtitle={<p><i>software engineer</i>
                                                                                            <br></br>
                                                                                            <small>backend</small>
                                                                                            <br></br>
                                                                                            <b>los angeles, ca</b>
                                                                                            <br></br><br></br>
                                                                                            <small>
                                                                                            <b>led</b> a backend team of 4 for a web application and established stack using Python and Django to design web APIs
                                                                                            <br></br>
                                                                                            <b>executed</b> improved user authentication from 0 to 1 using custom login services through Flask, Python, and React
                                                                                            <br></br>
                                                                                            <b>implemented</b> mobile application landing pages using React, jQuery, and added functionality for 4 external APIs
                                                                                            <br></br>
                                                                                            <b>monitored</b> database of 250+ users during beta phase through Heroku and SQLAlchemy, Postgres for querying
                                                                                            </small>
                                                                                        </p>} img=""/>}/>
                <Route exact path="/anderson" element={<Card title="datares - anderson" subtitle={<p><i>researcher</i>
                                                                                            <br></br>
                                                                                            <small>political science</small>
                                                                                            <br></br>
                                                                                            <b>los angeles, ca</b>
                                                                                            <br></br><br></br>
                                                                                            <small>
                                                                                            <b>extracted</b> monetary policy spending and projections through Python scrapping scripts to distill 25+ years of data
                                                                                            <br></br>
                                                                                            <b>spearheaded</b> data transformations to implement linear regression and identifying prominent variables to spending
                                                                                            <br></br>
                                                                                            <b>projected</b> future federal funds rates using LSTM layers improving existing modeling prediction performance by 6%
                                                                                            </small>
                                                                                        </p>} img=""/>}/>    
                <Route exact path="/alpha" element={<Card title="alphaICs" subtitle={<p><i>software engineer intern</i>
                                                                                            <br></br>
                                                                                            <small>machine learning</small>
                                                                                            <br></br>
                                                                                            <b>bangalore, india</b>
                                                                                            <br></br><br></br>
                                                                                            <small>
                                                                                            <b>developed</b> internal scripts to augment datasets and augmented data through Python to create 5 testing datasets
                                                                                            <br></br>
                                                                                            <b>engineered</b> various Python scripts to improve data collection and model performance by 3% for internal models
                                                                                            </small>
                                                                                        </p>} img=""/>}/>                                                                    
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
