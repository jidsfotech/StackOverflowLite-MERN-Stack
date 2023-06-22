import React from 'react';
import './QuestionsList.css';
import Question from "./Question";
import HotQuestions from "../HotQuestions/HotQuestions";
import LeftSideBar from '../SideBar/LeftSideBar';

const Questions = () => {
    return (
        <div>
            <div className="questions-wrapper">
                <Question />
            </div>
            <div className="aside-right">
                <HotQuestions />
            </div>
        </div>
    )
}

export default Questions
    ;