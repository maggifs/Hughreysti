import React from 'react';

// Styles for sidebar
import './sidebar.css';

function NavigationBar() {
  return (
    <nav id="sidebar">
      <div class="sidebar-header">
          <h3><a href="/">Hughreysti</a></h3>
      </div>

      <ul class="list-unstyled components">
        <h4>Verkfærakistan</h4>
        <li>
          <a href="/verkfaerakistan">Heim</a>
        </li>
        <li>
          <a href="/verkfaerakistan/about">Um Spilið</a>
        </li>
        <li>
          <a href="/verkfaerakistan/brochure">Kennarabæklingur</a>
        </li>
        <li>
          <a href="/verkfaerakistan/remedy">Úrræði</a>
        </li>
        <li>
          <a href="/verkfaerakistan/gamerules">Leikreglur</a>
        </li>
        <li>
          <a href="/verkfaerakistan/faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;