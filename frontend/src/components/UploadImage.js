import React, { useState } from 'react';
import axios from 'axios';

const SubmitLostItem = ({ setImageUrl }) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const locations = ['Alkek Library', 'Derrick Hall', 'LBJ Student Center'];

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!image || !description || !location) {
      alert('Please fill out all fields and upload an image!');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('location', location);

    try {
      setUploadStatus('Submitting...');
      const response = await axios.post('http://localhost:5001/submit-lost-item', formData);
      setUploadStatus('Item submitted successfully!');
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      setUploadStatus('Submission failed! Please try again.');
    }
  };

  return (
    <div className="submit-lost-item-container">
      <h2>Submit Lost Item</h2>
      <div>
        <label>Item Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the item in as much detail as possible"
        />
      </div>
      <div>
        <label>Location:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {previewUrl && (
          <img src={previewUrl} alt="Preview" style={{ width: '200px', height: 'auto' }} />
        )}
      </div>
      <button onClick={handleSubmit}>Submit Lost Item</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default SubmitLostItem;