import React, { Component } from "react";
import AnimatedPage from "../AnimatedPage.js";

import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';


class Skills extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="skills-section">
                <h2><p><PsychologyRoundedIcon style={{'fontSize':'75px'}}/><br></br>skills</p></h2>
                    <div class="grid-container">
                        <div class="grid-item">
                            <LanguageRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>languages</h2>
                            <p><i>python, c/c++, javascript, java, r, sql, html/css, verilog</i></p>
                        </div>
                        <div class="grid-item">
                            <ConstructionRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>frameworks & tools</h2>
                            <p><i>flask, react, angularjs, django, node.js, docker, kubernetes, keras, pytorch, tensorflow</i></p>
                        </div>
                        <div class="grid-item">
                            <MiscellaneousServicesRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>other</h2>
                            <p><i>aws, machine learning, numpy, pandas, hugging face, jupyter nb, git</i></p>
                        </div>
                        <div class="grid-item">
                            <SchoolRoundedIcon style={{'fontSize':'50px'}}/>
                            <h2>coursework</h2>
                            <p><i>deep learning (grad), machine learning, computer organization, probability, advanced algorithms, operating systems, computer networks</i></p>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        );
    }
}

export default Skills;