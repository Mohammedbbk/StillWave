import { useState } from 'react';

export default function Consulting() {
  return (
    <div className="bg-gray-400 pt-20 font-29 md:pr-28 sm:pt-56 w-screen flex justify-center sm:justify-end">
      <div className="text-center sm:text-right max-w-xs sm:max-w-7xl mx-4 sm:mx-0">
        <h1 style={{ direction: 'rtl' }} className="text-5xl sm:text-7xl md:text-8xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900">
          دعم واستشارات غير محدودة:
        </h1>
        <h2 style={{ direction: 'rtl' }} className="text-xl sm:text-2xl md:text-4xl px-4 sm:pr-28 tracking-tight py-2 sm:py-4 text-gray-900">
          في أي وقت وبكل مكان وزمان، نحن معك بكل الخطوات.<br/>
          ستل ويف عضيدك، لو تجور الليالي.
        </h2>
        <h2 style={{ direction: 'rtl' }} className="text-xl sm:text-2xl md:text-3xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900">
          خدماتنا تقدم لكل الأفراد و الشركات الناشئة حول العالم، لا قيود <br/>
          بخصوص منطقتك الجغرافية، أعمالنا وتواصلنا يكون عبر الإنترنت.
        </h2>
      </div>
    </div>
  );
}
