import { useState } from 'react';
import '../../src/App.css'

export default function Contact() {
  return (
    <div id='contact' className="bg-gray-400 font-29 pt-14 sm:pt-28 w-screen direction-rtl justify-end"> 
      <div className="w-full flex flex-col items-center"> 
        <h1 style={{ direction: 'rtl' }} className="text-5xl sm:text-8xl md:text-9xl pr-4 sm:pr-54 font-bold tracking-tight py-2 sm:py-4 text-gray-900">
          نسعد بِك مشارِكًا!
        </h1>
        <h2 style={{ direction: 'rtl' }} className="text-lg sm:text-xl md:text-2xl text-center font-bold pt-10 sm:pt-20 leading-normal sm:leading-loose tracking-tight py-2 sm:py-4 text-gray-900"> 
          للتواصل والاستفسارات:
          <br/>
          go@istillwave.sa
          <br/>
          9660505623970
          <br/>
          واتساب فقط
        </h2>
      </div>
      <div className="flex items-center justify-between p-4 lg:px-8" aria-label="Footer">
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5 text-xl sm:text-3xl font-tt-forts">Still Wave
          </a>
        </div>
      </div>
    </div>
  );
}
