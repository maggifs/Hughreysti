import React from 'react';
import Data from '../../../data/data.json';
import Image from '../../../data/images/personPlaceholder.jpg'

function FrontPage() {
  let photo = "../../../data/images/";
  let staff;
  Data.map((dataDetail)=>{ return (staff = dataDetail.staff.members)});
  return (
    <div className="App container">
      <h1>Velkomin/n á vefsíðu Hughreystis</h1>
      
      <div className="hughreystiAbout">
        <h3>Um Hughreysti</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lacinia metus. Pellentesque placerat congue ante, vitae lobortis lectus efficitur quis. Cras aliquet consequat enim. Mauris eget fringilla metus, ut bibendum mauris. Etiam blandit iaculis turpis. Etiam tortor ante, porttitor nec enim eu, euismod mattis massa. Proin tempor blandit libero sed accumsan. Sed aliquam, erat eget aliquam porta, sem dui gravida mauris, quis tristique massa turpis eget neque. Fusce eget lectus eget dolor convallis dictum ac ac massa. Ut enim ligula, malesuada non sem nec, consectetur sodales libero. Integer dictum orci magna, ac ullamcorper purus euismod a. Duis at sodales nunc.
        <br />
        Nunc tincidunt turpis sed sollicitudin feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Sed finibus rhoncus est consequat porta. Donec porttitor ullamcorper dolor, at bibendum leo placerat eu. Curabitur pulvinar libero sapien, non consectetur ipsum vulputate at. Sed in scelerisque est. Suspendisse vel mi urna. In interdum dui ligula, quis suscipit dui congue et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc at ultrices massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sed massa non lorem mattis aliquam. Fusce bibendum lobortis condimentum. Nunc et libero id erat imperdiet fermentum. Duis facilisis, risus non vehicula luctus, neque ante tincidunt libero, eu porttitor ligula urna in quam.
        </p>
        <h4>Verkefni</h4>
        <div id="verkfButtonBox">
          <a href="/verkfaerakistan/about" className="cta" id="verkfButton">
            <span>Verkfærakistan</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className="hughreystiStaff container">
        <h3>Stjórn Hughreystis</h3>
        <ul>
        {/*staff.map((person, index)=>{
          return <li key={index} >
            <div className="col">
              <img src={photo + person.image} alt="placeholder" className="img-fluid rounded" />
              <h3>{person.name}</h3>
              <span>{person.role}</span>
            </div>
          </li>
        })*/}
          <li>
            <div className="col-md" >
              <img src={Image} alt="placeholder" className="img-fluid rounded" />
              <h3>Nafn</h3>
              <span>Hlutverk</span>
            </div>
          </li>
          <li>
            <div className="col-md">
              <img src={Image} alt="placeholder" className="img-fluid rounded" />
              <h3>Nafn</h3>
              <span>Hlutverk</span>
            </div>
          </li>
          <li>
            <div className="col-md">
              <img src={Image} alt="placeholder" className="img-fluid rounded" />
              <h3>Nafn</h3>
              <span>Hlutverk</span>
            </div>
          </li>
          <li>
            <div className="col-md">
              <img src={Image} alt="placeholder" className="img-fluid rounded" />
              <h3>Nafn</h3>
              <span>Hlutverk</span>
            </div>
          </li>
          <li>
            <div className="col-md">
              <img src={Image} alt="placeholder" className="img-fluid rounded" />
              <h3>Nafn</h3>
              <span>Hlutverk</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FrontPage;