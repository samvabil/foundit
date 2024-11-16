import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoundItems from './pages/FoundItems';
import Matches from './pages/Matches';
import Navbar from './components/Navbar';
import UserPrompt from './components/UserPrompt';

function App() {
  const [imageUrl, setImageUrl] = useState(''); // Shared image URL state

  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header"></header>
        <h1>Image Upload and Lost Item Finder</h1>

        <Routes>
          <Route
            path="/"
            element={<HomePage imageUrl={imageUrl} setImageUrl={setImageUrl} />}
          />
          <Route
            path="/found_items"
            element={<FoundItems imageUrl={imageUrl} setImageUrl={setImageUrl} />}
          />
          <Route
            path="/matches"
            element={<Matches imageUrl={imageUrl} setImageUrl={setImageUrl} />}
          />
          {/* Add more routes here as needed */}

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