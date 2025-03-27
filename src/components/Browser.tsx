
import React from 'react';
import { useWebView } from '../hooks/useWebView';
import NavigationBar from './NavigationBar';

interface BrowserProps {
  homeUrl: string;
  desktopMode?: boolean;
}

const Browser: React.FC<BrowserProps> = ({ homeUrl, desktopMode = true }) => {
  const { url, iframeRef, isLoading, goHome, refresh } = useWebView({
    initialUrl: homeUrl,
    desktopMode
  });

  return (
    <div className="webview-container animate-fade-in">
      <iframe 
        ref={iframeRef}
        src={url}
        title="Locked Browser"
        className="animate-scale-in"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
      
      {isLoading && (
        <div className="loading-container">
          <div className="loading-indicator"></div>
        </div>
      )}
      
      <NavigationBar 
        onHome={goHome} 
        onRefresh={refresh} 
      />
    </div>
  );
};

export default Browser;
