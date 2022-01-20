import { Button, Card, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Picmodal from './Picmodal';


function Album(props) {

    const [albumList, setalbumList] = useState([])
    const [loading, setloading] = useState(true)

    const [albumId, setalbumId] = useState()

    const [lgModal, setlgModal] = useState(false)

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
        setlgModal(true)
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
           
                <CardGroup className="row mb-3">
                    {
                        albumList.map(a => (
                            <div key={a.id} className='col-lg-2 col-md-4 col-sm-6 text-center mb-3'>
                                <Card onClick={() => sendToModal(a.id)} style={{ width: '100%', cursor:'pointer' }}>
                                    <Card.Header style={{fontSize:12}}>მომხმარებელი: {a.userId}</Card.Header>
                                    <Card.Body>
                                        {a.title}
                                    </Card.Body>
                                </Card>
                            </div>

                        ))
                    }
                </CardGroup>
                {/* {
                    albumList.map(a => (
                        <div key={a.id}
                            className='card col-lg-2 col-md-4 col-sm-6 m-1'
                            onClick={() => sendToModal(a.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#picModal">
                            <div className='cadr-body'>{a.title}</div>
                        </div>


                    ))
                } */}

            
            <Picmodal albumId={albumId} setalbumId={setalbumId} lgModal={lgModal} setlgModal={setlgModal} />
        </div>
    );
}

export default Album;
