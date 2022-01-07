import { useState, useEffect } from 'react';
import TimeModal from './TimeModal';
import './Timer.css'


function Timer(props) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);

    const [setH, setsetH] = useState(0)
    const [setM, setsetM] = useState(2)
    const [setS, setsetS] = useState(0)

    const [startPause, setStartPause] = useState(false)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (startPause && seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (startPause && seconds === 0) {
                if (startPause && minutes === 0) {
                    clearInterval(myInterval)
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

    function resetTime(params) {
        setHours(0)
        setMinutes(2)
        setSeconds(0)
    }

    return (
        <>
            <div className='text-dark col-8' style={{ fontSize: 165 }}>
                {
                    <span> {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
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

            <div className="col-12">
                <button data-bs-toggle="modal" data-bs-target="#timeModal" className='btn' disabled={startPause ? 'disabled' : null}>
                    Change Time
                </button>
            </div>
            <TimeModal setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} />
        </>
    );
}

export default Timer;