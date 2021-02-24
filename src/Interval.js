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
                <button className='roundButton' onClick={() => handleClick('decrease')}>-</button>
                <h2>{intervals}</h2>
                <button className='roundButton' onClick={() => handleClick('increase')}>+</button>
            </div>
        </div>
     )
}
 
export default Interval;