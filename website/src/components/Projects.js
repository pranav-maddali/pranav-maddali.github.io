import React, { Component } from "react";
import AnimatedPage from "../AnimatedPage.js";

import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';
import "../static/Projects.css"

import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import WifiChannelRoundedIcon from '@mui/icons-material/WifiChannelRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';

class Projects extends Component {
    render() {
        return (
            <AnimatedPage>
                <h2><p><LaptopMacRoundedIcon style={{'fontSize':'75px'}}/><br></br>projects</p></h2>
                    <div class="grid-container">
                        <a href="https://drive.google.com/file/d/1m9gxhilE8N2UGFZ4JU700Q5dUFpLlnAI/view?usp=sharing" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}} class="grid-item">
                            <WifiChannelRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>eeg signal classification</h2>
                            <p>designed crnn w/ bidirectional lstms to map human eeg data to motor imagery, achieving 8% performance increase to a cnn</p>
                        </a>
                        <a href="https://github.com/pranav-maddali/spotify_playlister" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}} class="grid-item">
                            <PlaylistPlayRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>spotify playlister</h2>
                            <p>web application built on flask/html/css to generate playlists based on ml clustering of top charts</p>
                        </a>
                        <a href="https://github.com/pranav-maddali/Rate-My-Club" target='_blank' style={{'textDecoration':'none', 'color':'#000000'}} class="grid-item">
                            <Groups3RoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>rate my club</h2>
                            <p>interactive web application built on react/python for users to add/view information about campus organizations</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1sWtabpHajLfC0yrKFgJxavzG9g7DKjXX/view?usp=sharing" target="_blank" style={{'textDecoration':'none', 'color':'#000000'}} class="grid-item">
                            <ShowChartRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>portfolio optimization</h2>
                            <p>plotted efficient portfolio frontiers through mathematical derivation & KNN regressor</p>
                        </a>
                    </div>
            </AnimatedPage>
        );
    }
}

export default Projects;