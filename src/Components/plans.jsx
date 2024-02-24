import React from 'react';

export default function Plans() {
  return (
    <div id='Plans' className="md:leading-3 background-color md:pt-36 md:pb-64 flex justify-center text-center">
      <div className="pattern element-class transform transition duration-400 md:hover:scale-105 flex w-full md:w-1/2 mx-auto p-8 flex-col md:m-2 justify-center items-center text-center md:rounded-xl">
        <h1 className="text-3xl md:text-5xl leading-8 md:leading-30 font-bold text-gray-900 dark:text-white">
          اشترك الآن من هنا
        </h1>
        <p className="mb-5 text-base md:text-2xl dark:text-gray-400">
          وتمكن من نـشـر أفكارك <br/>
          بـأفـضـل طـريـقـة <br/>
          لأفـضـل جـمـهـور<br/>
          وبأعلى انـتـشـار مُمكِن.<br/>
        </p>
        <div className="container mx-auto py-5 overflow-x-auto">
          <table className="table-auto w-full text-xs md:text-xl text-center">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-2 md:px-4 py-2">الباقة الأساسية</th>
                <th className="px-2 md:px-4 py-2">عدد المميزات</th>
              </tr>
            </thead>
            <tbody className="bg-gray-400">
<tr>
                <td className="border px-4 py-2">ثمانية حلقات غير محدودة المدة <br/> ويشمل ذلك     </td>
                <td className="border px-4 py-2">١</td>
              </tr>
              <tr>
                <td className="border px-4 py-2"> تحرير الصوت</td>
                <td className="border px-4 py-2">2</td>
              </tr> 
              <tr>
                <td className="border px-4 py-2"> تصميم الكوفرز </td>
                <td className="border px-4 py-2">3</td>
              </tr> 
              <tr>
                <td className="border px-4 py-2">النشر والتوزيع  </td>
                <td className="border px-4 py-2">4</td>
              </tr> 
              <tr>
                <td className="border px-4 py-2">دعم لامحدود 24/7</td>
                <td className="border px-4 py-2">5</td>
              </tr>  
              <tr>
                <td className="border px-4 py-2">باقة غير محدودة المدة، تنتهي بانتهاء رصيد الحلقات</td>
                <td className="border px-4 py-2">6</td>
              </tr>  
              <tr>
                <td className="border px-4 py-2">3749 ريال سعودي</td>
                <td className="border px-4 py-2">قيمة <br/> الاستثمار</td>
              </tr>                                   </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}