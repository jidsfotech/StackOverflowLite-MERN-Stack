import React from 'react';
import './Tags.css';
import { FaQuestionCircle } from 'react-icons/fa';

const Tags = () => {
    return (
        <div className='tags-wrapper'>
            <div className='tags-heading'>
                <div>
                    <h4>Tags</h4>
                    <p>Add up to 5 tags to describe what your question is about</p>
                </div>
                <div tabIndex={0}>
                    <FaQuestionCircle />
                </div>
            </div>
            <form>
                <input placeholder='eg (c++ regex vba)'></input>
            </form>
        </div>
    )
}

export default Tags;