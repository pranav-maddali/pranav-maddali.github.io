import React from 'react';
import "../static/Section.css"

const Section = ({ title, subtitle, id, photo }) => {
    return (
        <div className="section">
            <div className="section-content" id={id}>
                <div className='image-container'>
                    <img src={photo} className='grad-image'/>
                </div>
                <h2 style={{'text-align':'center'}}>{title}</h2>
                <p style={{'lineHeight':'2'}}>{subtitle}</p>
            </div>
        </div>
    );
}

export default Section;