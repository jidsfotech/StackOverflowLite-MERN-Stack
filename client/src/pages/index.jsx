import React from "react";
import Header from "../component/Header/Header";
import './index.css';
import HomeContainer from "../component/HomeContainer/HomeContainer";

const Home = () => {
    return (
        <div className="main">
            <Header />
            <HomeContainer />
        </div>
    )
}

export default Home;

