import React from 'react';
import '../../src/App.css'

export default function Services() {
  return (
    <div id="Services" className="bg-gray-400 font-29 pb-64 flex justify-end"> 
      <div className="text-right w-full max-w-7xl"> 
        <h1 style={{ direction: 'rtl' }} className="text-4xl pr-10 font-bold tracking-tight py-4 text-gray-900 sm:text-5xl md:text-6xl">
          أفضل شريك لك في إنتاج<br/>برامجك الصوتية:
        </h1>
        <h2 className="text-lg pr-10 font-bold tracking-tight py-4 text-gray-900 md:text-xl md:pr-28"> 
        سواء كان برنامجك جاهزًا أم غير ذلك، نساعدك في
        </h2>
        
        <div className="flex text-xl font-bold leading-8 p-5 sm:text-2xl md:text-3xl text-gray-900 flex-wrap gap-10 mt-6">
          <p className=" ">
            تحـريــر <br/> الصوت
          </p>
          <p className=" ">
            تصميم<br/> الكوفرز
          </p>
          <p className=" ">
            النشــــــر  <br/>والتوزيع
          </p>
          <p className=" ">
            كتابة المحتوى <br/>التســـويــقــي
          </p>
          <p className="">
            دعم واستشارات <br/>غير محـــــــدودة
          </p>
        </div>
      </div>
    </div>
  );
}
