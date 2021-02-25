import Time from './Time'
import Interval from './Interval'

const Configure = ({ time, rest, setTime, setRest, intervals, setIntervals, startHandleClick }) => {
    return (
        <div>
            <Time time={time} rest={rest} setTime={setTime} setRest={setRest} />
            <Interval intervals={intervals} setIntervals={setIntervals} />
            <div className='buttons'>
                <button className='ovalButton'>Reset</button>
                <button className='ovalButton' onClick={startHandleClick}>Start</button>
            </div>
        </div>
      )
}
 
export default Configure