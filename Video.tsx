import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const GOLD = '#E6BE63';
const WHITE = '#F7F4ED';
const MUTED = '#B7B4AE';
const BLACK = '#090909';

const scenes = [
  {start: 0, end: 600, kicker: 'PRATHAM FINANCE PRESENTS', title: 'CIBIL SCORE 800+', sub: 'कैसे करें? 5 असरदार आदतें', tag: 'SMART CREDIT • STRONGER FUTURE'},
  {start: 600, end: 1500, kicker: '01  •  समझिए स्कोर', title: 'CIBIL स्कोर क्या बताता है?', sub: 'आपके क्रेडिट इतिहास का एक महत्वपूर्ण संकेत', tag: 'जानकारी रखें • रिपोर्ट जाँचें'},
  {start: 1500, end: 2400, kicker: '02  •  PAYMENT HISTORY', title: 'EMI और बिल समय पर भरें', sub: 'देरी से भुगतान आपके क्रेडिट प्रोफाइल को नुकसान पहुँचा सकता है', tag: 'AUTOPAY / REMINDERS सेट करें'},
  {start: 2400, end: 3300, kicker: '03  •  CREDIT UTILISATION', title: 'लिमिट का कम इस्तेमाल करें', sub: 'कार्ड की पूरी लिमिट हर महीने इस्तेमाल करने से बचें', tag: 'कम बैलेंस • समय पर भुगतान'},
  {start: 3300, end: 4200, kicker: '04  •  CREDIT ENQUIRIES', title: 'बार-बार आवेदन न करें', sub: 'कम समय में कई लोन आवेदन करने से बचना बेहतर है', tag: 'ज़रूरत के अनुसार ही आवेदन'},
  {start: 4200, end: 5100, kicker: '05  •  CREDIT REPORT', title: 'रिपोर्ट में गलती जाँचें', sub: 'गलत बकाया या अनजान खाते दिखें तो संबंधित संस्था से शिकायत करें', tag: 'रिपोर्ट • विवाद • फॉलो-अप'},
  {start: 5100, end: 6300, kicker: 'YOUR ACTION PLAN', title: 'आज से ये 4 काम शुरू करें', sub: 'भुगतान समय पर • बैलेंस नियंत्रित • आवेदन सीमित • रिपोर्ट की जाँच', tag: 'आदतें सुधारें • नियमित रहें'},
  {start: 6300, end: 8100, kicker: 'PRATHAM FINANCE', title: 'क्रेडिट को समझें। बेहतर फैसले लें।', sub: 'ऐसी ही आसान फाइनेंस जानकारी के लिए चैनल को Subscribe करें', tag: 'EDUCATIONAL CONTENT • NO SCORE GUARANTEE'}
];

export const CibilVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const scene = scenes.find((s) => frame >= s.start && frame < s.end) ?? scenes[scenes.length - 1];
  const local = frame - scene.start;
  const fadeIn = interpolate(local, [0, 18], [0, 1], {extrapolateRight: 'clamp'});
  const rise = interpolate(local, [0, 24], [45, 0], {extrapolateRight: 'clamp'});
  const score = Math.min(800, Math.round(interpolate(frame, [0, 7000], [580, 800], {extrapolateRight: 'clamp'})));

  return (
    <AbsoluteFill style={{background: `radial-gradient(circle at 75% 45%, #272014 0%, ${BLACK} 48%, #050505 100%)`, color: WHITE, fontFamily: 'Arial, Noto Sans Devanagari, sans-serif', padding: 100}}>
      <AbsoluteFill style={{border: `2px solid ${GOLD}`, margin: 28, borderRadius: 24, opacity: 0.65}} />
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2}}>
        <div style={{fontSize: 28, fontWeight: 800, letterSpacing: 4, color: GOLD}}>PRATHAM FINANCE</div>
        <div style={{fontSize: 20, color: MUTED, letterSpacing: 3}}>CREDIT SMART SERIES</div>
      </div>

      <div style={{display: 'flex', flex: 1, alignItems: 'center', gap: 70, zIndex: 2}}>
        <div style={{flex: 1, opacity: fadeIn, transform: `translateY(${rise}px)`}}>
          <div style={{fontSize: 24, color: GOLD, letterSpacing: 5, marginBottom: 28, fontWeight: 700}}>{scene.kicker}</div>
          <div style={{fontSize: scene.title.length > 28 ? 55 : 76, lineHeight: 1.2, fontWeight: 900, maxWidth: 1000}}>{scene.title}</div>
          <div style={{fontSize: 32, lineHeight: 1.5, color: MUTED, marginTop: 28, maxWidth: 950}}>{scene.sub}</div>
          <div style={{marginTop: 40, background: GOLD, color: BLACK, display: 'inline-block', padding: '14px 24px', fontSize: 21, fontWeight: 800, letterSpacing: 1}}>{scene.tag}</div>
        </div>
        <div style={{width: 440, height: 440, borderRadius: 300, border: `8px solid ${GOLD}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 70px #D5A73B33', background: '#0D0C0A'}}>
          <div style={{fontSize: 23, color: MUTED, letterSpacing: 4}}>CREDIT SCORE</div>
          <div style={{fontSize: 112, color: GOLD, fontWeight: 900, marginTop: 8}}>{frame < 600 ? '800+' : score}</div>
          <div style={{width: 270, height: 8, background: '#37332A', marginTop: 22, borderRadius: 10, overflow: 'hidden'}}>
            <div style={{height: '100%', width: `${Math.min(100, (score / 900) * 100)}%`, background: GOLD}} />
          </div>
          <div style={{fontSize: 18, color: MUTED, marginTop: 18}}>लक्ष्य • आदतें • समय</div>
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-between', zIndex: 2, borderTop: '1px solid #5D4A26', paddingTop: 22}}>
        <div style={{fontSize: 19, color: MUTED}}>शिक्षात्मक जानकारी • स्कोर की गारंटी नहीं</div>
        <div style={{fontSize: 19, color: GOLD}}>Pratham Finance  |  {Math.floor(frame / fps / 60)}:{String(Math.floor((frame / fps) % 60)).padStart(2, '0')}</div>
      </div>
    </AbsoluteFill>
  );
};
