import React from 'react';

// Styles for sidebar
import './sidebar.css';

function NavigationBar() {
  return (
    <nav id="sidebar">
      <div className="btnToggle">
        <button id="sidebarToggle" className="btn btn-dark">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="sidebar-header">
          <h3><a href="/">Hughreysti</a></h3>
      </div>

      <ul className="components" id="sidebarComponents">
        <h4><a href="/verkfaerakistan/about">Verkfærakistan</a></h4>
        <li id="about">
          <a href="/verkfaerakistan/about">Um Spilið</a>
        </li>
        <li id="brochure">
          <a href="/verkfaerakistan/brochure">Kennarabæklingur</a>
        </li>
        <li id="remedy">
          <a href="/verkfaerakistan/remedy">Úrræði</a>
        </li>
        <li id="gamerules">
          <a href="/verkfaerakistan/gamerules">Leikreglur</a>
        </li>
        <li id="faq">
          <a href="/verkfaerakistan/faq">Algengar Spurningar</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;