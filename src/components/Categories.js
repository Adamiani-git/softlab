import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddCategory from './AddCategory';





function Categories(props) {

    const [modalHandler, setmodalHandler] = useState(false);

    const [data, setData] = useState([
        {
            id: 1,
            parent_id: 1,
            category_name: 'Name 1'
        },
        {
            id: 2,
            parent_id: 1,
            category_name: 'Name 2'
        },
    ])

    return (
        <div className='row p-3 justify-content-end'>
            <div className="col-2 mb-3">
                <Button variant='success' size='sm' onClick={() => setmodalHandler(true)}>ADD</Button>
            </div>

            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>P_ID</th>
                        <th>Name</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.parent_id}</td>
                                <td>{d.category_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <AddCategory modalHandler={modalHandler} setmodalHandler={setmodalHandler} data={data} setData={setData} />
        </div>
    );
}

export default Categories;