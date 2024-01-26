import { useState } from 'react';

export default function Audio() {
  return (
    <div  className="background-color text-color font-29 pt-28 pb-10 flex justify-end">
    <div className="w-full max-w-7xl">
      <div className="flex flex-col md:flex-row-reverse md:items-start">
        <div className="md:w-1/2 text-center md:pr-32 md:text-right md:-mt-16 pr-0">  
          <h1 className="text-5xl font-bold tracking-tight py-4 text-gray-900 sm:text-8xl md:text-9xl">
            تحـريــر <br/> الصوت 
          </h1>
          <h2  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight py-4 pr-4 md:pr-28 text-gray-900">
            !لعبتنا  
          </h2>
        </div>
          <div className="md:w-1/2 text-center md:text-right md:pr-28">
            <h2 style={{ direction: 'rtl' }} className="text-lg tracking-tight py-4 text-gray-900 sm:text-xl md:text-2xl">
              نمتلك القدرة والخبرة في تحرير الصوت <br/>
              بغض النظر عن ظروف التسجيل.
            </h2>
            <h2 style={{ direction: 'rtl' }} className="text-lg font-bold tracking-tight py-4 text-gray-900 sm:text-xl md:text-3xl">
              المطلوب للوصول لجودة الاستوديوهات: <br/>
              آيفون، وبيئة هادئة.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}