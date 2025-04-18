// src/components/layout/AppLayout.js
import React from 'react';
import TopBar from '../TopBar';
import TopSection from '../TopSection';
import MainContent from '../MainContent';
import BottomBar from '../BottomBar';

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar />
      <TopSection />
      {children || <MainContent />}
      <BottomBar />
    </div>
  );
};

export default AppLayout;
