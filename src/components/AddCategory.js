import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

function AddCategory({ modalHandler, setmodalHandler, getCat }) {

    const [parId, setparId] = useState(0);
    const [catName, setcatName] = useState('');

    // let newData = []
    const addCategory = (e) => {
        e.preventDefault()
        axios.post('http://192.168.10.119:3003/categories', { parent_id: parId, category_name: catName })
            .then(setmodalHandler(false))
            .then(() => getCat())
            .catch((error) => console.log(error))

        // newData = [...data, { id: data.length + 1, parent_id: parId, category_name: catName }]
        // setData(newData)

    }

    return (
        <Modal show={modalHandler} >
            <Modal.Header closeButton onClick={() => setmodalHandler(false)}>
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={addCategory}>
                    <Form.Group className="mb-3" controlId="parent_id">
                        <Form.Label>parent id</Form.Label>
                        <Form.Control type="number" placeholder="parent id" min={0} required onChange={(e) => setparId(parseInt(e.target.value))} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="categori_name">
                        <Form.Label>category name</Form.Label>
                        <Form.Control type="text" placeholder="category name" required onChange={(e) => setcatName(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Save
                    </Button>
                </Form>

            </Modal.Body>

        </Modal>
    );
}

export default AddCategory;