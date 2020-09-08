import React from 'react';
import Data from '../../../../data/data.json';
import Image from '../../../../data/images/photoPlaceholder.jpg';
import './about.css';

function About() {
  return (
    <div className="App">
      {/* Remove below h1 after page is ready */}
      <h1>AboutPage of Verkfærakistan</h1>
      <img src={Image} alt="placeholder" className="img-fluid rounded" width="30%" />
      {Data.map((dataDetail, index)=>{
        return <div>
            <h1>{dataDetail.about.title}</h1>
            <p>{dataDetail.about.content}</p>
          </div>
      })}
    </div>
  );
}

export default About;