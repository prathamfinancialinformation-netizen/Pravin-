# Pratham Finance — Remotion CIBIL वीडियो

यह Android/क्लाउड IDE में चलाने योग्य Remotion स्टार्टर प्रोजेक्ट है। इसमें गोल्ड-ब्लैक एनिमेटेड 16:9 वीडियो दृश्य और हिंदी वॉइसओवर स्क्रिप्ट है।

## ज़रूरी बात
- यह प्रोजेक्ट अभी **बिना वॉइसओवर और बिना म्यूज़िक का विज़ुअल ड्राफ्ट** रेंडर करता है।
- `VOICEOVER_HINDI.md` में रिकॉर्डिंग/टेक्स्ट-टू-स्पीच के लिए स्क्रिप्ट है।
- स्कोर 800+ की गारंटी न दें; दृश्य में दिखता स्कोर मीटर केवल सजावटी एनीमेशन है, वास्तविक स्कोर या भविष्यवाणी नहीं।
- यह स्टार्टर 30 FPS पर 1920×1080 है। मौजूदा टाइमलाइन 270 सेकंड (4.5 मिनट) की है।

## Android मोबाइल से सेटअप
1. Chrome में GitHub खोलें और साइन इन करें।
2. अपनी नई रिपॉज़िटरी बनाएँ, उदाहरण नाम: `pratham-finance-cibil-remotion` (Public या Private आपकी पसंद)।
3. इस ZIP की फ़ाइलें रिपॉज़िटरी में अपलोड करें। मोबाइल ब्राउज़र में `Add file` → `Upload files` विकल्प इस्तेमाल किया जा सकता है।
4. GitHub Codespaces में रिपॉज़िटरी खोलें। यदि Codespaces उपलब्ध न हो, तो StackBlitz जैसे browser IDE में Node.js/terminal सपोर्ट की उपलब्धता जाँचें; Remotion render के लिए पूर्ण Node environment ज़रूरी है।
5. टर्मिनल में चलाएँ:

   ```bash
   npm install
   npm run start
   ```

6. Remotion Studio में `Main` composition चुनें। पूर्वावलोकन देखें।
7. MP4 रेंडर करने के लिए चलाएँ:

   ```bash
   npm run render
   ```

8. आउटपुट फ़ाइल `public/pratham-finance-cibil.mp4` में बनेगी। Codespaces से फ़ाइल डाउनलोड करें।

## हिंदी वॉइसओवर जोड़ना
1. `VOICEOVER_HINDI.md` की स्क्रिप्ट को हिंदी टेक्स्ट-टू-स्पीच सेवा या अपने वॉइस रिकॉर्डर में इस्तेमाल करें।
2. ऑडियो को MP3 या WAV फ़ाइल के रूप में सेव करें।
3. फ़ाइल को `public/voiceover.mp3` नाम से अपलोड करें।
4. इसके बाद `src/Video.tsx` में Remotion का `Audio` component जोड़कर ऑडियो sync करें, या मैं आपके लिए अगला संशोधित कोड तैयार कर सकता हूँ।
5. संगीत इस्तेमाल करें तो लाइसेंस-प्राप्त या स्वयं बनाया हुआ संगीत ही जोड़ें।

## यदि npm install या render में error आए
- Codespace को stop करके restart करें।
- Node.js LTS संस्करण वाला environment चुनें।
- `npm install` का पूरा error text कॉपी करके साझा करें।
- वीडियो रेंडर करने के लिए क्लाउड मशीन की memory/CPU और Remotion की system dependencies उपलब्ध होनी चाहिए।

## प्रोजेक्ट फ़ाइलें
- `src/Video.tsx` — गोल्ड-ब्लैक एनीमेशन और दृश्य
- `src/Root.tsx` — वीडियो की अवधि और आकार
- `src/index.ts` — Remotion entry point
- `VOICEOVER_HINDI.md` — हिंदी नैरेशन स्क्रिप्ट
