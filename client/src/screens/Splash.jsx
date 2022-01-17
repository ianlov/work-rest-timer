import { useEffect } from 'react';
import Buttons from '../components/Buttons.jsx';

const Splash = () => {
  useEffect(() => {
    document.title = "Work Rest Timer"
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-alabaster" >
      <div className="text-6xl font-bold flex flex-col items-center" >
        <h1 className="flex-auto" >Welcome to Work Rest Timer!</h1>
        <h1 className="flex-auto" >Choose a time interval</h1>
      </div>
      <Buttons />
    </div>
  )
}

export default Splash;