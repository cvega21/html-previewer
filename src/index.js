import React from 'react';
import ReactDOM from 'react-dom';
import HTMLPreviewer from './HTMLPreviewer.js' 

ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
    <HTMLPreviewer />
  </React.StrictMode>,
  document.getElementById('root')
);
