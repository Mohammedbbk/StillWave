import React from 'react';
import '../../src/App.css'
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
  <div>
<div class="background-color text-color flex font-ibm justify-center items-center  ">
    <div style={{ direction: 'rtl' }}  class="pattern element-class transform transition duration-400 md:hover:scale-105 flex w-full md:w-1/2 mx-auto p-8 flex-col md:m-2 justify-center items-center text-center md:rounded-xl sm:p-8">
    <span class="flex text-center items-center mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
    ليش لازم تسوّي بودكاست؟ 
    </span>
        <ul style={{ direction: 'rtl' }} className='flex flex-col items-center justify-center list-disc list-inside'>
        <li class="flex text-center items-center text-xl sm:text-xl md:text-2xl tracking-tight py-4 text-gray-900 dark:text-gray-400">
            يمكنك من الوصول لجمهور محدود العدد، لكنه بالغ التأثير؛  فحسب الإحصاءات، 90% من المستمعين يُكمِلون الحلقة كاملة!
        </li>
        <li class="flex text-center items-center text-xl sm:text-xl md:text-2xl  py-4 text-gray-900 dark:text-gray-400">
            بوسعك إقناعه بشكل أسهل من غيره في  الإيمان بأفكارك  أو  اقتناء منتجات.
        </li>
        <li class="flex text-center items-center text-xl sm:text-xl md:text-2xl  py-4 text-gray-900 dark:text-gray-400">
         على عكس منصات التواصل الأخرى، لا يشترط امتلاك شهادة موثوق للإعلان داخل الحلقات.
        </li>
        <li class="flex text-center items-center text-xl sm:text-xl md:text-2xl  py-4 text-gray-900 dark:text-gray-400">
            ولست ملزمًا بالإفصاح عن الإعلان. 
        </li>
        <li class="flex text-center items-center text-xl sm:text-xl md:text-2xl  py-4 text-gray-900 dark:text-gray-400">
            وهذا يمكنك من جلب إيرادات لك بدون أي تكاليف إضافية.
        </li>
        </ul>
    </div>
    </div>

    <div class="background-color text-color  md:pt-32 flex justify-center items-center font-ibm ">
    <div style={{ direction: 'rtl' }} class="pattern element-class transform transition duration-400 md:hover:scale-105 flex w-full md:w-1/2 mx-auto p-8 flex-col md:m-2 justify-center items-center text-center md:rounded-xl sm:p-8">
        <h1 class="text-3xl md:text-5xl leading-10 md:leading-30 font-bold text-gray-900 ">
            باقة واحد <br/> بدون تعقيد! 
        </h1>
        <h1 class="text-xl sm:text-xl leading-10 md:leading-30 md:text-2xl  text-gray-900 dark:text-gray-400">
            باشتراك واحد، مرن، غير محدود المدة.
        </h1>
        <h1 class="text-xl sm:text-xl leading-10 md:leading-30 md:text-2xl   text-gray-900 dark:text-gray-400">
            تشمل الباقة إنتاج 8 حلقات بودكاست، <br/>
            بغض النظر عن مدة الحلقة،<br/>
            وبمدة لا محدودة للاشتراك.<br/>
        </h1>
    </div>
</div>


    
</div>

  );
}
