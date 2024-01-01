import React from 'react';
import '../../src/App.css'

export default function Services() {
  return (
    <div>
      <div className="bg-gray-400 font-29 flex justify-end"> 
        <div className="text-right w-full max-w-7xl"> 
          <h1 className="text-4xl pr-10 font-bold tracking-tight py-4 text-gray-900 sm:text-5xl md:text-6xl">
            ليش لازم تسوّي بودكاست؟ 
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28"> 
            يمكنك من الوصول لجمهور محدود العدد، لكنه بالغ التأثير <span className='md:text-lg'>*حسب الإحصاءات، 90% من المستمعين يُكمِلون الحلقة كاملة</span>
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28"> 
            بوسعك إقناعه بشكل أسهل من غيره في
            <strong> الإيمان بأفكارك </strong>
            أو 
            <strong> اقتناء منتجاتك</strong>
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28"> 
            على عكس منصات التواصل الأخرى، لا يشترط امتلاك شهادة موثوق للإعلان داخل الحلقات
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28"> 
            ولست ملزمًا بالإفصاح عن الإعلان.
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28"> 
            وهذا يمكنك من جلب إيرادات لك بدون أي تكاليف إضافية.
          </h1>
        </div>
      </div>

      <div className="bg-gray-400 font-29 pt-36 flex justify-end"> 
        <div className="text-right w-full max-w-7xl"> 
          <h1 className="text-4xl pr-10 font-bold tracking-tight py-4 text-gray-900 sm:text-5xl md:text-6xl">
            باقة واحدة <br/> بدون تعقيد 
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28">
            باشتراك واحد، مرن، غير محدود المدة
          </h1>
          <h1 className="text-xl pr-10 tracking-tight py-4 text-gray-900 md:text-2xl md:pr-28">
            تشمل الباقة إنتاج 8 حلقات بودكاست، <br/>
            بغض النظر عن مدة الحلقة <br/>
            وبمدة لامحدودة للاشتراك <br/>
          </h1>
        </div>
      </div> 
    </div>
  );
}
