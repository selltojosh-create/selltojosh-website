import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sell to Josh - Central Texas Cash Home Buyer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2d3367 0%, #1a1f4e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#fbaf40',
          }}
        />

        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          Sell to Josh
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#d1d5db',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Cash Home Buyer | Central Texas
        </div>

        {/* Divider */}
        <div
          style={{
            width: '80px',
            height: '4px',
            background: '#fbaf40',
            marginBottom: '32px',
          }}
        />

        {/* Value props */}
        <div
          style={{
            fontSize: 24,
            color: '#9ca3af',
            textAlign: 'center',
            display: 'flex',
            gap: '24px',
          }}
        >
          <span>No Repairs</span>
          <span style={{ color: '#fbaf40' }}>•</span>
          <span>No Fees</span>
          <span style={{ color: '#fbaf40' }}>•</span>
          <span>Close in 7 Days</span>
        </div>

        {/* Phone */}
        <div
          style={{
            fontSize: 28,
            color: '#fbaf40',
            marginTop: '24px',
            fontWeight: 600,
          }}
        >
          (254) 498-6025
        </div>
      </div>
    ),
    { ...size }
  );
}
