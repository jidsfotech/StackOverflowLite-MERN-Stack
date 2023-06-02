import React from 'react';
import './App.css';
import {
  BrowserRouter as 
  Router,
  Route, 
  Switch, 
  Redirect } from 'react-router-dom';
  import AllQuestions from './pages/questions/AllQuestions';
  import MainContainer from './pages/mainContainer/mainConatiner'
  import SignUp_Login from './pages/auth/SignUp-Login';


function App() {
  return (
    <div className="App">
    {/**Route setup */}
    <Router>
      <Switch>
        <Route path="/" exact component = {MainContainer} />
        <Route path="/authenticate" exact component = {SignUp_Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
