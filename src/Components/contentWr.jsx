import React from 'react';
import '../../src/App.css';

export default function ContentWriting() {
  return (
    <div id="ContentWriting" className="md:leading-3 background-color md:pt-36 md:pb-64 flex justify-center text-center">
      <div
        style={{ direction: 'rtl' }}
        className="pattern element-class transform transition duration-400 md:hover:scale-105 flex w-full md:w-1/2 mx-auto p-8 flex-col md:m-2 justify-center items-center text-center md:rounded-xl"
      >
        <h1 className="md:mb-2 w-full text-3xl md:text-5xl leading-8 md:leading-30 font-bold text-gray-900 dark:text-white">
          كتابة المحتوى التسويقي
        </h1>
        <p className="mb-5 w-full text-base text-gray-900 md:text-2xl dark:text-gray-400">
          للنص قوته، نحن من يستغلها بأفضل شكل ممكن. <br/>
          نقترح لك اسم البودكاست، نكتب وصفه، ووصف كل الحلقات كذلك.
        </p>
      </div>
    </div>
  );
}
