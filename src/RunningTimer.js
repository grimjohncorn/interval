import { useState, useEffect, useRef } from 'react'
import sndInterval from './media/notification_simple-01.wav'
import sndFinish from './media/notification_high-intensity.wav'

const RunningTimer = ({ time, rest, intervals, stopHandleClick }) => {
    
    const [currentInterval, setCurrentInterval] = useState(1)
    const [currentTime, setCurrentTime] = useState(time)
    const [isCounting, setIsCounting] = useState(true)
    const [isRest, setIsRest] = useState(false)

    const playInterval = useRef(new Audio(sndInterval))
    const playFinish = useRef(new Audio(sndFinish))

    const pauseHandleClick = () => {
        setIsCounting(current => !current)
    }

    
    useEffect(() => {

        if(currentTime === 0 && currentInterval === intervals && isRest) {
            //Finished, stop timer
            setIsCounting(counting => !counting)
            playFinish.current.play()
        }

        if(currentTime < 0) {
            //Switch between rest and activity
            isRest ? setCurrentTime(time) : setCurrentTime(rest)
            isRest && setCurrentInterval(interval => interval + 1)
            setIsRest(rest => !rest)
            playInterval.current.play()
        }

    }, [currentTime, currentInterval, intervals, isRest, rest, time])


    useEffect(() => {
        
        let intervalID = null
        if(isCounting) {
            intervalID = setInterval(() => setCurrentTime(counter => counter - 1), 1000)
        }
        
        return (
            () => {
                clearInterval(intervalID)
            }
        )
    }, [isCounting])

    

    return (
        <div>
            <h3 className='centreHeading'>{isRest ? 'rest' : 'exercise'}</h3>
            <h2 className='centreHeading'>{currentTime}</h2>
            <h3 className='centreHeading'>{`${currentInterval} of ${intervals}`}</h3>
            <div className='buttons'>
                <button onClick={pauseHandleClick}>{isCounting ? 'Pause' : 'Resume'}</button>
                <button onClick={stopHandleClick}>Stop</button>
            </div>
        </div>
      );
}
 
export default RunningTimer