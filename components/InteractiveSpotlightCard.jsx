'use client';

import React, { useRef, useState } from 'react';

export default function InteractiveSpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 240, 255, 0.12)',
  borderColor = 'rgba(168, 85, 247, 0.25)',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card-wrapper position-relative overflow-hidden ${className}`}
      {...props}
    >
      {/* 21st.dev Dynamic Radial Spotlight Glow */}
      <div
        className="spotlight-glow-layer pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Dynamic Border Highlight */}
      <div
        className="spotlight-border-layer pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 60%)`,
          position: 'absolute',
          inset: '-1px',
          zIndex: 0,
          borderRadius: 'inherit',
          transition: 'opacity 0.25s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Inner Content */}
      <div className="spotlight-inner-content position-relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
}
