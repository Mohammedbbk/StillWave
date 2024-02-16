import { useState } from "react";
import soundcloud from "../Media/Platforms/soundcloud.svg";
import amazon from "../Media/Platforms/Amazon.svg";
import anghami from "../Media/Platforms/Anghami.svg";
import apple from "../Media/Platforms/apple-podcast.svg";
import google from "../Media/Platforms/google.svg";
import spotify from "../Media/Platforms/Spotify_46990.png";

export default function Distribute() {
  const [photos] = useState([
    { img: soundcloud },
    { img: amazon },
    { img: anghami },
    { img: apple },
    { img: google },
    { img: spotify },
  ]);

  return (
    <div id="Services" className="md:leading-3 background-color md:pt-36 md:pb-64 flex justify-center text-center">
      <div
        style={{ direction: 'rtl' }}
        className="flex w-full md:w-3/4 mx-auto flex-col p-4 md:m-2 justify-center text-center md:border md:rounded-xl sm:p-8 pattern element-class"
      >
        <h5 className="md:mb-2 w-full text-3xl md:text-5xl leading-8 md:leading-30 font-bold text-gray-900 dark:text-white">
          الـنشـر والـتـوزيـع
        </h5>
        <p className="mb-5 w-full text-base text-gray-900 md:text-2xl dark:text-gray-400">
          ننشر محتواك على كل منصات البودكاست
        </p>
        <div className="flex flex-row text-xl font-bold md:leading-8 p-5 sm:text-2xl md:text-3xl text-gray-900 justify-center overflow-x-auto">
          <div id="covers" className="flex justify-center mx-auto gap-16">
          {photos.map((photo, index) => (
            <div key={index} className="flex-shrink-0 hover:scale-110 transition-transform duration-200">
              <img
                src={photo.img}
                alt={`Platform ${index}`}
                className="object-contain h-16 w-16" // Keep your size here
              />
            </div>
            ))}
          </div>
        </div>
      </div>
    </div> 
  );
}

    // <div className="background-color text-color pt-20 md:pr-28  sm:pt-56 w-screen font-29 flex justify-center sm:justify-end">
    //   <div className="text-center sm:text-right max-w-xs sm:max-w-7xl mx-4 sm:mx-0"> 
    //     <h1 style={{ direction: 'rtl' }} className="text-5xl sm:text-7xl md:text-8xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900">
    //       الـنشـر والـتـوزيـع:
    //     </h1>
    //     <h2 style={{ direction: 'rtl' }} className="text-xl sm:text-2xl md:text-4xl px-4 sm:pr-28 tracking-tight py-2 sm:py-4 text-gray-900"> 
    //       ننشر محتواك على كل<br/> منصات البودكاست:
    //     </h2>
    //     <h2 className="text-xl sm:text-2xl md:text-3xl px-4 sm:pr-28 font-bold tracking-tight py-2 sm:py-4 text-gray-900"> 
    //       أبـل - قـوقـل - سـبـوتـيـفـاي - أنـغـامـي - أوفـر كـاسـت - أمـازون مـيـوزيـك <br/>
    //       .وأكــثــر
    //     </h2>
    //   </div>
    // </div>