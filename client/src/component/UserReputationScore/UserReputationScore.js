import React from "react";
import { Link } from "react-router-dom";
import "./UserReputationScore.css"
import profilePics from "../../assets/img/majeed.png";

const UserreputationScore = () => {
    return (
        <div className="question-author">
            <p>asked Apr 20 '16 at 4:08</p>
            <div className="author-details">
                <img src={profilePics} alt="author" />
                <div className="author" >
                    <Link className="author-name">zamani</Link>
                    {/* <div className="reputation-score">
                        <div className="totalFrom-author"> 0 </div>
                        <ul>
                            <li className="gold-honor"> </li>
                            <li> 0 </li>
                        </ul>
                        <ul>
                            <li className="silver-honor"> </li>
                            <li> 0</li>
                        </ul>
                        <ul>
                            <li className="bronze-honor"> </li>
                            <li>0</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default UserreputationScore;