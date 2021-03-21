import { useState, useEffect } from 'react'
import Title from './Title'
import Configure from './Configure'
import RunningTimer from './RunningTimer'
import './App.css'

function App() {

  const DEFAULT_TIME = 30
  const DEFAULT_REST = 15
  const DEFAULT_INTERVALS = 5

  const [time, setTime] = useState(parseInt(localStorage.getItem('Interval-time')) || DEFAULT_TIME)
  const [rest, setRest] = useState(parseInt(localStorage.getItem('Interval-rest')) || DEFAULT_REST)
  const [intervals, setIntervals] = useState(parseInt(localStorage.getItem('Interval-number')) || DEFAULT_INTERVALS)
  const [isRunning, setIsRunning] = useState(false)
  const [storeValues, setStoreValues] = useState(null)

  useEffect(() => {
    //Persist times in localStorage
    if(storeValues !== null) {
      localStorage.setItem('Interval-time', storeValues.time)
      localStorage.setItem('Interval-rest', storeValues.rest)
      localStorage.setItem('Interval-number', storeValues.intervals)
    }
  },[storeValues])

  const startHandleClick = () => {
    setStoreValues({time, rest, intervals})
    setIsRunning(true)
  }

  const stopHandleClick = () => {
    setIsRunning(false)
  }

  const resetHandleClick = () => {
    setTime(DEFAULT_TIME)
    setRest(DEFAULT_REST)
    setIntervals(DEFAULT_INTERVALS)
  }
  
  return (
    <div className="App">
      <Title title="Interval Timer" />
      {isRunning
        ? <RunningTimer
            time={time}
            rest={rest}
            intervals={intervals}
            stopHandleClick={stopHandleClick}>            
          </RunningTimer>
        : <Configure 
            time={time} 
            rest={rest} 
            setTime={setTime} 
            setRest={setRest} 
            intervals={intervals} 
            setIntervals={setIntervals}
            startHandleClick={startHandleClick}
            resetHandleClick={resetHandleClick}>
        </Configure>}
    </div>
  );
}

export default App;
