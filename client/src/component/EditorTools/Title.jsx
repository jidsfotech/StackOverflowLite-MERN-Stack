import React from 'react';
import './Title.css';

const Title = () => {
    return (
        <div className='title-wrapper'>
            <div className='title-heading'>
                <div>
                    <h3>Title</h3>
                    <p>Be specific and imagine you’re asking a question to another person</p>
                </div>
            </div>
            <form>
                <input placeholder='eg is there an R function for finding the index of an element in a vector'></input>
            </form>
        </div>
    )
}

export default Title;