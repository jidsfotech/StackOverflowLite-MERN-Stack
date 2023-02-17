
import React from "react";
import "./HotQuestions.css";
import { Link } from "react-router-dom";

const HotQuestions = () => {
    return (
        <div className="hot-questions">
            <h2>Hot Questions With Most Answer</h2>
            <div className="hot-q-flex">
                <div className="hot-q-ans">22</div>
                <Link to="#" className="title hot-q-title">Can i use a Logo (Image file) from Github repository with MIT License?</Link>
            </div>
            <div className="hot-q-flex">
                <div className="hot-q-ans">22</div>
                <Link to="#" className="title hot-q-title">Can i use a Logo (Image file) from Github repository with MIT License?</Link>
            </div>
            <div className="hot-q-flex">
                <div className="hot-q-ans">22</div>
                <Link to="#" className="title hot-q-title">Can i use a Logo (Image file) from Github repository with MIT License?</Link>
            </div>
            <div className="hot-q-flex">
                <div className="hot-q-ans">22</div>
                <Link to="#" className="title hot-q-title">Can i use a Logo (Image file) from Github repository with MIT License?</Link>
            </div>
        </div>
    )
}

export default HotQuestions;