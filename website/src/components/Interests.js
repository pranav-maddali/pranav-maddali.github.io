import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";

import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';

class Interests extends Component {
    render() {
        return (
            <AnimatedPage>
              <div className="interests-section">
                  <Section 
                    title={<p><DirectionsBikeRoundedIcon style={{'fontSize':'75px'}}/><br></br>interests</p>}
                    subtitle={<p>
                                <div>
                                  <p>
                                      <b>basketball</b>
                                      <br></br>
                                      i've been playing basketball since i was 6, played for highschool and in intra-murals at ucla. i grew up in san diego so my favorite team is the <b>lakers</b> but always will have a spot for the bruins.
                                      <br></br><br></br>
                                      <b>mixing</b>
                                      <br></br>
                                      i predominantly listen to rap or edm, and my favorite artist is <b>travis scott</b>. i started djing in 2021 at ucla for orgs on campus. mainly dabble in house and edm but learning how to mix rap.
                                      <br></br><br></br>
                                      <b>sneakers</b>
                                      <br></br>
                                      i love hoarding sneakers and kicks from all brands, the <b>travis reverse mocha jordan 1 lows</b> are probably #1 on my wishlist now. also love the come-back new balance made the last few years.
                                  </p>
                                </div>
                              </p>}
                    id="section6"
                  />
              </div>
            </AnimatedPage>
        );
    }
}

export default Interests;