
import { useState, useRef, useEffect } from 'react';

interface UseWebViewProps {
  initialUrl: string;
  desktopMode?: boolean;
}

interface UseWebViewReturn {
  url: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  isLoading: boolean;
  goHome: () => void;
  refresh: () => void;
}

export function useWebView({ initialUrl, desktopMode = true }: UseWebViewProps): UseWebViewReturn {
  const [url, setUrl] = useState<string>(initialUrl);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const goHome = () => {
    setIsLoading(true);
    setUrl(initialUrl);
  };

  const refresh = () => {
    setIsLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  useEffect(() => {
    // Set desktop mode
    const userAgent = desktopMode 
      ? "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
      : navigator.userAgent;
    
    // Unfortunately we can't set user-agent for iframes directly in modern browsers
    // This would be handled differently in a native app context with WebView
    
    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
      return () => {
        iframe.removeEventListener('load', handleIframeLoad);
      };
    }
  }, [desktopMode, url]);

  return {
    url,
    iframeRef,
    isLoading,
    goHome,
    refresh
  };
}
