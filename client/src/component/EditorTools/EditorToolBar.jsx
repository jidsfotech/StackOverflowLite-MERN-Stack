import React, { useEffect, useRef, useState } from 'react';
import './EditorToolBar.css';
import {
  FaQuoteRight,
  FaRedoAlt,
  FaUndoAlt,
  FaBold,
  FaItalic
} from 'react-icons/fa';
import {
  BsBraces,
  BsFillFileEarmarkCodeFill,
  BsLink45Deg,
  BsImageFill,
  BsTypeBold,
  BsTypeItalic,
  BsListOl,
  BsListUl,
  BsCalendar2Minus,
  BsCalendar2,
  BsDistributeVertical
} from 'react-icons/bs';
import { getWindowInnerWidth } from '../../utilities/utils';


const EditorToolbar = ({ wrapTextWithMarkup, setShowFormartingTips, showFormartingTips }) => {
  const [listItems, setListItems] = useState([]);
  const [classSelectorForTipsMenuButton, setClassSelectorForTipsMenuButton] = useState('');


  // Function to insert a link
  const insertLink = () => {
    const linkUrl = prompt('Enter a URL:');
    if (linkUrl) {
      wrapTextWithMarkup(null, null, linkUrl, null);
    }
  };

  // Function to insert code
  const insertCode = () => {
    wrapTextWithMarkup('`', '`');
  };

  // Function to insert an image
  const insertImage = () => {
    const imageUrl = prompt('Enter the image URL:');
    if (imageUrl) {
      wrapTextWithMarkup(null, null, null, imageUrl);
    }
  };

  // Function to toggle list item (numbered or unordered)
  const toggleListItem = (listType) => {
    if (listItems.includes(listType)) {
      const updatedItems = listItems.filter(item => item !== listType);
      setListItems(updatedItems);
    } else {
      setListItems([...listItems, listType]);
    }
    wrapTextWithMarkup(listType === 'ordered' ? '\n 1. ' : '\n - ', '\n');
  };

  useEffect(() => {
    setClassSelectorForTipsMenuButton('show-tips-menu-button tips-menu-button');
  }, []);

  useEffect(() => {
    showFormartingTips ?
      setClassSelectorForTipsMenuButton('show-tips-menu-button tips-menu-button') :
      setClassSelectorForTipsMenuButton('fade-tips-menu-button tips-menu-button');
  }, [showFormartingTips]);

  const toggleFormartingTips = () => setShowFormartingTips(!showFormartingTips);

  return (
    <div className="editor-toolbar-wrapper">
      <div className='editor-toolbar'>
        <div className='inline-toolbar'>
          <button onClick={() => wrapTextWithMarkup('**', '**')}><FaBold /></button>
          <button onClick={() => wrapTextWithMarkup('_', '_')}><FaItalic /></button>
        </div>
        <div className='block-toolbar'>
          <button onClick={insertLink}><BsLink45Deg /></button>
          <button onClick={() => wrapTextWithMarkup('>', '\n')}><FaQuoteRight /></button>
          <button onClick={insertCode}><BsBraces /></button>
          <button onClick={insertImage}><BsImageFill /></button>
          <button ><BsFillFileEarmarkCodeFill /></button>
        </div>
        <div className='list-toolbar'>
          <button onClick={() => toggleListItem('ordered')}><BsListOl /> </button>
          <button onClick={() => toggleListItem('unordered')}><BsListUl /></button>
          <button><BsCalendar2Minus /></button>
          <button><BsDistributeVertical /></button>
        </div>
        <div className='redo-undo-toolbar'>
          <button><FaUndoAlt /></button>
          <button><FaRedoAlt /></button>
        </div>
      </div>
      <div
        className={classSelectorForTipsMenuButton}
        id='tips-menu-button'
        onClick={toggleFormartingTips}>
        Hide formarting tips
      </div>
    </div>
  );
};

export default EditorToolbar;
