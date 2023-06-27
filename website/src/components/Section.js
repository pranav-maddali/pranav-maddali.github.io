import React from 'react';

const Section = ({ title, subtitle, id }) => {
    return (
        <div className="section">
            <div className="section-content" id={id}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Section;