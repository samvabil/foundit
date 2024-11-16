import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPrompt from './components/UserPrompt';

function App() {
  const [imageUrl, setImageUrl] = useState(''); // Shared image URL state

  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <h1>Image Upload and Lost Item Finder</h1>

        <Routes>
          {/* Define the HomePage route */}
          <Route
            path="/"
            element={<HomePage imageUrl={imageUrl} setImageUrl={setImageUrl} />}
          />

          {/* Define the UserPrompt route */}
          <Route
            path="/user-prompt"
            element={<UserPrompt imageUrl={imageUrl} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;