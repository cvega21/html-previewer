import React, { useState } from 'react';
import './App.css';
import Output from './Output.js';
import Highlight from 'react-highlight.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const HTMLPreviewer = () => {
  const [userInput, setUserInput] = useState('');

  const handleTyping = e => {
    setUserInput(e.target.value);
  }

  return (
    <div className="appContainer">
      <div className="textInputContainer">
        <h1>Editor</h1>
        <textarea value={userInput} onChange={handleTyping} className="textInputRaw"></textarea>
        <Highlight language={'HTML'} className="textInputHighlighted">
          {userInput}
        </Highlight>
      </div>
      <div className="textOutputContainer">
        <h1>Renderer</h1>
        <Output value={userInput}/>
      </div>
    </div>
  );
}

export default HTMLPreviewer;
