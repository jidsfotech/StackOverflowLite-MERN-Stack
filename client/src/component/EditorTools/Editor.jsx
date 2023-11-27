import React, { useEffect, useRef, useState } from 'react';
import './Editor.css';
import EditorToolbar from './EditorToolBar';
import EditorTextArea from './EditorTextArea';
import EditorFormatingTips from './EditorFormartingTips'

const Editor = ({ setEditorContent, editorContent }) => {
    const [showFormartingTips, setShowFormartingTips] = useState(true);

    // Function to wrap selected text with markup
    const wrapTextWithMarkup = (openTag = null, closeTag = null, linkUrl = null, imageUrl = null) => {
        const textarea = document.getElementById('editor');
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        const selectedText = textarea.value.substring(startPos, endPos);
        const textBefore = textarea.value.substring(0, startPos);
        const textAfter = textarea.value.substring(endPos, textarea.value.length);
        let updatedContent;
        console.log(openTag, closeTag, linkUrl, imageUrl)

        if (linkUrl) {
            updatedContent = textBefore + `[]` + textAfter;
        }
        if (imageUrl) {
            updatedContent = textBefore + `[${selectedText}](${imageUrl})` + textAfter;
        }
        else {
            updatedContent = textBefore + openTag + selectedText + closeTag + textAfter;
            textarea.setSelectionRange(startPos + openTag.length, endPos + openTag.length);
        }
        setEditorContent(updatedContent);
        textarea.focus();
    };

    return (
        <div className='editor' >
            <EditorToolbar
                wrapTextWithMarkup={wrapTextWithMarkup}
                setShowFormartingTips={setShowFormartingTips}
                showFormartingTips={showFormartingTips}
            />
            <EditorFormatingTips showFormartingTips={showFormartingTips} />
            <EditorTextArea
                editorContent={editorContent}
                setEditorContent={setEditorContent}
            />
        </div>
    )
}

export default Editor;