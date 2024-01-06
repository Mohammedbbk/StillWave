import React from 'react';
import '../../src/App.css'

export default function Services() {
  return (
    <div id="Services" className="bg-gray-400 md:leading-30 font-29 pb-64 flex justify-center text-center "> 
      <div style={{ direction: 'rtl' }} class="transform transition duration-400 hover:scale-105 flex w-3/4 mx-auto flex-col p-4 m-2 justify-center text-center bg-gray-300 border border-gray-400 rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 w-full text-3xl md:text-5xl leading-8 md:leading-30  font-bold text-gray-900 dark:text-white">أفضل شريك لك في إنتاج<br/>برامجك الصوتية: </h5>
        <p class="mb-5 w-full text-base text-gray-900 sm:text-xl text-2xl dark:text-gray-400">سواء كان برنامجك جاهزًا أم غير ذلك، نساعدك في:</p>
        <div class="flex flex-row text-xl font-bold leading-8 p-5 sm:text-2xl md:text-3xl text-gray-900 flex-wrap gap-10 mt-6 justify-center">
            <p class="flex justify-center item-center">
              تحـريــر <br/> الصوت
            </p>
            <p class="text-center">
              تصميم<br/> الكوفرز
            </p>
            <p class="text-center">
              النشــــــر  <br/>والتوزيع
            </p>
            <p class="text-center">
              كتابة المحتوى <br/>التســـويــقــي
            </p>
            <p class="text-center">
              دعم واستشارات <br/>غير محـــــــدودة
            </p>
        </div>
    </div>
</div>
    
  );
}

