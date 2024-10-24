import React from 'react';

export default function SearchBox({ city, setCity, handleSearch }) {
  return (
    <div className="search-box flex justify-center mb-4">
      <input
        type="text"
        className="border rounded-l-md p-2 w-2/3"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-green-500 text-white p-2 rounded-r-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
