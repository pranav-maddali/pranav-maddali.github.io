import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

class Organizations extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="orgs-section">
                <h2><p><AccountBalanceRoundedIcon style={{'fontSize':'75px'}}/><br></br>organizations</p></h2>
                    <div class="grid-container">
                        <div class="grid-item">
                            <h2>ucla creative labs</h2>
                            <p><i>served as a <b>backend developer</b> on mobile app 'partiic' to display parties around campus</i></p>
                        </div>
                        <div class="grid-item">
                            <h2>ucla delta sigma pi</h2>
                            <p><i>served as <b>senior-vice president</b> and <b>director of brotherhood</b></i></p>
                        </div>
                    </div>
                        <div class="grid-item">
                            <h2>ucla acm</h2>
                            <p><i>machine learning crash-course workshops</i></p>
                        </div>
                    </div>
            </AnimatedPage>
        );
    }
}

export default Organizations;