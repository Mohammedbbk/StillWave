import { useState } from 'react';
import '../../src/App.css'

export default function Contact() {
  return (
    <div id='contact' className="bg-gray-400 font-29 pt-28 w-screen direction-rtl justify-end"> 
      <div className="w-full flex flex-col items-center"> 
        <h1 className="text-8xl pr-54 font-bold tracking-tight py-4 text-gray-900 sm:text-9xl">
        نسعد بِك مشارِكًا
              </h1>
        <h2 className="sm:text-2xl text-center text-xl font-bold pt-20 leading-loose tracking-tight py-4 text-gray-900 sm:text-xl"> 
        للتواصل والاستفسارات
        <br/>
        go@istillwave.sa
        <br/>
        9660505623970
        <br/>
        واتساب فقط
              </h2>
        </div>
        <div className="flex items-center justify-between p-6 lg:px-8" aria-label="Footer">
          <div className="flex lg:flex-1 ">
            <a href="#" className="-m-1.5 p-1.5 text-3xl font-tt-forts">Still Wave
            </a>
          </div>
      </div>

    </div>
  );
}