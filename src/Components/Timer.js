import { useState, useEffect } from 'react';
import TimeModal from './TimeModal';
import './Timer.css'


function Timer(props) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);


    const [staticTime, setstaticTime] = useState(120)

    const [startPause, setStartPause] = useState(false)

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (startPause && seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (startPause && seconds === 0 && minutes >= 0 && hours >= 0) {
                if (minutes <= 0 && hours <= 0) {
                    setStartPause(false)
                    clearInterval(myInterval)
                } else if (hours > 0 && minutes <= 0) {
                    setHours(hours - 1)
                    setMinutes(59)
                    setSeconds(59)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    function resetTime() {
        setHours(Math.round(staticTime / 3600))
        setMinutes(Math.round(staticTime % 3600 / 60))
        setSeconds((staticTime % 3600) % 60)
    }


    const interval = +seconds + +minutes * 60 + +hours * 60 * 60


    return (
        <>
            <div className='text-dark col-8' style={{ fontSize: 165 }}>
                {
                    <span>
                        {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </span>
                }

            </div>
            <div className="col-2">
                <button className='btn btn-success rounded-circle px-3 mb-5' onClick={() => setStartPause(!startPause)}>
                    {startPause ? <i className="bi bi-pause" ></i> : <i className="bi bi-caret-right"></i>}
                </button>
            </div>
            <div className="col-2">
                <button className='btn btn-primary rounded-circle px-3 mb-5' disabled={startPause ? 'disabled' : null}
                    onClick={resetTime}
                >
                    <i className="bi bi-arrow-counterclockwise" ></i>
                </button>
            </div>
            <hr />
            <div className="col-12 mb-2">
                <button disabled={startPause ? 'disabled' : null} data-bs-toggle={startPause ? null : 'modal'} data-bs-target="#timeModal" className='btn border-light rounded' >
                    <span className='fw-bold fs-3 text-info'>Change Time</span>
                </button>
            </div>
            <div className="col-12" className='loadWrap rounded'>
                <div className="loadLine" style={{ width: `${interval * 100 / staticTime}%` }}></div>
            </div>
            <TimeModal setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} setstaticTime={setstaticTime} />
        </>
    );
}

export default Timer;