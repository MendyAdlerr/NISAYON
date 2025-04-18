// src/components/TopSection.js
import React from 'react';

const TopSection = () => {
  return (
    <div className="fixed top-14 left-0 right-0 bg-white shadow-md z-10">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">שם הדף</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">פעולה 1</button>
          <button className="px-3 py-1 bg-gray-200 rounded">פעולה 2</button>
          <button className="px-3 py-1 bg-gray-200 rounded">פעולה 3</button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
