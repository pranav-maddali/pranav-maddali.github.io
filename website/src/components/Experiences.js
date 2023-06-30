import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import "../static/Experiences.css"

class Experiences extends Component {
    render() {
        return (
            <AnimatedPage>
                    <h2><p><WorkRoundedIcon style={{'fontSize':'75px'}}/><br></br>experiences</p></h2>
                    <div class="grid-container">
                        <div class="grid-item">
                            <h2>meta</h2>
                            <p><i>software engineer intern</i>
                                    <br></br>
                                    <small>applied research</small>
                                    <br></br>
                                    jun 2022 - sep 2022</p>
                        </div>
                        <div class="grid-item">
                            <h2>creative labs</h2>
                            <p><i>software engineer</i>
                                    <br></br>
                                    <small>backend</small>
                                    <br></br>
                                    jan 2020 - sep 2021</p>
                        </div>
                        <div class="grid-item">
                            <h2>ucla anderson school of business</h2>
                            <p><i>undergraduate researcher</i>
                                    <br></br>
                                    <small>data science</small>
                                    <br></br>
                                    jun 2021 - aug 2021</p>
                        </div>
                        <div class="grid-item">
                            <h2>alphaICs</h2>
                            <p><i>software engineer intern</i>
                                    <br></br>
                                    <small>machine learning</small>
                                    <br></br>
                                    jun 2019 - aug 2019</p>
                        </div>
                    </div>
            </AnimatedPage>
        );
    }
}

export default Experiences;