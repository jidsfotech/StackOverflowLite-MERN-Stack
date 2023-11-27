import React from 'react';
import './SideBarNavigationArrow.css';
import {
    FaChevronDown,
    FaChevronUp

} from 'react-icons/fa';

export const SideBarNavigationUpArrow = ({ id, handleClick, showArrow }) => {
    return (
        <div
            id={id}
            className='widget-arrow'
            onClick={handleClick}
            style={!showArrow ? { display: 'none' } : { display: 'inline' }}>
            <FaChevronUp />
        </div>
    )
}


export const SideBarNavigationDownArrow = ({ id, handleClick, showArrow }) => {
    return (
        <div
            id={id}
            className='widget-arrow'
            onClick={handleClick}
            style={!showArrow ? { display: 'none' } : { display: 'inline' }}>
            <FaChevronDown />
        </div>
    )
}