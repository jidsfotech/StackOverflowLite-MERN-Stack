
import React from "react";
import "./RightNavWidget.css";
import { Link } from "react-router-dom";
import {
    FaStackOverflow,
    FaPen,
    FaRegCommentAlt
} from 'react-icons/fa'

const RightNavWidget = () => {
    return (
        <div className="right-nav-widget widget-wrapper">
            <ol>
                <li className="widget-item-header"> The Overflow Blog </li>
                <li><div><FaPen /></div> Understanding SRE (Ep. 597)</li>
                <li><div><FaPen /></div> Why everyone should be an AppSec specialist (Ep. 598)</li>
                <li className="widget-item-header"> Featured on Meta </li>
                <li><div><FaRegCommentAlt /></div> Moderation strike: Results of negotiations</li>
                <li><div><FaRegCommentAlt /></div> Our Design Vision for Stack Overflow and the Stack Exchange network</li>
                <li><div><FaStackOverflow /></div> Temporary policy: Generative AI (e.g., ChatGPT) is banned</li>
                <li><div><FaStackOverflow /></div> Preview of Search and Question-Asking Powered by GenAI</li>
                <li><div><FaStackOverflow /></div> Collections: A New Feature for Collectives on Stack Overflow</li>
            </ol>
        </div>
    )
}

export default RightNavWidget;