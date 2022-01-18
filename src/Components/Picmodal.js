import axios from 'axios';
import { useState, useEffect } from 'react';
import SinglePic from './SinglePic';


function Picmodal({ albumId }) {

    const [imageList, setimageList] = useState([])
    const [loading, setloading] = useState(true)
    const [state, setstate] = useState({
        title: '',
        url: ''
    })

    const getById = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        setimageList(res.data)
        console.log(res.data);
    }

    useEffect(() => {
        getById()
    }, [albumId])

    const singleOpen = (t, u) => {
        setstate({ title: t, url: u })
    }

    console.log(imageList);
    return (
        <div className="modal fade" id="picModal" tabIndex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="picModalLabel">ალბომი {albumId}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        {
                            imageList.map(pic => (
                                <div key={pic.id} className='col-3 p-1'>
                                    <img src={pic.thumbnailUrl} alt={pic.title} data-bs-toggle="modal" data-bs-target="#singleModal" onClick={() => singleOpen(pic.title, pic.url)} />
                                </div>
                            ))

                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
            <SinglePic title={state.title} url={state.url} />
        </div>
    );
}

export default Picmodal;
