import { useState } from 'react';

function TimeModal({ setHours, setMinutes, setSeconds, setstaticTime }) {

    const [setH, setsetH] = useState(0)
    const [setM, setsetM] = useState(2)
    const [setS, setsetS] = useState(0)

    function changeHandler(params) {
        setHours(setH)
        setMinutes(setM)
        setSeconds(setS)
        setstaticTime(+setH * 60 * 60 + +setM * 60 + +setS)
    }


    return (
        <div className="modal fade" id="timeModal" tabIndex="-1" aria-labelledby="timeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="timeModalLabel">Edit Timer</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-3">
                            <label className='fw-bold'>
                                <input type="number" className='form-control' name='Hrs' defaultValue={0} onChange={e => setsetH(e.target.value)} />
                                Hrs
                            </label>
                        </div>
                        :
                        <div className="col-3">
                            <label className='fw-bold'>
                                <input type="number" className='form-control' name='Sec' defaultValue={2} onChange={e => setsetM(e.target.value)} />
                                Min
                            </label>
                        </div>
                        :
                        <div className="col-3">
                            <label className='fw-bold'>
                                <input type="number" className='form-control' name='Sec' defaultValue={0} onChange={e => setsetS(e.target.value)} />
                                Sec
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={changeHandler}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeModal;