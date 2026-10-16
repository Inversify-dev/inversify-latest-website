'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Router Caught Error:', error);
  }, [error]);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center p-4" style={{ background: '#09061A' }}>
      <div className="badge-status-pill mb-4">
        <span className="beacon-dot"></span>
        <span>System Error Handled</span>
      </div>
      <h2 className="text-white mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800 }}>
        Something Went Wrong
      </h2>
      <p className="text-secondary mb-4" style={{ maxWidth: '480px', fontSize: '15px' }}>
        An unexpected runtime exception occurred. Our engineers have logged this telemetry event.
      </p>
      <div className="d-flex gap-3">
        <button
          onClick={() => reset()}
          className="theme-btn-one hero-cta-pill"
        >
          <span className="btn-label">Try Again</span>
        </button>
        <Link href="/" className="theme-btn-three hero-cta-pill">
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
