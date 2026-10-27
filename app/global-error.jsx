'use client';

import React from 'react';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ background: '#09061A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-display, "Raisah", sans-serif)', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Application Error</h2>
          <p style={{ color: '#A3A3C8', marginBottom: '24px' }}>A critical error occurred while rendering the application.</p>
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              borderRadius: '100px',
              background: 'linear-gradient(135deg, #B541FA 0%, #76F6F5 100%)',
              color: '#09061A',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
