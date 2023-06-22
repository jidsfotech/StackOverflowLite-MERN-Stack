import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Questions from './pages/questions/questions';
import SignUpLogin from './pages/auth/SignUpLogin';
import Home from './pages/index';


function App() {
  return (
    <div className="App">
      {/**Route setup */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Questions />} />
          <Route path="/questions" exact element={<Questions />} />
          <Route path="/authenticate" exact element={<SignUpLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
