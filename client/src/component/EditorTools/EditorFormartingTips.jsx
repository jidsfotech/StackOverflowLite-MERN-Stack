import React, { useEffect, useState } from 'react';
import './EditorFormartingTips.css';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import Tips from './Tips';
import { getWindowInnerWidth } from '../../utilities/utils';
import Scrollbars from 'react-scrollbars-custom';

const EditorFormatingTips = ({ showFormartingTips }) => {
    const [tipsToDisplay, setTipsToDisplay] = useState('');
    const [hideTipsBox, setHideTipsBox] = useState(true);
    const [currenTipsBoxtNavId, setCurrenTipsBoxtNavId] = useState('');
    const [classSelectorForPageWrapper, setClassSelectorForPageWrapper] = useState('');
    // const [scrollbarHeight, setScrollbarHeight] = useState('3rem');


    const handleFormatingTipsToDisplay = (e) => {
        const navId = e.target.id;

        if (navId && navId !== currenTipsBoxtNavId) {
            setTipsToDisplay(navId);
            setCurrenTipsBoxtNavId(navId);
            if (hideTipsBox) {
                setHideTipsBox(false);
            }
        }

        if (navId === currenTipsBoxtNavId) {
            setHideTipsBox(true);
            setCurrenTipsBoxtNavId('');
        }
    }

    useEffect(() => {
        showFormartingTips ?
            setClassSelectorForPageWrapper('formarting-tips-wrapper') :
            setClassSelectorForPageWrapper('hide-formarting-tips-wrapper');
        const pageViewWidth = getWindowInnerWidth();
        // (pageViewWidth <= 650) ? setScrollbarHeight('2rem') : setScrollbarHeight('3rem');
        window.onresize = () => {
            const pageViewWidth = getWindowInnerWidth();
            // (pageViewWidth <= 650) ? setScrollbarHeight('3.5rem') : setScrollbarHeight('3rem');
            if (!showFormartingTips && pageViewWidth <= 650) {
                setClassSelectorForPageWrapper('formarting-tips-wrapper');
            }
            if (!showFormartingTips && pageViewWidth > 650) {
                setClassSelectorForPageWrapper('hide-formarting-tips-wrapper');
            }
        };
    }, [showFormartingTips]);

    return (
        <div className={classSelectorForPageWrapper}>
            <Scrollbars
                className='formarting-tips-nav'
                style={{ height: '2rem' }}
                noScrollY
                trackXProps={{
                    renderer: (props) => {
                        const { elementRef, ...restProps } = props;
                        return <span {...restProps} ref={elementRef} className='scrollbarTrackX' style={{}} />;
                    },
                }}
                thumbXProps={{
                    renderer: (props) => {
                        const { elementRef, ...restProps } = props;
                        return <span {...restProps} ref={elementRef} className="scrollbarThUmBX" style={{}} />;
                    },
                }}
            >
                <ul style={{ padding: '0.5rem' }}>
                    <li id="howToAddLink" onClick={handleFormatingTipsToDisplay}>Links</li>
                    <li id="howToAddImage" onClick={handleFormatingTipsToDisplay}>Images</li>
                    <li id="howToAddHeader" onClick={handleFormatingTipsToDisplay}>Styling/Headers</li>
                    <li id="howToAddLists" onClick={handleFormatingTipsToDisplay}>Lists</li>
                    <li id="howToAddBlockQuotes" onClick={handleFormatingTipsToDisplay}>Blockquotes</li>
                    <li id="howToAddCodes" onClick={handleFormatingTipsToDisplay}>Code</li>
                    <li id="howToAddHtml" onClick={handleFormatingTipsToDisplay}>HTML</li>
                    <li id="howToAddTables" onClick={handleFormatingTipsToDisplay}>Tables</li>
                    <li id="moreTips" >More <span><BsArrowUpRightSquare /></span></li>
                </ul>
            </Scrollbars>
            <div className={hideTipsBox ? 'hide-formarting-tips-box' : 'formarting-tips'}>
                <Tips tipsToDisplay={tipsToDisplay} />
            </div>
        </div >
    )
}
export default EditorFormatingTips;