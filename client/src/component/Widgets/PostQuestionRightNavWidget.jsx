import React, { createRef, useEffect, useState } from 'react';
import './PostQuestionRightNavWidget.css';
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import {
    SideBarNavigationUpArrow,
    SideBarNavigationDownArrow
} from './SideBarNavigationArrow';

const PostQustionRightNavWidget = () => {
    const [firstGuideContentIsOpen, setFirstGuideContentIsOpen] = useState(false)
    const [secondGuideContentIsOpen, setSecondGuideContentIsOpen] = useState(false)
    const [thirdGuideContentIsOpen, setThirdGuideContentIsOpen] = useState(false)
    const [stepOneGuideContentIsOpen, setStepOneGuideContentIsOpen] = useState(false)
    const [stepTwoGuideContentIsOpen, setStepTwoGuideContentIsOpen] = useState(false)
    const [stepThreeGuideContentIsOpen, setThreeOnedGuideContentIsOpen] = useState(false)
    const [showArrow, setShowArrow] = useState(true)

    const toggleStepsDropDown = (id) => {
        if (id === 'first-guide-up-arrow' || id === 'first-guide-down-arrow') {
            setFirstGuideContentIsOpen(!firstGuideContentIsOpen);
        }
        if (id === 'second-guide-up-arrow' || id === 'second-guide-down-arrow') {
            setSecondGuideContentIsOpen(!secondGuideContentIsOpen)
        }
        if (id === 'third-guide-up-arrow' || id === 'third-guide-down-arrow') {
            setThirdGuideContentIsOpen(!thirdGuideContentIsOpen)
        }
        if (id === 'step-one-up-arrow' || id === 'step-one-down-arrow') {
            setStepOneGuideContentIsOpen(!stepOneGuideContentIsOpen)
        }
        if (id === 'step-two-up-arrow' || id === 'step-two-down-arrow') {
            setStepTwoGuideContentIsOpen(!stepTwoGuideContentIsOpen)
        }
        if (id === 'step-three-up-arrow' || id === 'step-three-down-arrow') {
            setThreeOnedGuideContentIsOpen(!stepThreeGuideContentIsOpen)
        }
    }

    const handleNavigationArrowClick = (event) => {
        const menuArrowEle = document.getElementById(event.currentTarget.id);
        const menuTitleEle = menuArrowEle.parentElement;
        const contentEle = menuTitleEle.parentElement.children[1];
        if (window.innerWidth > 600 && menuTitleEle === 'first-guide-title') {
            contentEle.style.display = 'flex';
        } else {
            contentEle.style.display = (window.getComputedStyle(contentEle).getPropertyValue('display') === 'none') ? 'flex' : 'none';
        }
        toggleStepsDropDown(event.currentTarget.id);
    };

    useEffect(() => {
        const fisrtGuideContentDiv = document.getElementById('first-gudie-content');
        const fisrtGuideStepOneHeaderDiv = document.getElementById('first-gudie-step-one-content');
        if (window.innerWidth > 900) {
            fisrtGuideContentDiv.style.display = 'flex';
            setShowArrow(false);
        }
        window.addEventListener('resize', (event) => {
            if (window.innerWidth > 900) {
                fisrtGuideContentDiv.style.display = 'flex';
                setShowArrow(false);
            } else {
                fisrtGuideContentDiv.style.display = 'none';
                setShowArrow(true);
            }
        })
        if (fisrtGuideStepOneHeaderDiv) {
            fisrtGuideStepOneHeaderDiv.style.display = 'flex';
            setStepOneGuideContentIsOpen(!stepOneGuideContentIsOpen)
        }
    }, [])

    return (
        <div className='post-qust-sidebar-widget'>
            <div className='post-qust-sidebar-widget-item'>
                <div id="first-guide-title" className='guide-header'>
                    Step 1:Draft your question
                    {
                        firstGuideContentIsOpen
                            ? <SideBarNavigationUpArrow
                                id={'first-guide-down-arrow'}
                                handleClick={handleNavigationArrowClick}
                                showArrow={showArrow}
                            />
                            : <SideBarNavigationDownArrow
                                id={'first-guide-down-arrow'}
                                handleClick={handleNavigationArrowClick}
                                showArrow={showArrow}
                            />
                    }
                </div>
                <div className="post-qust-gudie-content-wrapper" id="first-gudie-content">
                    <p>The community is here to help you with specific coding, algorithm, or language problems.</p>
                    <p>Avoid asking opinion-based questions.</p>
                    <div className='post-quest-guide step-one'>
                        <div id="first-gudie-step-one-header">
                            <span>1.</span>
                            Summerize the problem
                            {
                                stepOneGuideContentIsOpen
                                    ? <SideBarNavigationUpArrow
                                        id={'step-one-down-arrow'}
                                        handleClick={handleNavigationArrowClick}
                                        showArrow={true}
                                    />
                                    : <SideBarNavigationDownArrow
                                        id={'step-one-down-arrow'}
                                        handleClick={handleNavigationArrowClick}
                                        showArrow={true}
                                    />
                            }
                        </div>
                        <div id="first-gudie-step-one-content">
                            <ol>
                                <li><span><BsDot /></span>Include details about your goal</li>
                                <li><span><BsDot /></span>Describe expected and actual results</li>
                                <li><span><BsDot /></span>Include any error messages</li>
                            </ol>
                        </div>
                    </div>
                    <div className='post-quest-guide step-two'>
                        <div>
                            <span>2.</span>
                            Describe what you've tried
                            {
                                stepTwoGuideContentIsOpen
                                    ? <SideBarNavigationUpArrow
                                        id={'step-two-down-arrow'}
                                        handleClick={handleNavigationArrowClick}
                                        showArrow={true}
                                    />
                                    : <SideBarNavigationDownArrow
                                        id={'step-two-down-arrow'}
                                        handleClick={handleNavigationArrowClick}
                                        showArrow={true}
                                    />
                            }
                        </div>
                        <div className={'ask-question-guide'}>
                            <p>
                                Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.
                            </p>
                        </div>
                    </div>
                    <div className='post-quest-guide step-three'>
                        <div>
                            <span>3.</span>
                            Show some code
                            {
                                stepThreeGuideContentIsOpen
                                    ? <SideBarNavigationUpArrow
                                        id={'step-three-down-arrow'}
                                        handleClick={handleNavigationArrowClick}
                                        showArrow={true}
                                    />
                                    : <SideBarNavigationDownArrow
                                        id={'step-three-down-arrow'}
                                        handleClick={handleNavigationArrowClick}
                                        showArrow={true}
                                    />
                            }
                        </div>
                        <div className={'ask-question-guide'}>
                            <p>
                                When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='post-qust-sidebar-widget-item'>
                <div id="second-guide-title" className='guide-header'>
                    Have a non programming question?
                    {
                        secondGuideContentIsOpen
                            ? <SideBarNavigationUpArrow
                                id={'second-guide-up-arrow'}
                                handleClick={handleNavigationArrowClick}
                                showArrow={true}
                            />
                            : <SideBarNavigationDownArrow
                                id={'second-guide-up-arrow'}
                                handleClick={handleNavigationArrowClick}
                                showArrow={true}
                            />
                    }
                </div>
                <div className='post-qust-gudie-content-wrapper second-guide-content'>
                    <ol>
                        <li className='second-guide-content-links'>Super user</li>
                        <li>Troubleshooting hardware and software issues</li>
                    </ol>
                    <ol>
                        <li className='second-guide-content-links'>Software engineering</li>
                        <li>For software development methods and process questions</li>
                    </ol>
                    <Link className='second-guide-content-links'>Hardware recommendations</Link>
                    <Link className='second-guide-content-links'>Software recommendations</Link>
                    <div>Ask questions about the site on meta</div>
                </div>
            </div>

            <div className='post-qust-sidebar-widget-item'>
                <div id="third-guide-title" className='guide-header'>
                    More helpful links
                    {
                        thirdGuideContentIsOpen
                            ? <SideBarNavigationUpArrow
                                id={'third-guide-up-arrow'}
                                handleClick={handleNavigationArrowClick}
                                showArrow={true}
                            />
                            : <SideBarNavigationDownArrow
                                id={'third-guide-up-arrow'}
                                handleClick={handleNavigationArrowClick}
                                showArrow={true}
                            />
                    }
                </div>
                <div className='post-qust-gudie-content-wrapper'>
                    <p>Find more information about how to ask a good question here</p>
                    <p>Visit the help center </p>
                </div>
            </div>
        </div>
    )
}

export default PostQustionRightNavWidget;