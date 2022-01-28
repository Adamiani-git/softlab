import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddCategory from './AddCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'






function Categories(props) {

    const [modalHandler, setmodalHandler] = useState(false);

    const [data, setData] = useState([])


    const deleteCat = (e) => {
        axios.delete(`http://localhost:3003/categories/${e}`)
            .then(() => getCat())
    }


    const getCat = async () => {
        const res = await axios.get('http://localhost:3003/categories')
        setData(res.data)
    }

    useEffect(() => {
        getCat()
    }, []);

    //     [
    //     {
    //         id: 1,
    //         parent_id: 1,
    //         category_name: 'Name 1'
    //     },
    //     {
    //         id: 2,
    //         parent_id: 1,
    //         category_name: 'Name 2'
    //     },
    // ]

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
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(d => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.parent_id}</td>
                                <td>{d.category_name}</td>
                                <td><Button onClick={() => deleteCat(d.id)} ><FontAwesomeIcon icon={faTrash} /></Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <AddCategory modalHandler={modalHandler} setmodalHandler={setmodalHandler} getCat={getCat} />
        </div>
    );
}

export default Categories;