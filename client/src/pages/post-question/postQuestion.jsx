import React, { useEffect, useState } from 'react';
import './postQuestion.css';
import Header from '../../component/Header/Header';
import { Link } from 'react-router-dom';
import PostQuestionEditor from '../../component/Editors/PostQuestionEditor';
import PostQustionRightNavWidget from '../../component/Widgets/PostQuestionRightNavWidget';


const PostQuestionPage = () => {
    return (
        <div>
            <Header />
            <div className='post-question-page-wrapper'>
                <div className='post-question-main'>
                    <div className='post-question-page-header'>Ask a public question</div>
                    <section>
                        <aside>
                            <PostQustionRightNavWidget />
                        </aside>
                        <div className='toggle-ask-quest-mode'>
                            <input
                                type='checkbox'
                                title="Click to toggle the ask question mode between Normal and the Ask Wizard."
                                id='toggle-ask-question-mode'>
                            </input>
                            <label htmlFor='toggle-ask-question-mode'></label>
                            <span>The Ask Wizard: Enable for a more step-by-step approach to asking a question</span>
                        </div>
                        <article>
                            <PostQuestionEditor />
                        </article>
                    </section>
                </div>
                <div className="review-question">
                    <button className='custom-btn-dark-blue'>Review your question</button>
                </div>
            </div>
        </div>
    )
}

export default PostQuestionPage;