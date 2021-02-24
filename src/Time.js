import Change from "./Change"

const Time = ({ time, rest, setTime, setRest }) => {

    return ( 
        <div>
            <div className='adjustContainer'>
                <div>
                    <h3>Time</h3>
                    <div className='adjustTime'>
                        <Change time={time} unit='minutes' setValue={setTime}/>
                        <h3>:</h3>
                        <Change time={time} unit='seconds' setValue={setTime}/>
                    </div>
                </div>

                <div>
                    <h3>Rest</h3>
                    <div className='adjustTime'>
                        <Change time={rest} unit='minutes' setValue={setRest}/>
                        <h3>:</h3>
                        <Change time={rest} unit='seconds' setValue={setRest}/>
                    </div>
                </div>
            </div>
            
        </div>
     )
}
 
export default Time