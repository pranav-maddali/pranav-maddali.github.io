import React, { Component } from "react";
import Section from "./Section.js"
import grad from "../assets/grad.svg";
import AnimatedPage from "../AnimatedPage.js";

import "../static/Home.css"

class Home extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="home-section">
                    <div className='image-container'>
                            <img src={grad} alt="graduation!" className='grad-image'/>
                    </div>
                    <h1 aria-label="hi! i'm a dj">
                        hi! i'm&nbsp;<span class="typewriter thick"></span>
                    </h1>
                    <Section 
                        title="nice to meet you!"
                        subtitle={<p>my name is <b>pranav</b> and i finished my undergrad at <b>ucla</b> in june 2023. i majored in <b>computer science</b> and spent time working in industry, research, and organizations on campus. my interests lie in ai/ml software development and i spent my junior year summer working in nlp @ meta. aside from professional experiences, i can talk all things sports (especially the <b>lakers</b>), working out, music (i started <b>djing</b> my junior year), <b>sneakers</b>, and <b>ar/vr</b>. scroll thru for more information about me!</p>}
                        id="section1"
                    />
                </div>
            </AnimatedPage>
        );
    }
}

export default Home;