import React from 'react';
import './App.css';
import {
  BrowserRouter as 
  Router,
  Route, 
  Switch, 
  Redirect } from 'react-router-dom';
  import Home from './pages/Home'


function App() {
  return (
    <div className="App">
    {/**Route setup */}
    <Router>
      <switch>
        <Route path="/" exact component = {Home} />
      </switch>
    </Router>
    </div>
  );
}

export default App;
