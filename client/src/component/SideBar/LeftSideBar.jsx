import React from 'react'
import './LeftSideBar.css'

const LeftSideBar = () => {
    return (
        <div className='leftBarItems'>
            <div className='bar-item'>Home</div>
            <div className='bar-item'>PUBLIC</div>
            <div className='bar-item'>Questions</div>
            <ul className='bar-item'>
                <li>Tags</li>
                <li>Users</li>
            </ul>
        </div>
    )
}


export default LeftSideBar;