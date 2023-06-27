import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

class Experiences extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="experiences-section">
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
            </AnimatedPage>
        );
    }
}

export default Experiences;