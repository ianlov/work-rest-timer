import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Howl } from 'howler';
import tone from '../assets/tone.mp3';

const Timer = () => {
  const { work } = useParams()
  const [time, setTime] = useState(work)
  const [isPaused, setIsPaused] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const interval = useRef(null);
  const sound = useMemo(() => new Howl({src: [tone]}), []);

  // Pause/Unpause useEffect
  useEffect(() => {
    // clear interval at beginning so it doesn't get all wonky on refresh
    clearInterval(interval.current)
    interval.current = null;
    if (!isPaused) {
      interval.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 60000);
    } else {
      clearInterval(interval.current)
      interval.current = null;
    }
  }, [isPaused])

  // Work to Rest to Work useEffect
  useEffect(() => {
    if (time <= 0) {
      // Play sound on change
      // This is saved as memo so it doesn't have to be a dependancy
      sound.play();
      setIsWork(!isWork)
      !isWork? setTime(work) : setTime(work/5);
    }
  }, [time, sound, isWork, work])

  const handleReset = () => {
    setIsWork(true)
    setIsPaused(true)
    setTime(work)
  }

  return (
    <div className={`h-screen flex flex-col flex-nowrap justify-center items-center ${isWork? 'bg-bdazzled':'bg-carribean'}`}>
      <h1 className={`text-9xl ${isWork? "text-saffron":"text-dim"}`}>{time} min left</h1>
      <div className="flex flex-row">
        <button className="h-40 w-40 rounded-full m-5 bg-alabaster text-3xl" onClick={()=>setIsPaused(!isPaused)}>
          {isPaused? "Start":"Pause"}
        </button>
        <button className="h-40 w-40 rounded-full m-5 bg-alabaster text-3xl" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer;