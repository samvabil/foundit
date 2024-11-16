import React, { useState } from 'react';
import UploadImage from '../components/UploadImage';
import UserPrompt from '../components/UserPrompt';

const FoundItems = ({ imageUrl, setImageUrl }) => {
  return (
    <div className="found-items">
    <h1>Upload a found item</h1>
      <UploadImage setImageUrl={setImageUrl} />
      {imageUrl && <UserPrompt imageUrl={imageUrl} />}
    </div>
  );
};

export default FoundItems;