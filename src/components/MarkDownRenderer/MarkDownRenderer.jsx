import React from 'react'
import {marked}  from 'marked';


const MarkDownRenderer = ({markDown_text}) => {
  const html = marked(markDown_text);

  return (
    <div dangerouslySetInnerHTML={{ __html : html}}/>
  );
};

export default MarkDownRenderer;