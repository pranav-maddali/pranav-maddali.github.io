import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

class Organizations extends Component {
    render() {
        return (
            <AnimatedPage>
                <div className="orgs-section">
                    <Section 
                    title={<p><AccountBalanceRoundedIcon style={{'fontSize':'75px'}}/><br></br>organizations</p>}
                    subtitle={<p><b>creative labs</b><br></br><i>served as a backend developer on mobile app 'partiic' to display parties around campus</i><br></br><br></br><b>acm</b><br></br><i>machine learning crash-course workshops</i><br></br><br></br><b>delta sigma pi</b><br></br><i>served as senior-vice president and director of brotherhood</i></p>}
                    id="section5"
                    />
                </div>
            </AnimatedPage>
        );
    }
}

export default Organizations;