import React, { Component } from 'react';
import logo from '../memoji.svg';
import { Link, animateScroll as scroll} from 'react-scroll';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img
                    src={logo}
                    alt="me."
                    style={{'height':'100px', 'width':'100px', 'border-radius':'50%'}} 
                />
                <u1 className='nav-items'>
                    <div className='nav-item'>home</div>
                    <div className='nav-item'>about</div>
                    <div className='nav-item'>experience</div>
                </u1>
            </nav>
        )
    }
}