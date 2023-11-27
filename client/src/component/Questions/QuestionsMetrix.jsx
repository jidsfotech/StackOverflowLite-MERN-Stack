import React, { useEffect, useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './QuestionsMetrix.css';
import { FaWifi, FaSortDown } from 'react-icons/fa';
import { MoreFilterPopover } from './MoreFilterPopover';
import { getOffset } from '../../utilities/utils';

const QuestionsMetrix = () => {

    const [currentActivefilter, setCurrentActivefilter] = useState('newest');
    const [showMoreFilterPopover, setShowMoreFilterPopover] = useState(false);
    const MoreFilterPopoverRef = useRef();
    const navigate = useNavigate();

    const handleFilterActiveState = (event) => {
        document.getElementById(currentActivefilter).classList.remove('activeFilter');
        let clickedFilter = document.getElementById(event.target.id);
        if (event.target.id === 'more') {
            document.getElementById('more').classList.add('activeFilter');
            setCurrentActivefilter('more');
        }
        if (clickedFilter) {
            document.getElementById(event.target.id).classList.add('activeFilter');
            setCurrentActivefilter(event.target.id);
        }
    }

    const toggleMoreFilterPopOver = (event) => {
        const ele = document.getElementById(event.target.id);
        adjustMoreFilterPopoverPosition(ele);
        !showMoreFilterPopover ? setShowMoreFilterPopover(true) : setShowMoreFilterPopover(false);
    }

    // adjust the position of the more filter popver dropdown
    const adjustMoreFilterPopoverPosition = (ele) => {
        const { left, top } = getOffset(ele);
        document.querySelector('.more-filters-popover-wrapper').style.left = `${left - 80}px`;

    }


    const handleClickOutside = (e) => {
        if (MoreFilterPopoverRef.current && !MoreFilterPopoverRef.current.contains(e.target)) {
            setShowMoreFilterPopover(false);
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        document.getElementById(currentActivefilter).classList.add('activeFilter');
        document.querySelector('.metrixGridBox')
            .querySelectorAll('li')
            .forEach(item => item.addEventListener('click', handleFilterActiveState));
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            const ele = document.getElementById('more');
            adjustMoreFilterPopoverPosition(ele);
        });
    });

    return (
        <div className='questionsMetricsWrapper'>
            <div className='questionMetrics'>
                <div className='metricsHeader'>
                    <p>All Questions</p>
                    <button
                        onClick={() => navigate('/post-question')}
                        className='custom-btn-dark-blue'>
                        Ask Qestion
                    </button>
                </div>
                <div className='metrics'>
                    <p>231, 3547474 questions</p>
                    <section>
                        <ol className='metrixGridBox'>
                            <li id='newest' tabIndex='0'>Newest</li>
                            <li id='active' tabIndex='0' >Active</li>
                            <li id='bounced' tabIndex='0'>Bounced <span>300</span> </li>
                            <li id='unanswered' tabIndex='0'>Unanswered</li>
                            <li id='more' tabIndex='0'
                                onClick={toggleMoreFilterPopOver}
                            >
                                More<FaSortDown onClick={(e) => e.stopPropagation()} />
                            </li>
                        </ol>
                        <div className='more-filters-popover-wrapper'>
                            <MoreFilterPopover
                                showMoreFilterPopover={showMoreFilterPopover}
                                MoreFilterPopoverRef={MoreFilterPopoverRef}
                            />
                        </div>
                        <button><span><FaWifi /></span> Filter</button>
                    </section>
                </div>
            </div>
            <section className='filterQuestions'>
                <div className='filterBy'>
                    <p>Filter by</p>
                    <ul>
                        <li>
                            <input></input>
                            <span>No answer</span>
                        </li>
                        <li>
                            <input></input>
                            <span>No accepted answer</span>
                        </li>
                        <li>
                            <input></input>
                            <span>Has bounty</span>
                        </li>
                    </ul>
                </div>
                <div className='filterBy'>
                    <p>Filter by</p>
                    <ul>
                        <li>
                            <input type='checkbox' name='no-answer' value='no answer'></input>
                            <span>No answer</span>
                        </li>
                        <li>
                            <input type='checkbox' name='no accepted answer' value='no accepted answer'></input>
                            <span>No accepted answer</span>
                        </li>
                        <li>
                            <input type='checkbox' name='has bounty' value='has bounty'></input>
                            <span>Has bounty</span>
                        </li>
                    </ul>
                </div>
                <div className='SortBy'>
                    <p>Sorted by</p>
                    <ul>
                        <li>
                            <input type='checkbox' name='newest' value='newest'></input>
                            <span>Newest</span>
                        </li>
                        <li>
                            <input type='checkbox' name='recent activity' value='recent activity'></input>
                            <span>Recent activity</span>
                        </li>
                        <li>
                            <input type='checkbox' name='highest score' value='highest score'></input>
                            <span>Highest score</span>
                        </li>
                        <li>
                            <input type='checkbox' name='most frequent' value='most frequent'></input>
                            <span>Most frequent</span>
                        </li>
                        <li>
                            <input type='checkbox' name='bounty ending soon' value='bounty ending soon'></input>
                            <span>Bounty ending soon</span>
                        </li>
                    </ul>
                </div>
                <div className='taggedWith'>
                    <p>Tagged with</p>
                    <ul>
                        <li>
                            {/* <input type='option' name='my watched tag' value='my watched tag'></input> */}
                            <span>My watched tags</span>
                        </li>
                        <li>
                            {/* <input type='option' name='the following tags:' value='the following tags:'></input> */}
                            <span>The following tags:</span>
                        </li>
                    </ul>
                    {/* <input type='text' placeholder='eg. javascript or python'></input> */}
                </div>
                <div className='filterAction'>
                    <button> Apply filter</button>
                    <p>Cancel</p>
                </div>
            </section>
        </div>
    )
}

export default QuestionsMetrix;