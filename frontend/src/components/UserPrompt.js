import React, { useState } from 'react';

// Hardcoded list of lost items
const hardcodedItems = [
  { name: 'Wallet', color: 'Black', description: 'Leather wallet with cards inside', location: 'LBJ Student Center' },
  { name: 'Laptop', color: 'Silver', description: 'MacBook Pro with a case', location: 'RFM' },
  { name: 'Water Bottle', color: 'Blue', description: 'Hydro Flask, 32 oz', location: 'Alkek Library' },
  { name: 'Notebook', color: 'Red', description: 'Spiral-bound notebook', location: 'JCK' },
  { name: 'Sweater', color: 'Gray', description: 'Warm sweater, size M', location: 'LBJ Student Center' },
  { name: 'Headphones', color: 'White', description: 'Wireless earbuds in a case', location: 'Other' },
  { name: 'Calculator', color: 'Black', description: 'TI-84 calculator', location: 'RFM' },
  { name: 'Umbrella', color: 'Yellow', description: 'Compact umbrella', location: 'Alkek Library' },
  { name: 'Scarf', color: 'Green', description: 'Woolen scarf', location: 'JCK' },
  { name: 'Gloves', color: 'Brown', description: 'Leather gloves', location: 'LBJ Student Center' },
];

function UserPrompt({ imageUrl }) {
  const [response, setResponse] = useState(''); // Store OpenAI's response
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(''); // Track error state

  const handleSubmit = async () => {
    if (!imageUrl) {
      alert('Please upload an image before submitting.');
      return;
    }

    setIsLoading(true);
    setError(''); // Reset any previous errors

    try {
      const systemMessage = `You are a helpful assistant.`

      const userMessage = `here is a list: \n\n${hardcodedItems
        .map(
          (item) =>
            `- Name: ${item.name}, Color: ${item.color}, Description: ${item.description}, Location: ${item.location}`
        )
        .join('\n')}`;

      // Send the request to OpenAI
      const res = await fetch('http://localhost:5001/generate-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemMessage,
          userMessage,
          imageUrl,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate response from the server.');
      }

      const data = await res.json();
      setResponse(data.response); // Update the response state with OpenAI's answer
    } catch (error) {
      console.error('Error generating response:', error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user-prompt">
      <h2>Check if your uploaded image matches a lost item</h2>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Checking...' : 'Submit'}
      </button>

      {error && <p className="error">{error}</p>} {/* Display error message */}
      {response && (
        <div className="response">
          <h3>AI Response:</h3>
          <p>{response}</p> {/* Display OpenAI's response */}
        </div>
      )}
    </div>
  );
}

export default UserPrompt;