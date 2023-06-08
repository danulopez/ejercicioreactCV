import React from 'react';
import "./About.css"

const About = ({ about }) => {
  return (
    
      {about.map((element, i) => {
        console.log(element)
        return (
          <div key={i}>
            <p>{element.info}</p>
           

          </div>
        );
      })}
  );

  };

export default About

