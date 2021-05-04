import React from 'react'
import marked from 'marked';

const Output = ({value}) => {
  let parsedHTML = marked(value);
  console.log(parsedHTML)
  
  return (
    <div
    dangerouslySetInnerHTML={{__html: parsedHTML}}
    className="textOutput"
    />
  )
}

export default Output;
