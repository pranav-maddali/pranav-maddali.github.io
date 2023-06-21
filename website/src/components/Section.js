import React from 'react';
import "../static/Section.css"

const Section = ({ title, subtitle, id, photo }) => {
    return (
        <div className="section">
            <div className="section-content" id={id}>
                <div className='image-container'>
                    <img src={photo ? photo : ""} alt="real me." />
                </div>
                <h2 style={{'text-align':'center'}}>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Section;