import React, { useState, useEffect } from 'react';
import './Tips.css';
import { formatingTipsContent } from '../../utilities/constants';


const Tips = ({ tipsToDisplay }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (formatingTipsContent[tipsToDisplay]) {
            console.log(formatingTipsContent[tipsToDisplay])
            setContent(formatingTipsContent[tipsToDisplay][0]);
        }
    });


    if (tipsToDisplay === 'howToAddLink') {
        return (
            <div className='how-to-add-link'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }

    if (tipsToDisplay === 'howToAddImage') {
        return (
            <div className='how-to-add-image'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }

    if (tipsToDisplay === 'howToAddHeader') {
        return (
            <div className='how-to-add-header'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }

    if (tipsToDisplay === 'howToAddLists') {
        return (
            <div className='how-to-add-lists'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }

    if (tipsToDisplay === 'howToAddBlockQuotes') {
        return (
            <div className='how-to-add-block-qoutes'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }
    if (tipsToDisplay === 'howToAddCodes') {
        return (
            <div className='how-to-add-codes'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }
    if (tipsToDisplay === 'howToAddHtml') {
        return (
            <div className='how-to-add-html'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }
    if (tipsToDisplay === 'howToAddTables') {
        return (
            <div className='how-to-add-tables'>
                <div className='fomart-tips-text' dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        );
    }

    return (
        <div className='notips'>No Tips</div>
    );
}

export default Tips;