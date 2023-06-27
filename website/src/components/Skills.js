import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

class Skills extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="skills-section">
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
            </AnimatedPage>
        );
    }
}

export default Skills;