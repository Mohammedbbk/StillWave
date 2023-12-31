import { useState } from 'react';

export default function Audio() {
  return (
    <div className="bg-gray-400 font-29 pt-28  flex justify-end"> 
    <div className="text-right w-full max-w-7xl"> 
      <h1 className="text-8xl pr-28 font-bold tracking-tight py-4 text-gray-900 sm:text-9xl">
         تحـريــر <br/>
         الصوت 
      </h1>
      <h2 className="sm:text-2xl text-xl pr-64 font-bold tracking-tight py-4 text-gray-900 sm:text-xl"> 
        لعبتنا  
      </h2>

      <h2 className="sm:text-2xl text-xl pr-96 mr-96 bottom-72 relative  tracking-tight py-4 text-gray-900 sm:text-xl"> 
      نمتلك القدرة والخبرة في تحرير الصوت <br/>
     بغض النظر عن ظروف التسجيل

      </h2>
      <h2 className="sm:text-2xl text-xl pr-96 mr-96 font-bold bottom-64 relative font-bold tracking-tight py-4 text-gray-900 sm:text-xl"> 
      المطلوب للوصول لجودة الاستوديوهات <br/>
      آيفون، وبيئة هادئة
      </h2>
      </div>
    </div>
  );
}