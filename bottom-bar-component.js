// src/components/BottomBar.js
import React from 'react';
import { Home, FileText, Search, User } from 'lucide-react';

const BottomBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center text-blue-600">
          <Home size={24} />
          <span className="text-xs mt-1">בית</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <FileText size={24} />
          <span className="text-xs mt-1">קבצים</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <Search size={24} />
          <span className="text-xs mt-1">חיפוש</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <User size={24} />
          <span className="text-xs mt-1">פרופיל</span>
        </button>
      </div>
    </footer>
  );
};

export default BottomBar;
