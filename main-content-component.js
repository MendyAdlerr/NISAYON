// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  // יצירת תוכן לדוגמה
  const contentItems = Array.from({ length: 15 }, (_, index) => (
    <div key={index} className="mb-4 bg-white rounded-lg shadow p-4">
      פריט תוכן {index + 1}
    </div>
  ));

  return (
    <main className="flex-1 overflow-y-auto pt-32 pb-16 px-4">
      {contentItems}
    </main>
  );
};

export default MainContent;
