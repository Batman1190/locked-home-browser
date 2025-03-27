
import React from 'react';
import { Home, RefreshCw } from 'lucide-react';

interface NavigationBarProps {
  onHome: () => void;
  onRefresh: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onHome, onRefresh }) => {
  return (
    <div className="browser-controls">
      <button 
        className="control-button animate-scale-in" 
        onClick={onHome}
        aria-label="Home"
      >
        <Home size={20} />
      </button>
      <button 
        className="control-button animate-scale-in" 
        onClick={onRefresh}
        aria-label="Refresh"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
};

export default NavigationBar;
