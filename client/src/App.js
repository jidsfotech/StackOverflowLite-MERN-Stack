import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AllQuestions from './pages/AllQuestions';
import SignUp_Login from './pages/SignUp-Login/SignUp-Login';


function App() {
  return (
    <div className="App">
      {/**Route setup */}
      <Router>
        <Routes>
          <Route path="/" exact component={AllQuestions} />
          <Route path="/authenticate" exact component={SignUp_Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
