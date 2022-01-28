import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddMaker from './AddMaker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axs from '../Helper/Axs';

// const data = [
//     {
//         id: 1,
//         maker_name: 'Name 3'
//     },
//     {
//         id: 2,
//         maker_name: 'Name 4'
//     },
// ]


function Makers(props) {

    const [data, setdata] = useState([]);
    const [modalHandler, setmodalHandler] = useState(false);

    const getMaker = async () => {
        const res = await axs.get('/makers')
        setdata(res.data)
    }

    useEffect(() => {
        getMaker()
    }, []);


    const deleteMaker = (e) => {
        axs.delete(`/maker/${e}`)
            .then(() => getMaker())
    }




    return (
        <div className='row p-3 justify-content-end'>
            <div className="col-2 mb-3">
                <Button variant='success' size='sm' onClick={() => setmodalHandler(true)} >ADD</Button>
            </div>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DEL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.maker_name}</td>
                                <td><Button onClick={() => deleteMaker(d.id)} ><FontAwesomeIcon icon={faTrash} /></Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <AddMaker modalHandler={modalHandler} setmodalHandler={setmodalHandler} getMaker={getMaker} />
        </div>
    );
}

export default Makers;