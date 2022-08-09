import React from 'react';
import './AllQuestions.css';
import Header from "../../component/Header/Header";
import Questions from "../../component/Questions/Question";
import RecentlyAskedQuestions from "../../component/RecentlyAskedQuestions/RecentlyAskedQuestion";

const Home = () => {
    return (
        <div className="questions-page">
            
            <Header />
            <div className="custom-header"></div>
                <div className="content">
                    <div className="main" role="all-question">
                        <div className="main-top-grid">
                            <h1>All Questions</h1>
                            <div className="ask-question-btn" role="ask question Button">
                                <a href="" >Ask Question</a>
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
                        <Questions />
                    </div>
                    <div className="main-right"></div>
                </div>
            </div>
    )
}

export default Home;