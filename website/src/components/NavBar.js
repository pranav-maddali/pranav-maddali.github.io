import React, { Component } from 'react';
import logo from '../assets/memoji.svg';
import { Link, animateScroll as scroll} from 'react-scroll';

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    render() {
        return (
            <nav className="navbar">
                <img
                    src={logo}
                    alt="me."
                    style={{'height':'80px', 'width':'80px', 'border-radius':'50%'}} 
                    onClick={this.scrollToTop}
                    className="nav-logo"
                />
                <u1 className='nav-items'>
                    <div className='nav-item'>
                        <Link 
                            activeClass='active'
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            experiences
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link 
                            activeClass='active'
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            projects
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link 
                            activeClass='active'
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            skills
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link 
                            activeClass='active'
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            organizations
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link 
                            activeClass='active'
                            to="section6"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            interests
                        </Link>
                    </div>
                    <div className='nav-item'>
                        <Link 
                            activeClass='active'
                            to="section7"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            about
                        </Link>
                    </div>
                </u1>
            </nav>
        )
    }
}