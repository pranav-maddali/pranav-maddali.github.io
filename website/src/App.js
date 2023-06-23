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
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

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
                  title={<p><WorkRoundedIcon style={{'fontSize':'75px'}}/><br></br>experiences</p>}
                  subtitle={<p>
                              <b>meta</b>
                              <br></br>
                              <i>software engineer intern</i>
                              <br></br>
                              <small>applied research swe</small>
                              <br></br>
                              jun 2022 - sep 2022
                              <br></br><br></br>
                              <b>creative labs</b>
                              <br></br>
                              <i>product manager, software developer</i>
                              <br></br>
                              <small>backend dev</small>
                              <br></br>
                              jan 2020 - sep 2021
                              <br></br><br></br>
                              <b>ucla anderson school of business</b>
                              <br></br>
                              <i>undergraduate researcher</i>
                              <br></br>
                              <small>data scientist</small>
                              <br></br>
                              jun 2021 - aug 2021
                              <br></br><br></br>
                              <b>alphaICs</b>
                              <br></br>
                              <i>software engineer intern</i>
                              <br></br>
                              <small>machine learning swe</small>
                              <br></br>
                              jun 2019 - aug 2019
                            </p>}
                  id="section2"
                />
              </div>
              <div className='container'>
                <Section 
                  title={<p><LaptopMacRoundedIcon style={{'fontSize':'75px'}}/><br></br>projects</p>}
                  subtitle={<p><b><a href="https://drive.google.com/file/d/1m9gxhilE8N2UGFZ4JU700Q5dUFpLlnAI/view?usp=sharing" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}}>eeg signal classification</a></b><br></br>designed crnn w/ bidirectional lstms to map human eeg data to motor imagery, achieving 8% performance increase to a cnn<br></br><br></br><b><a href="https://github.com/pranav-maddali/spotify_playlister" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}}>spotify playlister</a></b><br></br>web application built on flask/html/css to generate playlists based on ml clustering of top charts<br></br><br></br><b><a href="https://github.com/pranav-maddali/Rate-My-Club" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}}>rate my club</a></b><br></br>interactive web application built on react/python for users to add/view information about campus organizations<br></br><br></br><b><a href="https://github.com/pranav-maddali" target="_blank" style={{'textDecoration':'none', 'color':'#000000'}}>...and more projects in c++, data science, python, etc.</a></b></p>}
                  id="section3"
                />
              </div>
              <div className='container'>
                <Section 
                  title={<p><PsychologyRoundedIcon style={{'fontSize':'75px'}}/><br></br>skills</p>}
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
                              <br></br><br></br>
                              <b>relevant coursework</b>
                              <br></br>
                              deep learning (grad), machine learning, computer organization, probability, advanced algorithms, operating systems, computer networks
                            </p>}
                  id="section4"
                />
              </div>
              <div className='container'>
                <Section 
                  title={<p><AccountBalanceRoundedIcon style={{'fontSize':'75px'}}/><br></br>organizations</p>}
                  subtitle={<p><b>creative labs</b><br></br><i>served as a backend developer on mobile app 'partiic' to display parties around campus</i><br></br><br></br><b>acm</b><br></br><i>machine learning crash-course workshops</i><br></br><br></br><b>delta sigma pi</b><br></br><i>served as senior-vice president and director of brotherhood</i></p>}
                  id="section5"
                />
              </div>
              <div className='container'>
                <Section 
                  title={<p><DirectionsBikeRoundedIcon style={{'fontSize':'75px'}}/><br></br>interests</p>}
                  subtitle={<p>
                              <div className='Row2'>
                                <div className='Column'>
                                  <SportsBasketballIcon style={{'fontSize':'50px'}}/>
                                </div>
                                <div className='Column'>
                                  <AlbumIcon style={{'fontSize':'50px'}}/>
                                </div>
                                <div className='Column'>
                                  <AutoAwesomeIcon style={{'fontSize':'50px'}}/>
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
                                    subtitle={<p>i predominantly listen to rap or edm, and my favorite artist is <b>travis scott</b>. i started djing in 2021 at ucla for orgs on campus. mainly dabble in house and edm but learning how to mix rap.</p>}
                                    id="mini-section2"
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
                  title={<p><InfoRoundedIcon style={{'fontSize':'75px'}}/><br></br>about</p>}
                  subtitle={<p>
                              check out my resume/socials using the menu on the right and contact information down below: 
                              <br></br><br></br>
                              <EmailRoundedIcon style={{'fontSize':'50px'}}/>
                              <br></br>
                              <b>pranav1608maddali@gmail.com</b>
                              <br></br><br></br>
                              <LocalPhoneRoundedIcon style={{'fontSize':'50px'}}/>
                              <br></br>
                              <b>(323) 810-8390</b>
                              <br></br><br></br>
                              <FmdGoodIcon style={{'fontSize':'50px'}}/>
                              <br></br>
                              <b>los angeles, ca</b>
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
