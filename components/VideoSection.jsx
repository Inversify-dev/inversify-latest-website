'use client';

import React from 'react';

export default function VideoSection() {
  return (
    <section className="video-section denge-fade">
      <div className="container">
        <div className="outer-box">
          <div className="video-text denge-words">©2026</div>
          <div className="video-box">
            <div className="video-img img-reveal">
              <img src="/images/video1-1.webp" alt="Inversify Showreel 2026" />
            </div>
            <a className="play-now2" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
              <i className="icon fa-sharp fa-solid fa-play"></i>
              <span className="ripple"></span>
            </a>
          </div>
          <div className="video-text denge-words">Showreel</div>
        </div>
      </div>
    </section>
  );
}
