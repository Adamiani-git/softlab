import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import AddProduct from './AddProduct';

const data = [
    {
        id: 1,
        maker_name: 'Name 3'
    },
    {
        id: 2,
        maker_name: 'Name 4'
    },
]


function Makers(props) {


    const [modalHandler, setmodalHandler] = useState(false);


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
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.maker_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <AddProduct modalHandler={modalHandler} setmodalHandler={setmodalHandler} />
        </div>
    );
}

export default Makers;