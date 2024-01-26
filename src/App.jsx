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

    <Services/>
  
    <Podcast/>
 
    <Audio/>
 
    <Covers/>
 
    <Distribute/>
    
    <ContentWriting/>
   
    <Consulting/>
  
    <Plans/>
 
    <Contact/>
   
    </div>
    
    
  ) 
}

export default App
