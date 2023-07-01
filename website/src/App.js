import React, {Component} from 'react';
import logo from './assets/memoji.svg';
import { CircularMenu } from "./components/CircularMenu";

import {
  Route,
  NavLink, 
  BrowserRouter,
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

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
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
                                                                                          <br></br><br></br>
                                                                                          <small>
                                                                                          <b>designed</b> pipeline for paraphrase generation using probabilistic entity masking to broaden datasets in python
                                                                                          <br></br>
                                                                                          <b>implemented</b> fine-tuning strategies by augmenting data through delexicalization improving paraphrasing by 8%
                                                                                          <br></br>
                                                                                          <b>developed</b> metric to evaluate paraphrases resulting in a 7% increase in correlation and a 20% increase in efficiency
                                                                                          <br></br>
                                                                                          <b>built</b> seq2seq paraphrasing pipeline which incorporated entity-linking for improved paraphrasing predictions
                                                                                          </small>
                                                                                      </p>} img=""/>}/>
              <Route exact path="/creative-labs" element={<Card title="creative labs" subtitle={<p><i>software engineer</i>
                                                                                          <br></br>
                                                                                          <small>backend</small>
                                                                                          <br></br><br></br>
                                                                                          <small>
                                                                                          <b>led</b> the back-end team for a web application, creating the stack using python and django to design web APIs
                                                                                          <br></br>
                                                                                          <b>built</b> full-stack python framework to facilitate faster user authentication using custom login by 5x
                                                                                          <br></br>
                                                                                          <b>implemented</b> mobile application landing pages using react and jQuery, adding google/fb/ucla external APIs
                                                                                          <br></br>
                                                                                          <b>created</b> database through postgresql, sqlalchemy; deployed and monitored on heroku
                                                                                          </small>
                                                                                      </p>} img=""/>}/>
              <Route exact path="/anderson" element={<Card title="anderson" subtitle={<p><i>student researcher</i>
                                                                                          <br></br>
                                                                                          <small>political science</small>
                                                                                          <br></br><br></br>
                                                                                          <small>
                                                                                          <b>extracted</b> monetary policy spending through web scraping python scripts and notebooks to build robust datasets
                                                                                          <br></br>
                                                                                          <b>spearheaded</b> data transformation to implement linear regression and identifying prominent variables to spending
                                                                                          </small>
                                                                                      </p>} img=""/>}/>    
              <Route exact path="/alpha" element={<Card title="alphaICs" subtitle={<p><i>software engineer intern</i>
                                                                                          <br></br>
                                                                                          <small>machine learning</small>
                                                                                          <br></br><br></br>
                                                                                          <small>
                                                                                          <b>designed</b> OpenCV script to augment datasets, cleaned using pandas/numpy to create robust testing datasets
                                                                                          <br></br>
                                                                                          <b>engineered</b> various Python scripts to decrease data collection, improving model performance by 3%
                                                                                          </small>
                                                                                      </p>} img=""/>}/>                                                                    
              </Routes>
            </div>
          </div>
        </BrowserRouter>
        <div className='circular-menu'>
          <CircularMenu />
        </div>
      </div>
    );
  }
};

export default App;
