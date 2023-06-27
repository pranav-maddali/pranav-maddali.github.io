import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

class About extends Component {
    render() {
        return (
            <AnimatedPage>
              <div className="about-section">
                <Section 
                title={<p><InfoRoundedIcon style={{'fontSize':'75px'}}/><br></br>about</p>}
                subtitle={<p>
                            check out my resume/socials using the menu on the right and contact information down below: 
                            <br></br><br></br>
                            <EmailRoundedIcon style={{'fontSize':'50px'}}/>
                            <br></br>
                            <b>mpranav@ucla.com</b>
                            <br></br><br></br>
                            <LocalPhoneRoundedIcon style={{'fontSize':'50px'}}/>
                            <br></br>
                            <b>(323) 810-8390</b>
                            <br></br><br></br>
                            <FmdGoodIcon style={{'fontSize':'50px'}}/>
                            <br></br>
                            <b>los angeles, ca</b>
                            <br></br><br></br>
                          </p>}
                id="section7"
              />
            </div>
          </AnimatedPage>
        );
      }
}

export default About;