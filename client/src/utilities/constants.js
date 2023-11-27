import React from 'react';

export const leftSideMunuTabsPageLink = [
    {
        id: 'homeTabIdx',
        path: '/'
    },
    {
        id: 'questionsTabIdx',
        path: '/questions'
    },
    {
        id: 'tagsTabIdx',
        path: '/tags'
    },
    {
        id: 'usersTabIdx',
        path: '/authenticate'
    },
    {
        id: 'companiesTagIdx',
        path: '/companies'
    },
    {
        id: 'explorTabIdx',
        path: '/explore'
    }
]

export const leftMenuSelectedTabStyle = {
    borderRight: `${3.5}px solid #f48024`,
    background: '#d0d4d8'
}

export const leftMenuSelectedTabLinktyle = {
    color: 'black',
    fontWeight: 'bold'
}

export const formatingTipsContent = {
    howToAddLink: [
        ` <h4> Use angle brackets to force linking </h4>
            <p> \< https://stackoverflow.com \> </p>

            <h4> Create inline text links with Markdown </h4>
            <p> [Text](https://stackoverflow.com) </p>

            <h4> Add alt attributes to links by adding a double space and text after the URL </h4>
            <p> [Text](https://stackoverflow.com <span class="gap-box width-1rem"></span>"this text appears on mouseover")'</p> `
    ],

    howToAddImage: [
        `<h4> Add inline images </h4>
            <p> ![Text](https://stackoverflow.com/image.jpg) </p>`
    ],

    howToAddHeader: [
        `<h4> Use some text styling to make your post more readable </h4>
            <p> 
            Line breaks: double space or 
            <span style="background:var(--black-075); display:inline-block; height:1.1rem; width:4rem; border:1px solid black; border-radius:4px; text-align:center">
             \< br \/\> 
             </span> 
            at the end of each line </br>
            <em> Italics </em>: *asterisks* or _underscores_ </br>
            <strong> Bold </strong>: **double asterisks** or __double underscores__
            </p>
            
            <h4> Create sections with headers </h4>
            <p>  <strong> A Large Header </strong> </br> ============== </p>
            <p> <strong> Smaller Subheader </strong> </br> ----------------------- </p> 
            <h4> Use hash marks for multiple levels of headers </h4>
            <ul>
             <li> # Header 1 # </li>
             <li> ## Header 2 ## </li>
             <li> ### Header 3 ### </li>
            </ul>`
    ],

    howToAddLists: [`
    <h4> Create bulleted and numbered lists </h4>
    <p>
    - Create bullets with minus sign </br>
    + or plus sign </br>
    * or an asterisk </br>
    1. or sequential numbers
    </p>
    
    <h4> Use 4 or 8 spaces to create nested lists </h4>
    <ul>
     <li> 1. List item </li>
     <li><span class="gap-box width-2rem"></span> - Item A, four spaces </li>
     <li><span class="gap-box width-3rem"></span> * Item B, eight spaces </li>
    </ul>
    `],

    howToAddBlockQuotes: [`
        <h4> Add > to the beginning of each line to create a blockquote </h4>
        <p>
        > A standard blockquote is indented </br>
        > > A nested blockquote is indented more </br>
        > > > > You can nest to any depth.
        </p>`
    ],

    howToAddCodes: [`
    <h4> Create code fences by placing your code between sets of 3 backticks \` or use CTRL + K </h4>
    
    <div class='codeblock'>
    <div style="letter-spacing:2px">\`\`\`</div>
    Like so
    <div style="letter-spacing:2px">\`\`\`</div>
    </div>
    
    <h4> Create inline code spans by placing text between single backticks </h4>

    <div class='codeblock'> \` like so \` </div>

    <h4> Add a preformatted block within a list with eight spaces </h4>
    
    <ul>
    <li> 1. This is normal text </li>
    <li> 2. This is a list item </li>
    </ul>
    
    <ul>
    <li> <span class="gap-box width-3rem"></span> Skip a line and indent eight spaces. </li>
    <li> <span class="gap-box width-3rem"></span> Eight spaces will trigger the code block. </li>
    </ul>

    `],

    howToAddHtml: [`
    <h4> Use HTML in combination with Markdown 
    <a href="#">(What's supported? Note: We advise against mixing HTML and Markdown.)</a>
    </h4>
    
    <p> &ltstrike&gt Markdown works * fine* in here. &lt/strike&gt </p>
    
    <h4> Block-level HTML elements have restrictions </h4>
    <ul>
    <li> 1. Use blank lines to separate them from surrounding text </li>
    <li> 2. The opening and closing tags of the outermost block elements must not be indented </li>
    </ul>
    
    <pre>
    &ltpre&gt
      You &ltem&gt cannot &lt/em&gt use 
      Markdown here
    &lt/pre&gt
    </pre>
`],

    howToAddTables: [`
        <h4> Create tables using the GitHub-flavored markdown format </h4> 
        <table>
           <tr> <th> A header </th> <th> Another header </th> </tr>
           <tr> <td> ----------- </td> <td> -------------- </td> </tr>
           <tr> <td> First </td> <td> A header </td> </tr>
           <tr> <td> First </td> <td> A header </td> </tr>
        </table>

        <p> A header row is required and must be followed by a separator row with the same number of cells.
        Cells are separated by a pipe (|) symbol.
        </p>

        <h4> Set the alignment of a table column by placing a 
        <span class="height:0.5rem; width:0.5; display:inline-width; background:var(--black-075)">:</span> 
        on the left, right, or both sides of a separator in the separator line </h4>

        <table>
            <tr> <th> left </th> <th> center </th> <th> right </th> </tr>
            <tr> <td> :---- </td> <td> :------ </td> <td> :----- </td> </tr>
            <tr> <td> One </td> <td> Two </td> <td> Three </td> </tr>
        </table>

    `],
}