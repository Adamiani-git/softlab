import React from 'react';
import { Modal } from 'react-bootstrap';

function SinglePic({ singlemodal, setsinglemodal, state }) {

    const closeSingle = () => {
        setsinglemodal(false)
    }

    return (
        //     <div className="modal fade" id="singleModal" tabIndex="-1" aria-labelledby="singleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog modal-lg">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="singleModalLabel">{title} </h5>
        //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div className="modal-body row">
        //                <img src={url} alt={title}/>
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <Modal show={singlemodal} size='lg'>
            <Modal.Header closeButton onClick={closeSingle}>
                <Modal.Title id="example-modal-sizes-title-lg">
                   {state.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <img src={state.url} alt={state.title} />
            </Modal.Body>
        </Modal>
    );
}

export default SinglePic;
