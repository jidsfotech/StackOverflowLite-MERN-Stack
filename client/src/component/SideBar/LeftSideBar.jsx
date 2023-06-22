import React, { useEffect, useState } from 'react'
import './LeftSideBar.css'
import {
    RiEarthFill,
    AiFillInfoCircle,
    AiFillStar,
    FaInfoCircle,
    FaGlobeAmericas,
    FaStar,
} from 'react-icons/fa';
import sidebarPromo from "../../assets/img/teams-illo-free-sidebar-promo.svg";
import {
    leftSideMunuTabsPageLink,
    leftMenuSelectedTabLinktyle,
    leftMenuSelectedTabStyle
} from '../../utilities/constants';
import { Link } from 'react-router-dom';



const LeftSideBar = ({ showMobileDropDownMenu, showLeftSideMenu, marginLeft }) => {
    const [componentClass, setComponentClass] = useState('hidden');
    const [leftMargin, setLeftMargin] = useState(0)


    // Set mobile drop down menu
    useEffect(() => {
        if (showMobileDropDownMenu) {
            setComponentClass('mobileDropDownMenu');
        }
        else if (!showMobileDropDownMenu) {
            setComponentClass('hidden');
        }
    }, [showMobileDropDownMenu]);

    // Set left side menu
    useEffect(() => {
        if (showLeftSideMenu) {
            setComponentClass('asideLeftWrapper');
        }
        else if (!showLeftSideMenu) {
            setComponentClass('hidden');
        }
    }, [showLeftSideMenu]);

    // Set  focus on a  tab base on the current page
    useEffect(() => {
        const pagePath = window.location.pathname;
        let tabIdx = leftSideMunuTabsPageLink.filter(obj => obj.path === pagePath);
        if (tabIdx[0].id) {
            const tabEle = document.getElementById(tabIdx[0].id);
            const tabEleLink = tabEle.querySelectorAll('.link');
            Object.assign(tabEle.style, leftMenuSelectedTabStyle);
            Object.assign(tabEleLink[0].style, leftMenuSelectedTabLinktyle);
            // document.getElementById(tabIdx[0].id).focus();
        }
    }, []);

    // Set left side menu
    // useEffect(() => {
    //     setLeftMargin(marginLeft);
    //     console.log('side nav',marginLeft)
    // }, [marginLeft]);

    return (
        <div className={`${componentClass}`}>
            <div className='="asideLeft'>
                <div className='asideLeftTop'>
                    <div className="asideTab leftNavLink" tabIndex={0} id='homeTabIdx'>
                        <Link to='/' className="link"> Home</Link>
                    </div>
                    <div className='asideTab'>
                        <div className='pqTab'>PUBLIC</div>
                        <div className="pqTab leftNavLink" id='questionsTabIdx' tabIndex={0}>
                            <Link to='/questions' className="link">
                                <span><FaGlobeAmericas /></span>
                                Questions
                            </Link>
                        </div>
                        <ol className='pqTab'>
                            <li className='leftNavLink' tabIndex={0} id='tagsTabIdx'>Tags</li>
                            <li className='leftNavLink' tabIndex={0} id='usersTabIdx' >
                                <Link to="/authenticate" className="link">Users</Link>
                            </li>
                            <li className='leftNavLink' tabIndex={0} id='companiesTagIdx'>Companies</li>
                        </ol>
                    </div>
                    <div className='asideTab '>
                        <div className='clTab'> COLLECTIVES <span><FaInfoCircle /></span></div>
                        <div className='clTab leftNavLink' tabIndex={0} id='explorTabIdx'>
                            <span><FaStar /></span>Explore Collectives
                        </div>
                    </div>
                    <div className='asideTab'>
                        TEAMS
                    </div>
                </div>
                <div className='asideBottom'>
                    <p><span>Stack Overflow for Teams –</span> Start collaborating and sharing organizational knowledge.</p>
                    <div>
                        <img src={sidebarPromo} alt='sidebar-promo'></img>
                    </div>
                    <div>
                        <button>Create a free Team </button>
                        <div>Why Teams?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;