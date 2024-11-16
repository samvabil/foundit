import React, { useState } from 'react';
import UploadImage from '../components/UploadImage';
import UserPrompt from '../components/UserPrompt';

const HomePage = ({ imageUrl, setImageUrl }) => {
  return (
    <div className="home-page">
      <h1>Welcome to the Image Upload App</h1>
      <UploadImage setImageUrl={setImageUrl} />
      {imageUrl && <UserPrompt imageUrl={imageUrl} />}
    </div>
  );
};

export default HomePage;
  