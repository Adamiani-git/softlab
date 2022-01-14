import { useState, useEffect } from 'react';
import TimeModal from './TimeModal';
import './Timer.css'


function Timer(props) {

    const [staticTime, setstaticTime] = useState(120)
    const [timeInSeconds, settimeInSeconds] = useState(staticTime)

    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const [startPause, setStartPause] = useState(false)

    const displayTime = () => {
        setHours(Math.floor(timeInSeconds / 3600))
        setMinutes(Math.floor(timeInSeconds % 3600 / 60))
        setSeconds((timeInSeconds % 3600) % 60)
    }

    
    useEffect(() => {
        displayTime()
    }, [timeInSeconds])




    useEffect(() => {
        const myInterval = setInterval(() => {
            if (startPause && timeInSeconds > 0) {
                settimeInSeconds(timeInSeconds - 1);

            } else {
                setStartPause(false)
                clearInterval(myInterval)
            }

        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [startPause, timeInSeconds]);


    function resetTime() {
        settimeInSeconds(staticTime)
        displayTime()
    }


    return (
        <>
            <div className='text-dark col-lg-8' style={{ fontSize: 165 }}>
                {
                    <span>
                        {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </span>
                }

            </div>
            <div className="col-2">
                <button className='btn btn-success rounded-circle px-3 mb-5' onClick={() => setStartPause(!startPause)}>
                    {startPause ? <i className="bi bi-pause" /> : <i className="bi bi-caret-right"/>}
                </button>
            </div>
            <div className="col-2">
                <button className='btn btn-primary rounded-circle px-3 mb-5' disabled={startPause ? 'disabled' : null}
                    onClick={resetTime}
                >
                    <i className="bi bi-arrow-counterclockwise" />
                </button>
            </div>
            <hr />
            <div className="col-12 mb-2">
                <button disabled={startPause ? 'disabled' : null} data-bs-toggle={startPause ? null : 'modal'} data-bs-target="#timeModal" className='btn border-light rounded' >
                    <span className='fw-bold fs-3 text-info'>Change Time</span>
                </button>
            </div>
            <div className="col-12 loadWrap rounded" >
                <div className="loadLine" style={{ width: `${timeInSeconds * 100 / staticTime}%` }}></div>
            </div>
            <TimeModal setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} setstaticTime={setstaticTime} settimeInSeconds={settimeInSeconds} />
        </>
    );
}

export default Timer;
