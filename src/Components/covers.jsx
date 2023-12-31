import { useState, useRef, useEffect } from 'react';
import image7 from '../Media/Covers/7.png';
import image8 from '../Media/Covers/8.png';
import image9 from '../Media/Covers/9.png';
import image10 from '../Media/Covers/10.png';
import image11 from '../Media/Covers/11.png';
import image12 from '../Media/Covers/12.png';



export default function Covers() {
        const [photos] = useState([
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
        { img: image11 },
        { img: image12 },
      ]);
     
  const coversRef = useRef(null);
  const handleWheel = (e) => {
    if (coversRef.current) {
      e.preventDefault(); 
      e.stopPropagation(); 
  
      const { deltaY } = e;
      const direction = deltaY > 0 ? 1 : -1;
      coversRef.current.scrollLeft += direction * 150; 
    }
  };
  useEffect(() => {
    const coversEl = coversRef.current;
    if (coversEl) {
      coversEl.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (coversEl) {
        coversEl.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    
    <div className="bg-gray-400 font-29 pt-28 w-screen justify-end"> 
    <div className="w-full flex flex-col items-center"> 
      <h1 className="text-8xl pr-54 font-bold tracking-tight py-4 text-gray-900 sm:text-9xl">
     تصميم الكوفرز
      </h1>
      <h2 className="sm:text-2xl text-xl font-bold tracking-tight py-4 text-gray-900 sm:text-xl"> 
      نُبحِر فيها، ونُبدِع
      </h2>
      </div>


      <div id='covers' className='relative w-3/5 pt-5 justify-center mx-auto'>
        {photos.map((photo, index) => (
          <div key={index} className='pt-3 w-full'>
            <img src={photo.img} alt={`Cover ${index}`} className='w-full h-auto object-cover' />
          </div>
        ))}
      </div>


      <div ref={coversRef} id='covers' className='relative w-3/5 pt-5 mx-auto flex overflow-x-auto scrollbar-hide'>
        {photos.map((photo, index) => (
          <div key={index} className='flex-shrink-0'>
            <img src={photo.img} alt={`Cover ${index}`} className='object-cover h-4/5' />
          </div>
        ))}
      </div>

    </div>

  );
}
