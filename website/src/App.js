import React, { Component } from 'react';
import { CircularMenu } from "./components/CircularMenu";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import grad from "./assets/grad.svg";
import AlbumIcon from '@mui/icons-material/Album';

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
              <h1 className='middle-header ex'><span>pranav maddali</span></h1>
              <Section 
                title="nice to meet you!"
                subtitle={<p>my name is <b>pranav</b> and i finished my undergrad at <b>ucla</b> in june 2023. i majored in <b>computer science</b> and spent time working in research, industry, and organizations on campus. my interests lie in ai/ml software development and i spent my junior year summer working in nlp @ meta. aside from professional experiences, i can talk all things sports (especially the <b>lakers</b>), music (i started <b>djing</b> my junior year), <b>sneakers</b>, and <b>ar/vr</b>. scroll thru for more information about me!</p>}
                id="section1"
                photo={grad}
              />
              <div className='container'>
                <Section 
                  title="experience"
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
                  title="organizations"
                  subtitle={<p><b>creative labs</b><br></br><i>served as a backend developer on mobile app 'partiic' to display parties around campus</i><br></br><br></br><b>acm</b><br></br><i>machine learning crash-course workshops</i><br></br><br></br><b>delta sigma pi</b><br></br><i>served as senior-vice president and director of brotherhood</i></p>}
                  id="section4"
                />
              </div>
              <div className='container'>
                <Section 
                  title="interests"
                  subtitle={<p>
                              <div className='Row'>
                                <div className='Column'>
                                </div>
                                <div className='Column'>
                                </div>
                                <div className='Column'>
                                </div>
                              </div>
                            </p>}
                  id="section5"
                />
              </div>
              <div className='container'>
                <Section 
                  title="about"
                  subtitle={<p>graduated from <b>ucla</b> in 2023 with a bachelors in <b>computer science</b>. feel free to reach out to me using the menu on the right.</p>}
                  id="section6"
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
