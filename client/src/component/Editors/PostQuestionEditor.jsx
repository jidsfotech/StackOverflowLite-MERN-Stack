import React, { useEffect, useRef, useState } from 'react';
import './PostQuestionEditor.css';
import Tags from '../EditorTools/Tags';
import Editor from '../EditorTools/Editor';
import Title from '../EditorTools/Title';
import { StacksEditor } from "@stackoverflow/stacks-editor";
import "@stackoverflow/stacks-editor/dist/styles.css";
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";
import EditorFormatingTips from '../EditorTools/EditorFormartingTips';
import { formatingTipsContent } from '../../utilities/constants';
import { StacksEditorOptions } from '@stackoverflow/stacks-editor';
import { stackEditorOptions } from '../MardownRender/MarkdownRender';

const PostQuestionEditor = () => {
    const [answerYourQuestion, setAnswerYourQuestion] = useState(false)
    const [editorContent, setEditorContent] = useState('');
    const ref = useRef();

    const handleAnswerYourQuestionToggle = (e) => {
        setAnswerYourQuestion(e.target.checked)
    }

    useEffect(() => {
        new StacksEditor(document.querySelector("#post-editor-container"), '', stackEditorOptions);
        new StacksEditor(document.querySelector("#answer-your-editor-container"), '', stackEditorOptions);
    }, []);

    return (
        <div className='post-question-editor-wrapper'>
            {/* Title Section */}
            <Title />

            <p>Body</p>
            <p>Include all the information someone would need to answer your question</p>
            {/* Post Question Editor Section*/}
            <div id="post-editor-container" className='post-editor-container'></div>
            {/* <ul>
                <li>```<span>code</span> ```</li>
                <li>**bold**</li>
                <li>*italic*</li>
                <li>{`>quote`}</li>
            </ul> */}
            {/* Render Section */}
            {/* <div className='draft'>Draft saved</div> */}

            {/* Tags Section */}
            <Tags />

            {/* Provide Answer Section */}
            <div className='answer-editor-toggle-wrapper'>
                <input type='checkbox' onChange={handleAnswerYourQuestionToggle}></input>
                <div>Answer your own question – <a href='#'>share your knowledge, Q&A-style</a></div>
            </div>
            {/* Provide Answer Editor */}
            <div className={answerYourQuestion ? 'show-answer-your-question-editor' : 'hide-answer-your-question-editor'}>
                <div id="answer-your-editor-container" className="answer-your-editor-container"></div>
                <div className='commnuity-wiki'>
                    <input type='checkbox'></input>
                    <span>Community wiki</span>
                </div>
            </div>
        </div>
    )
}

export default PostQuestionEditor;