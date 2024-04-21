//this function allows the user to type in a chat box and calls the trq.js function to ask a question regarding the prompt
import React, { useState } from 'react';
import askQuestion from "../trq.js"; // Replace with the actual path
//import getTranslated from '../bot/src/index.js';

import { translated_transcript } from "../bot/src/index.js";

const answers = []

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message.trim()) {
      // Send message to trq.js
      await askQuestion(translated_transcript, message, setResponse); // Pass setResponse for state update
      
  
      // Handle response (optional)
      if (response) {
        console.log(`trq.js Response: ${response}`); // Log the response for now
      } else {
        console.error('Error sending message to trq.js'); // Handle potential errors
      }
      setMessage(''); // Clear the message input after submit
    }
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <div className="response-box">
        {response && <p>{response}</p>}
    </div>
        <div className="chat-box" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <textarea
                value={message}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter a prompt relating to the transcript here..."
                className="chat-text-area" // Add a class name
                rows={message.split('\n').length} // Adjust rows based on newlines
                style={{ backgroundColor: 'white', width: '100%', padding: '10px' }}
            />
            <button onClick={handleSubmit}>Send</button>
        </div>
    </div>
  );
};

export default ChatBox;
