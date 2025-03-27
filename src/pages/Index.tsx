
import React from 'react';
import Browser from '../components/Browser';

const Index: React.FC = () => {
  return (
    <Browser 
      homeUrl="https://mytube.space" 
      desktopMode={true} 
    />
  );
};

export default Index;
