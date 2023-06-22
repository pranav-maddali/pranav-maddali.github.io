import React from 'react';

const Section = ({ title, subtitle, id }) => {
    return (
        <div className="section">
            <div className="section-content" id={id}>
                <h2 style={{'text-align':'center'}}>{title}</h2>
                <p style={{'lineHeight':'2'}}>{subtitle}</p>
            </div>
        </div>
    );
}

export default Section;