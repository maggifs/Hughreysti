import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import FrontPage from './components/views/FrontPage';
import SideBar from './components/views/SideBar';
import VAbout from './components/views/Verkfaerakistan/About';
import VFaq from './components/views/Verkfaerakistan/Faq';
import VGameRules from './components/views/Verkfaerakistan/GameRules';
import VRemedy from './components/views/Verkfaerakistan/Remedy';
import VTeacherBrochure from './components/views/Verkfaerakistan/TeacherBrochure';
import NotFound from './components/views/NotFound'
import './App.css';

function App() {
  let location = useLocation().pathname
  if(location !== "/") {
    return (
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <Switch>
            <Route path="/" exact component={FrontPage} />
              <Route path="/verkfaerakistan/about" exact component={VAbout} />
              <Route path="/verkfaerakistan/faq" exact component={VFaq} />
              <Route path="/verkfaerakistan/gamerules" exact component={VGameRules} />
              <Route path="/verkfaerakistan/remedy" exact component={VRemedy} />
              <Route path="/verkfaerakistan/brochure" exact component={VTeacherBrochure} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="wrapper">
        <div id="content">
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
  /*return (
    <div className="wrapper">
      <SideBar />
      <div id="content">
        <Switch>
          <Route path="/" exact component={FrontPage} />
            <Route path="/verkfaerakistan/about" exact component={VAbout} />
            <Route path="/verkfaerakistan/faq" exact component={VFaq} />
            <Route path="/verkfaerakistan/gamerules" exact component={VGameRules} />
            <Route path="/verkfaerakistan/remedy" exact component={VRemedy} />
            <Route path="/verkfaerakistan/brochure" exact component={VTeacherBrochure} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );*/
}

export default App;
