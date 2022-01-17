import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const { work } = useParams()
  const [time, setTime] = useState(work)
  const [isPaused, setIsPaused] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const interval = useRef(null);

  useEffect(() => {
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

  useEffect(() => {
    if (time <= 0) {
      setIsWork(!isWork)
      if (!isWork) {
        setTime(work);
      } else {
        setTime(work/5)
      }
    }
  }, [time, isWork, work])

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsWork(true)
    setIsPaused(true)
    setTime(work)
  }

  return (
    <div className={`h-screen flex flex-col flex-nowrap justify-center items-center ${isWork? 'bg-bdazzled':'bg-carribean'}`}>
      <h1 className={`text-9xl ${isWork? "text-saffron":"text-dim"}`}>{time} min left</h1>
      <div className="flex flex-row">
        <button className="h-40 w-40 rounded-full m-5 bg-white text-3xl" onClick={handlePause}>
          {isPaused? "Start":"Pause"}
        </button>
        <button className="h-40 w-40 rounded-full m-5 bg-white text-3xl" onClick={handleReset}>
          Reset
        </button>
      </div>
      
    </div>
  )
}

export default Timer;