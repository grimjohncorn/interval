import { useState, useEffect, useRef } from 'react'
import sndInterval from './media/notification_simple-01.wav'
import sndFinish from './media/notification_high-intensity.wav'

const RunningTimer = ({ time, rest, intervals, stopHandleClick }) => {
    
    const [currentInterval, setCurrentInterval] = useState(1)
    const [currentTime, setCurrentTime] = useState(time)
    const [isCounting, setIsCounting] = useState(true)
    const [isRest, setIsRest] = useState(false)
    const [isFinished, setIsFinished] = useState(false)

    const playInterval = useRef(new Audio(sndInterval))
    const playFinish = useRef(new Audio(sndFinish))

    const pauseHandleClick = () => {
        setIsCounting(current => !current)
    }

    
    useEffect(() => {

        console.log(currentInterval, intervals, currentTime)

        if(currentTime <= 0 && currentInterval === intervals) {
            //Finished, stop timer
            setIsCounting(false)
            playFinish.current.play()
            setIsFinished(true)
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

    const timerStyle = isCounting ? 
        isRest ? {animationName: 'circleAnimationRed'} : {animationName: 'circleAnimationGreen'} : {}

    return (
        <div className='runningContainer'>
            <h3 className='centreHeading'>{isRest ? 'rest' : 'exercise'}</h3>
            <div className='timerText' style={timerStyle}><h3>{currentTime > 0 ? currentTime : 0}</h3></div>
            <h3 className='centreHeading'>{`${currentInterval} of ${intervals}`}</h3>
            {!isFinished ?
                <div className='buttons'>
                    <button className='ovalButton' onClick={pauseHandleClick}>{isCounting ? 'Pause' : 'Resume'}</button>
                    <button className='ovalButton' onClick={stopHandleClick}>Stop</button>
                </div>
                :
                <div className='buttons'>
                    <button className='ovalButton' onClick={stopHandleClick}>Back</button>
                </div>
            }   
            
        </div>
      )
}
 
export default RunningTimer