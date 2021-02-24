import { useState } from 'react'
import Title from './Title'
import Configure from './Configure'
import RunningTimer from './RunningTimer'
import './App.css'

function App() {

  const [time, setTime] = useState(30)
  const [rest, setRest] = useState(15)
  const [intervals, setIntervals] = useState(5)
  const [isRunning, setIsRunning] = useState(false)

  const startHandleClick = () => {
    setIsRunning(true)
  }

  const stopHandleClick = () => {
    setIsRunning(false)
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
          startHandleClick={startHandleClick}>
        </Configure>}
    </div>
  );
}

export default App;
