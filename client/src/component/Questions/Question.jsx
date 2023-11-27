import React from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import UserReputationScore from "../UserReputationScore/UserReputationScore";

const Question = () => {
    return (
        <div className="question-summary">
            <div className="summary">
                <div className="votes">
                    <span> 5 </span>
                    <div> votes </div>
                </div>
                <div className="answers">
                    <span> 7 </span>
                    <div> answers </div>
                </div>
                <div className="views">
                    <span> 3 </span>
                    <div> views </div>
                </div>
            </div>
            <div className="question">
                <Link
                    to="/hhhhhhhh"
                    className="title">Representing Parametric Survival Model in 'Counting Process' form in JAGS
                </Link>
                <p >The Problem I am trying to build a survival-model in JAGS that allows for time-varying covariates. I'd like it to be a parametric model - for example, assuming survival follows the Weibull</p>
                <div className="question-meta">
                    <ul>
                        <li>javascript</li>
                        <li>java</li>
                        <li>nodejs</li>
                    </ul>
                    <UserReputationScore />
                </div>
            </div>
        </div>
    )
}

export default Question
