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
    <h1 className="text-6xl text-center sm:text-right md:pr-54 font-bold tracking-tight py-4 text-gray-900 sm:text-9xl">
     تصميم الكوفرز
      </h1>
      <h2 className="sm:text-3xl text-2xl font-bold tracking-tight py-4 text-gray-900 "> 
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

      <div 
        ref={coversRef} 
        id='covers' 
        className='relative mt-8 sm:mt-16 -mb-32 w-full sm:w-3/5 mx-auto flex overflow-x-auto scrollbar-hide'
      >
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className='flex-shrink-0 mr-2 sm:mr-2 last:mr-0'
            style={{ maxWidth: '100%', minWidth: '250px' }}
          >
            <img 
              src={photo.img} 
              alt={`Cover ${index}`} 
              className='object-cover   h-1/2 sm:h-3/4' 
            />
          </div>
        ))}
    </div>


      <div className="flex justify-center items-center gap-10 "> 
        <div className="w-10 h-10 bg-transparent border-t border-l border-gray-500 -rotate-45 hover:border-gray-900"></div>
          <div className='rotate-90'>
            <div className="w-10 h-10 bg-transparent border-t border-l border-gray-500 rotate-45 hover:border-gray-900"></div>
          </div>
      </div>

    </div>

  );
}

