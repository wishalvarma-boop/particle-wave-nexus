import React, { useEffect, useState } from 'react';

// Google Ads SVG Icon
const GoogleAdsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 192.744 192.744" className={className} fill="currentColor">
    <path d="M64.227,164.391c-16.86,9.737-38.453,3.959-48.19-12.9c-9.737-16.859-3.959-38.453,12.9-48.19l95.239-54.989 c16.859-9.737,38.453-3.959,48.19,12.9c9.737,16.859,3.959,38.453-12.9,48.19L64.227,164.391z" fill="#FBBC04"/>
    <path d="M160.467,109.401L65.228,164.39c-16.86,9.737-38.453,3.959-48.19-12.9c-9.737-16.859-3.959-38.453,12.9-48.19 l95.239-54.989" fill="#4285F4"/>
    <ellipse cx="32.372" cy="144.372" rx="32.372" ry="32.372" fill="#34A853"/>
  </svg>
);

// Meta (Facebook) Icon
const MetaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className}>
    <defs>
      <linearGradient id="metaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0668E1" />
        <stop offset="50%" stopColor="#1877F2" />
        <stop offset="100%" stopColor="#0080FB" />
      </linearGradient>
    </defs>
    <path fill="url(#metaGradient)" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"/>
  </svg>
);

interface FloatingIcon {
  id: number;
  x: number;
  baseY: number;
  size: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
  type: 'google' | 'meta';
  opacity: number;
  delay: number;
}

const FloatingAdIcons: React.FC = () => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate floating icons
    const newIcons: FloatingIcon[] = [];
    const iconCount = 12;
    
    for (let i = 0; i < iconCount; i++) {
      newIcons.push({
        id: i,
        x: Math.random() * 100, // percentage
        baseY: 100 + Math.random() * 50, // Start below viewport
        size: 30 + Math.random() * 40,
        speed: 0.15 + Math.random() * 0.2, // How fast they rise with scroll
        wobble: 10 + Math.random() * 20, // Side-to-side wobble amount
        wobbleSpeed: 0.5 + Math.random() * 1, // Wobble frequency
        type: i % 2 === 0 ? 'google' : 'meta',
        opacity: 0.3 + Math.random() * 0.5,
        delay: Math.random() * 2,
      });
    }
    setIcons(newIcons);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((icon) => {
        // Calculate Y position based on scroll - icons float up as user scrolls down
        const floatY = icon.baseY - (scrollY * icon.speed);
        
        // Wobble effect using sine wave based on scroll position
        const wobbleOffset = Math.sin((scrollY * 0.01 * icon.wobbleSpeed) + icon.delay) * icon.wobble;
        
        // Fade in as they enter viewport
        const fadeOpacity = Math.min(icon.opacity, Math.max(0, (icon.baseY - floatY) / 100));
        
        // Only render if somewhat visible
        if (floatY < -20 || floatY > 150) return null;

        return (
          <div
            key={icon.id}
            className="absolute transition-none"
            style={{
              left: `${icon.x}%`,
              top: `${floatY}%`,
              transform: `translateX(${wobbleOffset}px) rotate(${wobbleOffset * 0.5}deg)`,
              opacity: fadeOpacity,
              width: icon.size,
              height: icon.size,
            }}
          >
            {icon.type === 'google' ? (
              <GoogleAdsIcon className="w-full h-full drop-shadow-lg" />
            ) : (
              <MetaIcon className="w-full h-full drop-shadow-lg" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingAdIcons;
