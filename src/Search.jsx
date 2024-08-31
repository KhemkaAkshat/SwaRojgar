import React, { useState } from 'react';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul>
          <li><input type="checkbox" /> Web Development</li>
          <li><input type="checkbox" /> Graphic Design</li>
          <li><input type="checkbox" /> Marketing</li>
          <li><input type="checkbox" /> Writing</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </div>
  );
};

// SearchResults Component
const SearchResults = ({ results }) => {
  return (
    <div className="w-3/4 p-4">
      <h2 className="text-xl font-bold mb-4">Job Listings</h2>
      {results.map((item, index) => (
        <div key={index} className="border-b mb-4 pb-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>{item.description}</p>
          <p className="text-sm text-gray-600">Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

// Main SearchPage Component
const SearchPage = () => {
  const [results, setResults] = useState([
    { title: 'Web Developer', description: 'Build modern websites.', price: 500 },
    { title: 'Graphic Designer', description: 'Create stunning graphics.', price: 300 },
    // Add more mock results as needed
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;
