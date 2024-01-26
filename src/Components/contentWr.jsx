import { useState } from 'react';

export default function ContentWriting() {
  return (
    <div className="background-color text-color pt-20 font-29 md:pr-28 sm:pt-56 w-screen flex justify-center sm:justify-end">
      <div className="text-center sm:text-right max-w-xs sm:max-w-7xl mx-4 sm:mx-0"> 
        <h1 style={{ direction: 'rtl' }} className="text-5xl sm:text-7xl md:text-8xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900">
          كتابة المحتوى التسويقي:
        </h1>
        <h2 style={{ direction: 'rtl' }} className="text-xl sm:text-2xl md:text-4xl px-4 sm:pr-28 tracking-tight py-2 sm:py-4 text-gray-900"> 
         للنص قوته، نحن من يستغلها بأفضل شكل ممكن. <br/>
          نقترح لك اسم البودكاست، نكتب وصفه، ووصف كل الحلقات كذلك.
        </h2>
      </div>
    </div>
  );
}
