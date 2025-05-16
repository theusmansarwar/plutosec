'use client';
import { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.setAttribute('data-use-service-core', 'true');
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-08d64daf-9ad7-49f4-992a-3c87a0f73bfd"
      data-elfsight-app-lazy
    />
  );
};

export default ElfsightWidget;
