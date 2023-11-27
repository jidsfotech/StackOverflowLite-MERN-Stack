import React from 'react';
import './QuestionsList.css';
import Question from "./Question";
import RightNavWidget from '../Widgets/RightNavWidget';
import QuestionsMetrix from './QuestionsMetrix';

const Questions = () => {
    return (
        <div className='questionsListWrapper'>
            <div>
                <header><QuestionsMetrix /></header>
                <section className="questionsWrapper">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </section>
            </div>
            <aside className="right-nav ads-and-widgets">
                <RightNavWidget />
            </aside>
        </div>
    )
}

export default Questions
    ;