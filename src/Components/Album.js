import axios from 'axios';
import { useState, useEffect } from 'react';
import Picmodal from './Picmodal';

function Album(props) {

    const [albumList, setalbumList] = useState([])
    const [loading, setloading] = useState(true)

    const [albumId, setalbumId] = useState()

    const getAlbum = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
        setalbumList(res.data)
        setloading(false)
    }

    useEffect(() => {
        getAlbum().catch(console.error)
    }, [])


    const sendToModal = (aid) => {
        setalbumId(aid)
    }


    if (loading) {
        return (
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='row'>
                {
                    albumList.map(a => (
                        <div key={a.id}
                            className='card col-lg-2 col-md-4 col-sm-6 m-1'
                            onClick={() => sendToModal(a.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#picModal">
                            <div className='cadr-body'>{a.title}</div>
                        </div>


                    ))
                }

            </div>
            <Picmodal albumId={albumId} />
        </div>
    );
}

export default Album;
