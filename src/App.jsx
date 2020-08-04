import React from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './components/views/FrontPage';
import SideBar from './components/views/SideBar';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <div id="content">
        <Route path="/" exact component={FrontPage} />
      </div>
    </div>
  );
}

export default App;
