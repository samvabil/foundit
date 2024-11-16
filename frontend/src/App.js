import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoundItems from './pages/FoundItems';
import Matches from './pages/Matches';
import Navbar from './components/Navbar';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header"></header>
        <h1>Image Upload App</h1>

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;