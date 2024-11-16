import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import UploadImage from './components/UploadImage';
import UserPrompt from './components/UserPrompt';
import LostItem from './pages/LostItems'; // Import the LostItem component

function App() {
  const [imageUrl, setImageUrl] = useState('');
  
  return (
    <div className="App">
      <header className="App-header"></header>

      <h1>Image Upload App</h1>

      <div className="home-page">
        <h1>Welcome to the Image Upload App</h1>
        {/* Pass the setImageUrl function as a prop */}
        <UploadImage setImageUrl={setImageUrl} />
        {/* Conditionally render UserPrompt if imageUrl is available */}
        {imageUrl && <UserPrompt imageUrl={imageUrl} />}
      </div>

      <div className="lost-items-section">
        <LostItem /> {/* Render the LostItem component */}
      </div>
    </div>
>>>>>>> af880fc (Lostitems)
  );
}

export default App;
