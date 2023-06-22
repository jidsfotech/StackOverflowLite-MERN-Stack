import React, { useEffect, useState } from 'react';
import './questions.css';
import Header from "../../component/Header/Header";
import QuestionsList from "../../component/Questions/QuestionsList";
import LeftSideBar from '../../component/SideBar/LeftSideBar';

const Questions = () => {
    const [showLeftSideMenu, setShowLeftSideMenu] = useState(false);
    const [sideMenuLeftMargin, setSideMenuLeftMargin] = useState(0);

    useEffect(() => {
        setShowLeftSideMenu(true);
        window.addEventListener('resize', () => {
            const marginleft = window.getComputedStyle(document.querySelector('.q_wrapper'), null).getPropertyValue("margin-left");
            setSideMenuLeftMargin(marginleft);

            if (window.innerWidth < 530) {
                setShowLeftSideMenu(false)
            }
            if (window.innerWidth > 530) {
                setShowLeftSideMenu(true)
            }
        })
    }, []);

    return (
        <div>
            <Header />
            <div className='q_wrapper'>
                <LeftSideBar showLeftSideMenu={showLeftSideMenu} marginLeft={sideMenuLeftMargin} />
                <div className='q_main' id='q_main'>
                    <div className="content">
                        {/* <QuestionsList /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Questions
    ;