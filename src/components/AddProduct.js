import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

function AddProduct({ modalHandler, setmodalHandler }) {


    const addmaker = (e) => {
        e.preventDefault()
    }

    return (
        <Modal show={modalHandler} >
            <Modal.Header closeButton onClick={() => setmodalHandler(false)}>
                <Modal.Title>Add Maker</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={addmaker}>

                    <Form.Group className="mb-3" controlId="categori_name">
                        <Form.Label>Maker name</Form.Label>
                        <Form.Control type="text" placeholder="category name" required />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Save
                    </Button>
                </Form>

            </Modal.Body>

            {/* <Modal.Footer>
            <Button variant="secondary" onClick={() => setmodalHandler(false)} >Close</Button>

        </Modal.Footer> */}
        </Modal>
    );
}

export default AddProduct;