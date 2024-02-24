import { useState } from 'react';

export default function Audio() {
  return (
    <div  style={{ direction: 'rtl' }} className="background-color text-color  md:pt-32 flex justify-center items-center font-ibm ">
    <div className="pattern element-class transform transition duration-400 md:hover:scale-105 flex w-full md:w-1/2 mx-auto p-8 flex-col md:m-2 justify-center items-center text-center md:rounded-xl ">
          <h1  className="text-4xl md:text-5xl leading-10 md:leading-30 font-bold text-gray-900">
            تحـريــر الصوت 
          </h1>
          <h2   className="text-xl md:text-4xl flex  justify-center   text-gray-900">
          لعبتنا!  
          </h2>
          <div className="text-xl leading-10 md:leading-30 md:text-2xl  text-gray-900 dark:text-gray-400">
            <h2  className="">
              نمتلك القدرة والخبرة في تحرير الصوت <br/>
              بغض النظر عن ظروف التسجيل.
            </h2>
            <h2 className="  ">
              المطلوب للوصول لجودة الاستوديوهات <br/>
              آيفون، وبيئة هادئة.
            </h2>
          </div>
        </div>
      </div>
  );
}