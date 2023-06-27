import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';

class Projects extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="projects-section">
                    <Section 
                    title={<p><LaptopMacRoundedIcon style={{'fontSize':'75px'}}/><br></br>projects</p>}
                    subtitle={<p><b><a href="https://drive.google.com/file/d/1m9gxhilE8N2UGFZ4JU700Q5dUFpLlnAI/view?usp=sharing" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}}>eeg signal classification</a></b><br></br>designed crnn w/ bidirectional lstms to map human eeg data to motor imagery, achieving 8% performance increase to a cnn<br></br><br></br><b><a href="https://github.com/pranav-maddali/spotify_playlister" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}}>spotify playlister</a></b><br></br>web application built on flask/html/css to generate playlists based on ml clustering of top charts<br></br><br></br><b><a href="https://github.com/pranav-maddali/Rate-My-Club" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}}>rate my club</a></b><br></br>interactive web application built on react/python for users to add/view information about campus organizations<br></br><br></br><b><a href="https://drive.google.com/file/d/1sWtabpHajLfC0yrKFgJxavzG9g7DKjXX/view?usp=sharing" target="_blank" style={{'textDecoration':'none', 'color':'#000000'}}>portfolio optimization</a></b><br></br>plotted efficient portfolio frontiers through mathematical derivation & KNN regressor<br></br><br></br><b><a href="https://github.com/pranav-maddali" target="_blank" style={{'textDecoration':'none', 'color':'#000000'}}>...and more projects in c/c++, data science, python, etc.</a></b></p>}
                    id="section3"
                    />
                </div>
            </AnimatedPage>
        );
    }
}

export default Projects;