import React from 'react';

const Section = ({ title, subtitle, id }) => {
    return (
        <div className={"section"}>
            <div className="section-content" id={id}>
                <h1 style={{'text-align':'center'}}>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Section;