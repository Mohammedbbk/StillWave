import { useState } from "react";
import soundcloud from "../Media/Platforms/soundcloud.svg";
import amazon from "../Media/Platforms/Amazon.svg";
import anghami from "../Media/Platforms/Anghami.svg";
import apple from "../Media/Platforms/apple-podcast.svg";
import google from "../Media/Platforms/google.svg";
import spotify from "../Media/Platforms/Spotify_46990.png";
import thmanya from "../Media/Platforms/unnamed.webp"
export default function Distribute() {
  const [photos] = useState([
    { img: thmanya },
    { img: anghami },
    { img: apple },
    { img: google },
    { img: spotify },
  ]);

  return (
    <div id="Services" className="md:leading-3 background-color md:pt-36 md:pb-64 flex justify-center text-center">
      <div
        style={{ direction: 'rtl' }}
        className="pattern element-class transform transition duration-400 md:hover:scale-105 flex w-full md:w-1/2 mx-auto p-8 flex-col md:m-2 justify-center items-center text-center md:rounded-xl"
      >
        <h5 className="md:mb-2 w-full text-3xl md:text-5xl leading-8 md:leading-30 font-bold text-gray-900 dark:text-white">
          الـنشـر والـتـوزيـع
        </h5>
        <p className="mb-5 w-full text-base text-gray-900 md:text-2xl dark:text-gray-400">
          ننشر محتواك على كل منصات البودكاست
        </p>
        <div className="flex flex-row md:leading-8 p-5  text-gray-900 justify-center overflow-x-auto">
          <div id="covers" className="flex justify-center mx-auto gap-5 md:gap-16">
          {photos.map((photo, index) => (
            <div key={index} className="flex-shrink-0 hover:scale-110 transition-transform duration-200">
              <img
                src={photo.img}
                alt={`Platform ${index}`}
                className="object-contain h-12 w-12 md:h-16 md:w-16" 
              />
            </div>
            ))}
          </div>
        </div>
      </div>
    </div> 
  );
}

  