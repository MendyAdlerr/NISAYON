// src/components/TopBar.js
import React from 'react';
import { Search, Settings } from 'lucide-react';
import useScrollPosition from '../hooks/useScrollPosition';

const TopBar = () => {
  const { scrollY, scrollDirection } = useScrollPosition();
  
  // הסרגל ייעלם בגלילה למטה אחרי 50 פיקסלים וכאשר הכיוון הוא למטה
  const isHidden = scrollDirection === 'down' && scrollY > 50;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-blue-600 text-white z-20 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center justify-between px-4 h-14">
        <div className="font-bold text-lg">האפליקציה שלי</div>
        <div className="flex space-x-4">
          <button className="p-2">
            <Search size={20} />
          </button>
          <button className="p-2">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
