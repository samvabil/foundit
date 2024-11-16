import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import UploadImage from './components/UploadImage';
import UserPrompt from './components/UserPrompt';
import LostItem from './pages/LostItems'; // Import the LostItem component

function App() {
  const [imageUrl, setImageUrl] = useState('');
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <h1>Image Upload App</h1>

        <Routes>
          {/* Define the HomePage route */}
          <Route
            path="/"
            element={<HomePage imageUrl={imageUrl} setImageUrl={setImageUrl} />}
          />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
