import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const CibilVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scenes = [
    ['CIBIL SCORE 800+', 'कैसे करें? 5 असरदार आदतें'],
    ['EMI समय पर भरें', 'भुगतान में देरी से बचें'],
    ['क्रेडिट लिमिट', 'कार्ड का इस्तेमाल नियंत्रित रखें'],
    ['अनावश्यक आवेदन से बचें', 'लोन के लिए सोच-समझकर आवेदन करें'],
    ['क्रेडिट रिपोर्ट जाँचें', 'गलत जानकारी मिलने पर शिकायत करें'],
    ['PRATHAM FINANCE', 'क्रेडिट को समझें। बेहतर फैसले लें।'],
  ];

  const index = Math.min(
    scenes.length - 1,
    Math.floor(frame / (fps * 10)),
  );

  const opacity = interpolate(
    frame % (fps * 10),
    [0, 15],
    [0, 1],
    { extrapolateRight: 'clamp' },
  );

  const [title, subtitle] = scenes[index];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#090909',
        color: '#E6BE63',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 80,
        fontFamily: 'Arial, sans-serif',
        opacity,
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 45 }}>
        PRATHAM FINANCE
      </div>
      <div style={{ fontSize: 76, fontWeight: 900 }}>
        {title}
      </div>
      <div
        style={{
          fontSize: 36,
          color: '#FFFFFF',
          marginTop: 35,
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
