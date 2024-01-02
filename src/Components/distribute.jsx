import { useState } from 'react';

export default function Distribute() {
  return (
    <div className="bg-gray-400 pt-20 sm:pt-56 w-screen font-29 flex justify-center sm:justify-end">
      <div className="text-center sm:text-right max-w-xs sm:max-w-7xl mx-4 sm:mx-0"> 
        <h1 style={{ direction: 'rtl' }} className="text-5xl sm:text-7xl md:text-8xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900">
          الـنشـر والـتـوزيـع:
        </h1>
        <h2 style={{ direction: 'rtl' }} className="text-xl sm:text-2xl md:text-4xl px-4 sm:pr-28 tracking-tight py-2 sm:py-4 text-gray-900"> 
          ننشر محتواك على كل<br/> منصات البودكاست:
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900"> 
          أبـل - قـوقـل - سـبـوتـيـفـاي - أنـغـامـي - أوفـر كـاسـت - أمـازون مـيـوزيـك <br/>
          .وأكــثــر
        </h2>
      </div>
    </div>
  );
}
