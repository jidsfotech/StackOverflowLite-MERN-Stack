import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <div className="topNav">
                <div className="brandlogo">
                    Stackoverflow-Lite
                </div>
                <div className="searchBar">
                    search bar compoenet here
                </div>
                <div className="topNav-right-section">
                <div className="login">
                    <button>Login</button>
                </div>
                <div className="about">
                    <button>About</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;