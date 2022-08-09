import React from "react";
import Home from '../home/home';
import Header from "../../component/Header/Header";
import './mainConatiner.css';
import LeftSideBar from '../../component/SideBar/LeftSideBar';
import AllQuestions from '../questions/AllQuestions';

const MainContainer = () => {
    return (
        <div className="">
            <div className="notify"></div>
            <Header />
            <div className="content">
                <div className="main-sidebar">
                    <LeftSideBar />
                </div>
                <div className="main-pages">
                    <AllQuestions />
                </div>
                <div className="right-sidebar">
                </div>
            </div>
        </div>
    )
}

export default MainContainer;