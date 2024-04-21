//this function allows the user to type in a chat box and calls the trq.js function to ask a question regarding the prompt
import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      // Here you can handle the message however you want, e.g., store it in a parameter
      console.log(`Message: ${message}`);
      setMessage(''); // Clear the message input after submit
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="chat-box">
      <textarea
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a prompt relating to the transcript here..."
        rows={message.split('\n').length} // Adjust rows based on newlines
        style={{ backgroundColor: 'white', width: '100%', padding: '10px' }}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default ChatBox;
