import React, { Component } from "react";
import Section from "./Section.js";
import AnimatedPage from "../AnimatedPage.js";
import "../static/Interests.css"

import { Icon } from '@iconify/react';

import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';


class Interests extends Component {
    render() {
        return (
            <AnimatedPage>
                <h2><p><DirectionsBikeRoundedIcon style={{'fontSize':'75px'}}/><br></br>interests</p></h2>
                <div class="grid-container">
                  <div class="grid-item">
                    <SportsBasketballRoundedIcon style={{'fontSize':'50px'}}/>
                    <h2>basketball</h2>
                    <p>i've been playing basketball since i was 6, played for highschool and in intra-murals at ucla. i grew up in san diego so my favorite team is the <b>lakers</b> but always will have a spot for the bruins.</p>
                  </div>
                  <div class="grid-item">
                    <AlbumRoundedIcon style={{'fontSize':'50px'}}/>
                    <h2>mixing</h2>
                    <p>i predominantly listen to rap or edm, and my favorite artist is <b>travis scott</b>. i started djing in 2021 at social events for orgs at ucla. i mainly dabble in house and edm but learning how to mix rap.</p>
                  </div>
                  <div class="grid-item">
                  <Icon icon="mdi:shoe-sneaker" style={{'fontSize':'50px'}}/>
                    <h2>sneakers</h2>
                    <p>i love hoarding sneakers and kicks from all brands, the <b>travis reverse mocha jordan 1 lows</b> are probably #1 on my wishlist now. also love the come-back new balance made the last few years.</p>
                  </div>
                  <div class="grid-item">
                    <DirectionsCarRoundedIcon style={{'fontSize':'50px'}}/>
                    <h2>cars</h2>
                    <p>i've always had an eye for cars i see on the road. even though my dream car would be the <b>g-wagon</b>, models like the lucid air are creeping up. i love the direction of AVs and super excited to see the space 20 years down the line.</p>
                  </div>
                </div>
            </AnimatedPage>
        );
    }
}

export default Interests;