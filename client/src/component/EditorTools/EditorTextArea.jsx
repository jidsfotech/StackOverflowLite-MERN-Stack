import React from 'react';
import './EditorTextArea.css';
import Tags from './Tags';

const EditorTextArea = ({ setEditorContent, editorContent }) => {

    return (
        <div className='text-area-editor-wrapper' tabIndex='0' id='text-area-editor-wrapper'>
            <div tabIndex='0'>
                <textarea
                    id="editor"
                    tabIndex='0'
                    value={editorContent}
                    onChange={(e) => setEditorContent(e.target.value)}
                    onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('text-area-editor-wrapper').click()

                    }}
                />
            </div>
            <span></span>
        </div>
    )
}

export default EditorTextArea;