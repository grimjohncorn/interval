import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Interval = ({ intervals, setIntervals }) => {
    
    const handleClick = (direction) => {

        if(direction === 'increase') {
            setIntervals(interval => interval + 1)
        } else {
            if(intervals > 1) setIntervals(interval => interval - 1)
        }

    } 
    
    return ( 
        <div>
            <h3 className='title'>Repetitions</h3>
            <div className='intervalsContainer'>
                <button 
                    className='roundButton'
                    onClick={() => handleClick('decrease')}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                <h2>{intervals}</h2>
                <button 
                    className='roundButton'
                    onClick={() => handleClick('increase')}>
                        <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
     )
}
 
export default Interval;