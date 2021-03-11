import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const Change = ( {time, unit, setValue} ) => {

    const displayValue = unit === 'minutes' ? Math.floor(time / 60) : time % 60
    
    const changeTime = (direction, unit) => { 
    
        if(direction === 'increase') {
          //Increase
          unit === 'minutes' ? setValue(current => current + 60) : setValue(current => current + 1)
        } else {
          //Decrease
          if(unit === 'minutes') {
            if(time >= 60) setValue(current => current - 60)
          } else {
            if(time >= 2) setValue(current => current - 1)
          }   
        }
      }

    return (
        <div>
            <button 
              className='roundButton' 
              onClick={() => changeTime('increase', unit)}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <h2>{unit === 'seconds' && displayValue < 10 ? `0${displayValue}` : displayValue}</h2>
            <button 
              className='roundButton' 
              onClick={() => changeTime('decrease', unit)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
        </div>
    )
}
 
export default Change;