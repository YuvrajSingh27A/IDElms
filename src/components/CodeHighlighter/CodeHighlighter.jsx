import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const { github } = require('react-syntax-highlighter/dist/cjs/styles/prism');


const CodeHighlighter = ({language, code}) => {
  return (
    
    <div className="overflow-x-auto">
    <SyntaxHighlighter  language={language} style={github} >
        {code}
    </SyntaxHighlighter>
    </div>
    
  )
}

export default CodeHighlighter;