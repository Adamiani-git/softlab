import axios from 'axios';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import SinglePic from './SinglePic';


function Picmodal({ albumId, setalbumId, lgModal, setlgModal }) {

    const [imageList, setimageList] = useState([])
    const [singlemodal, setsinglemodal] = useState(false)
    const [state, setstate] = useState({
        title: '',
        url: ''
    })

    const getById = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        setimageList(res.data)
    }

    useEffect(() => {
        getById()
    }, [albumId])

    const singleOpen = (t, u) => {
        setstate({ title: t, url: u })
        setsinglemodal(true)
    }

    return (
        // <div className="modal fade" id="picModal" tabIndex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
        //     <div className="modal-dialog modal-lg">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="picModalLabel">ალბომი {albumId}</h5>
        //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div className="modal-body row">
        //                 {
        //                     imageList.map(pic => (
        //                         <div key={pic.id} className='col-3 p-1'>
        //                             <img src={pic.thumbnailUrl} alt={pic.title} data-bs-toggle="modal" data-bs-target="#singleModal" onClick={() => singleOpen(pic.title, pic.url)} />
        //                         </div>
        //                     ))

        //                 }
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        //     <SinglePic title={state.title} url={state.url} />
        // </div>

        <Modal size='lg' show={lgModal} >
            <Modal.Header closeButton onClick={() => {
                setlgModal(false);
                 setalbumId([])
                 }} >
                <Modal.Title id="example-modal-sizes-title-sm">
                    ალბომი {albumId}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row text-center'>
                    {
                        imageList.map(pic => (
                            <div key={pic.id} className='col-lg-3 col-md-4 col-sm-6 p-1'>
                                <img src={pic.thumbnailUrl} alt={pic.title}  onClick={() => singleOpen(pic.title, pic.url)}  style={{cursor:'pointer'}}/>
                            </div>
                        ))

                    }
                </div>
            </Modal.Body>
            <SinglePic singlemodal={singlemodal} setsinglemodal={setsinglemodal} title={state.title} url={state.url} />
        </Modal >

    );
}

export default Picmodal;
