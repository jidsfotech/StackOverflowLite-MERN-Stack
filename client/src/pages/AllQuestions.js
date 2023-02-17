import React from 'react';
import './AllQuestions.css';
import Header from "../component/Header/Header";
import Questions from "../component/Questions/Question";
import HotQuestions from "../component/HotQuestions/HotQuestions";

const Home = () => {
    return (
        <div className="questions-page">
            <div className="notify-container"></div>
            <Header />
            <div className="custom-header"></div>
            <div className="container">
                <div className="left-sidebar "></div>
                <div className="content">
                    <div className="main" >
                        <div className="main-top-grid">
                            <h1>All Questions</h1>
                            <div className="ask-question-btn" role="button">
                                <a href="/home">Ask Question</a>
                            </div>
                        </div>
                        <div className="data-query">
                            <div className="in-archaive">1523300 questions</div>
                            <div className="query">
                                <div className="newest">newest</div>
                                <div className="active">active</div>
                                <div className="unanswered">unanswered</div>
                            </div>
                        </div>
                        <Questions />
                    </div>
                    <div className="main-right"><HotQuestions /></div>
                </div>
            </div>
        </div>
    )
}

export default Home;