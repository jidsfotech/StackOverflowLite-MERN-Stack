import React from 'react';
import './questions.css';
import Header from "../../component/Header/Header";
import Question from "../../component/Question/Question";
import HotQuestions from "../../component/HotQuestions/HotQuestions";
import LeftSideBar from '../../component/SideBar/LeftSideBar';

const Questions = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="aside-left">
                    <LeftSideBar />
                </div>
                <div className="questions-wrapper">
                    <Question />
                </div>
                <div className="aside-right">
                    <HotQuestions />
                </div>
            </div>
        </div>
    )
}

export default Questions
    ;