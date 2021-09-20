import React from "react";
import { Link } from "react-router-dom";
import "./UserReputationScore.css"
import image from "../../img/majeed.png";

const UserreputationScore = () => {
    return (
        <div className="question-author">
            <p>asked Apr 20 '16 at 4:08</p>
            <div className="author-details">
                <img src={image} alt="author-image" />
                <div className="author" >
                    <Link className="author-name">zamani</Link>
                    <div className="reputation-score">
                        <div className="totalFrom-author"> 0 </div>
                        <ul className="score">
                            <li className="gold indicator"> </li>
                            <li> 0 </li>
                        </ul>
                        <ul className="score">
                            <li className="silver indicator"> </li>
                            <li> 0</li>
                        </ul>
                        <ul className="score">
                            <li className="bronze indicator"> </li>
                            <li>0</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserreputationScore;