import React from 'react';
import '../../src/App.css'
import AOS from "aos";
import { useEffect} from "react"; 
import "aos/dist/aos.css";

export default function Services() {
    useEffect(() => {
    AOS.init({duration:1200})
  })
  return (
    <div id="Services" className="md:leading-3 background-color md:pb-64 flex justify-center text-center">
    <div
      style={{ direction: 'rtl' }}
      className=" flex w-full md:w-3/4 mx-auto flex-col p-4 md:m-2 justify-center text-center md:border md:rounded-xl sm:p-8 pattern element-class"
    >
        <h5 className="md:mb-2 w-full text-3xl md:text-5xl leading-8 md:leading-30 font-bold text-gray-900 dark:text-white">
          أفضل شريك لك في إنتاج<br />برامجك الصوتية:
        </h5>
        <p className="mb-5 w-full text-base text-gray-900 md:text-2xl dark:text-gray-400">
          سواء كان برنامجك جاهزًا أم غير ذلك، نساعدك في:
        </p>
        <div className="flex flex-row text-xl font-bold md:leading-8 p-5 sm:text-2xl md:text-3xl text-gray-900 flex-wrap gap-10 mt-6 justify-center">
          <p className="flex justify-center item-center">
            تحـريــر <br /> الصوت
          </p>
          <p className="text-center">
            تصميم<br /> الكوفرز
          </p>
          <p className="text-center">
            النشــــــر <br />والتوزيع
          </p>
          <p className="text-center">
            كتابة المحتوى <br />التســـويــقــي
          </p>
          <p className="text-center">
            دعم واستشارات <br />غير محـــــــدودة
          </p>
        </div>
      </div>
    </div>
  );
};
