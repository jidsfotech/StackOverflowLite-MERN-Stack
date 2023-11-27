import React, { useEffect, useRef, useState } from 'react';
import './MarkdownRender.css';
import ReactMarkdown from 'react-markdown'
import MarkdownIt from "markdown-it";
import { StacksEditor } from "@stackoverflow/stacks-editor";
import "@stackoverflow/stacks-editor/dist/styles.css";
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";


export const markdownIt = MarkdownIt("commonmark", {
    html: true,        // Enable HTML tags in source
    xhtmlOut: false,        // Use '/' to close single tags (<br />).
    // This is only for full CommonMark compatibility.
    breaks: false,        // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
    // useful for external highlighters.
    linkify: false,        // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
    typographer: false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function (/*str, lang*/) { return ''; }
});

const mdRendrer = async (content, container) => {
    const instance = markdownIt
    container.innerHTML = instance.render(content);
    // const disclaimer = document.createElement("p");
    // disclaimer.className = "fs-fine fc-light mb4";
    // disclaimer.textContent =
    //     "This demo is using the default MarkdownIt renderer, so don't expect anything fancy.";
    // container.prepend(<mdTips />);
};

export const stackEditorOptions = {
    defaultView: 1,
    // editorHelpLink: "#HELP_LINK",
    commonmarkOptions: {
        preview: {
            enabled: true,
            shownByDefault: true,
            renderer: mdRendrer
        },
    },
    parserFeatures: {
        snippets: true,
        tables: false,
        disableMetaTags:true,
        tagLinks: {
            // render: (tagName, isMetaTag) => {
            //     return {
            //         link: "#" + tagName,
            //         linkTitle: "Show questions tagged '" + tagName + "'",
            //         additionalClasses: isMetaTag ? ["s-tag__muted"] : [],
            //     };
            // },
        },
    },
    richTextOptions: {
        linkPreviewProviders: [
            // ExampleTextOnlyLinkPreviewProvider,
            // ExampleLinkPreviewProvider,
        ],
    },
    // imageUpload: imageUploadOptions,
    // editorPlugins: enableSamplePlugin ? samplePlugins : [],
};

export default mdRendrer;