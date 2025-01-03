import React from 'react';

// Hard-coded initial items
const lostItems = [
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

const LostItem = () => {
    return (
        <div>
            <h1>Lost Items</h1>
            <div className="item-list">
                {lostItems.map((item, index) => (
                    <div key={index} className="item">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Color:</strong> {item.color}</p>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Location:</strong> {item.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LostItem;
