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
            const pageWrapper = window.getComputedStyle(document.querySelector('.q_wrapper'), null);
            setSideMenuLeftMargin(pageWrapper.getPropertyValue("margin-left"));
            if (window.innerWidth < 652) {
                setShowLeftSideMenu(false)
            }
            if (window.innerWidth > 652) {
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
                    <section className="content">
                        <QuestionsList />
                    </section>
                </div>
            </div>
        </div >
    )
}

export default Questions
    ;