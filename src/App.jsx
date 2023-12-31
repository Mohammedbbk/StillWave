import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainBg from './Components/landingPage.jsx'
import Services from './Components/services'
import Podcast from './Components/podcast'
import Audio from './Components/audio'
import Covers from './Components/covers'
import Distribute from './Components/distribute'
import ContentWriting from './Components/contentWr'
import Consulting from './Components/consulting'
import Plans from './Components/plans'
import Contact from './Components/contact'
// import Separator from './Components/Separator';
import { Separator } from "../@/components/ui/separator"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <MainBg/>
      <div className="flex justify-center bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Services/>
      <div className="flex justify-center bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Podcast/>
      <div className="flex justify-center pt-16 bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Audio/>
      <div className="flex justify-center bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Covers/>
    <div className="flex justify-center pt-16 bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t  border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Distribute/>
    <div className="flex justify-center pt-32 bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <ContentWriting/>
    <div className="flex justify-center pt-40 bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Consulting/>
    <div className="flex justify-center pt-40 bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Plans/>
    <div className="flex justify-center pt-14 bg-gray-400"> 
        <Separator orientation="horizontal" className="border-t pb-16 border-gray-900 h-[1.5px] border-solid w-3/4" />
      </div>
    <Contact/>
   
    </div>
    
    
  ) 
}

export default App
