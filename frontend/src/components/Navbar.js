import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <nav>
        <div className="navbar-actions">
          <button onClick={() => navigate('/')}>Lost Dashboard</button>
          <button onClick={() => navigate('/found_items')}>Found Items</button>
          <button onClick={() => navigate('/matches')}>Your matches</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;