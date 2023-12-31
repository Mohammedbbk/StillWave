import React from 'react';

export default function Plans() {
  return (
    <div id='Plans' className="bg-gray-400 font-29 min-h-screen flex items-center justify-center">
      <div className="flex flex-row items-start w-full max-w-7xl px-8"> 
        <div className="flex flex-col w-1/2 pr-8 text-center direction-rtl">
          <h1 className="text-xl mt-4 font-bold tracking-tight text-gray-900 sm:text-7xl">
            اشترك الآن من هنا
          </h1>
          <p className="mt-6 text-4xl leading-loose leading-8 font-semibold text-gray-900">
            وتمكن من نـشـر أفكارك <br/>
            بـأفـضـل طـريـقـة <br/>
            لأفـضـل جـمـهـور<br/>
            وبأعلى انـتـشـار مُمكِن<br/>
          </p>
        </div>
        <div className="container w-1/2 py-5"> 
          <table className="table-auto w-full text-2xl text-right">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-2">الباقة الأساسية</th>
                <th className="px-4 py-2">عدد المميزات</th>
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
              </tr>                
            </tbody>
            <tfoot>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}