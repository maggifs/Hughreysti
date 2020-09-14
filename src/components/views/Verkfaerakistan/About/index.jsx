import React from 'react';
import Data from '../../../../data/data.json';
import Image from '../../../../data/images/photoPlaceholder.jpg';
import './about.css';

function About() {
  return (
    <div className="App container">
      <img src={Image} alt="placeholder" className="img-fluid rounded" width="50%" />
      {Data.map((dataDetail, index)=>{
        return <div key={index}>
            <h1>{dataDetail.about.title}</h1>
            <p>{dataDetail.about.content}</p>
          </div>
      })}
    </div>
  );
}

export default About;