import React from 'react';
import AnimatedPage from '../AnimatedPage';

import "../static/ExperienceDetail.css"

const Card = ({ title, subtitle, img }) => {
    return (
        <AnimatedPage>
            <div className="card">
                <div className="card-content" style={{'lineHeight':'2'}}>
                    <h2>{title}</h2>
                    <p style={{'padding':'0px 10% 0px 10%'}}>{subtitle}</p>
                </div>
                <div className='blob' />
            </div>
        </AnimatedPage>
    );
}

export default Card;