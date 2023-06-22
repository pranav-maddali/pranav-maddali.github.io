import React, { Component } from 'react';
import { CircularMenu } from "./components/CircularMenu";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import grad from "./assets/grad.svg";

import AlbumIcon from '@mui/icons-material/Album';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className='Row'>
          <div className="Column" id="navbar-col">
            <div className='NavBar'><NavBar /></div>
          </div>
          <div className='Column'>
            <div className="Sections"><h1 className='middle-header ex'><span>pranav maddali</span></h1>
              <div className='image-container'>
                    <img src={grad} className='grad-image'/>
              </div>
              <Section 
                title="nice to meet you!"
                subtitle={<p>my name is <b>pranav</b> and i finished my undergrad at <b>ucla</b> in june 2023. i majored in <b>computer science</b> and spent time working in industry, research, and organizations on campus. my interests lie in ai/ml software development and i spent my junior year summer working in nlp @ meta. aside from professional experiences, i can talk all things sports (especially the <b>lakers</b>), working out, music (i started <b>djing</b> my junior year), <b>sneakers</b>, and <b>ar/vr</b>. scroll thru for more information about me!</p>}
                id="section1"
              />
              <div className='container'>
                <Section 
                  title="experiences"
                  subtitle={<p><b>meta</b><br></br><i>software engineer intern</i><br></br>jun 2022 - sep 2022<br></br><br></br><b>creative labs</b><br></br><i>product manager, software developer</i><br></br>jan 2020 - sep 2021<br></br><br></br><b>ucla anderson school of business</b><br></br><i>undergraduate researcher</i><br></br>jun 2021 - aug 2021<br></br></p>}
                  id="section2"
                />
              </div>
              <div className='container'>
                <Section 
                  title="projects"
                  subtitle={<p><b>eeg signal classification</b><br></br>designed crnn w/ bidirectional lstms to map human eeg data to motor imagery, achieving 8% performance increase to a cnn<br></br><br></br><b>spotify playlister</b><br></br>web application built on flask/html/css to generate playlists based on ml clustering of top charts<br></br><br></br><b>rate my club</b><br></br>interactive web application built on react/python for users to add/view information about campus organizations</p>}
                  id="section3"
                />
              </div>
              <div className='container'>
                <Section 
                  title="skills"
                  subtitle={<p>
                              <b>languages</b>
                              <br></br>
                              python, c/c++, javascript, java, r, sql, html/css, verilog
                              <br></br><br></br>
                              <b>frameworks and tools</b>
                              <br></br>
                              flask, react, angularjs, django, node.js, docker, kubernetes, keras, pytorch, tensorflow
                              <br></br><br></br>
                              <b>other</b>
                              <br></br>
                              aws, machine learning, numpy, pandas, hugging face, jupyter nb, git
                            </p>}
                  id="section4"
                />
              </div>
              <div className='container'>
                <Section 
                  title="organizations"
                  subtitle={<p><b>creative labs</b><br></br><i>served as a backend developer on mobile app 'partiic' to display parties around campus</i><br></br><br></br><b>acm</b><br></br><i>machine learning crash-course workshops</i><br></br><br></br><b>delta sigma pi</b><br></br><i>served as senior-vice president and director of brotherhood</i></p>}
                  id="section5"
                />
              </div>
              <div className='container'>
                <Section 
                  title="interests"
                  subtitle={<p>
                              <div className='Row2'>
                                <div className='Column'>
                                  <SportsBasketballIcon style={{'fontSize':'75px'}}/>
                                </div>
                                <div className='Column'>
                                  <AlbumIcon style={{'fontSize':'75px'}}/>
                                </div>
                                <div className='Column'>
                                  <AutoAwesomeIcon style={{'fontSize':'75px'}}/>
                                </div>
                              </div>
                              <div className='Row2'>
                                <div className='Column'>
                                  <Section 
                                    title="basketball"
                                    subtitle={<p>i've been playing basketball since i was 6, played for highschool and in intra-murals at ucla. i grew up in san diego so my favorite team is the <b>lakers</b> but always will have a spot for the bruins.</p>}
                                  />
                                </div>
                                <div className='Column'>
                                  <Section 
                                    title="music"
                                    subtitle={<p>i predominantly listen to rap or edm, and my favorite artist is <b>travis scott</b>. i started djing (tbd on stage name) my junior year at ucla for orgs on campus. mainly dabble in house and edm but learning how to mix rap currently.</p>}
                                  />
                                </div>
                                <div className='Column'>
                                  <Section
                                    title="sneakers"
                                    subtitle={<p>i love hoarding sneakers and kicks from all brands, the <b>travis reverse mocha jordan 1 lows</b> are probably #1 on my wishlist now. also love the come-back new balance made the last few years.</p>}
                                  />
                                </div>
                              </div>
                            </p>}
                  id="section6"
                />
              </div>
              <div className='container'>
                <Section 
                  title="about"
                  subtitle={<p>
                              check out my resume/socials using the menu on the right. more information down below: 
                              <br></br><br></br>
                              <EmailRoundedIcon />
                              <br></br>
                              <b>pranav1608maddali@gmail.com</b>
                              <br></br><br></br>
                              <LocalPhoneRoundedIcon />
                              <br></br>
                              <b>(323) 810-8390</b>
                              <br></br><br></br>
                              <FmdGoodIcon />
                              <br></br>
                              <b>bangalore,india</b>
                              <br></br><br></br>
                            </p>}
                  id="section7"
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