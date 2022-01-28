import axios from 'axios';
import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

function Addmaker({ modalHandler, setmodalHandler, getMaker }) {

    const [makerName, setmakerName] = useState('');



    const addmaker = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3003/makers', { maker_name: makerName })
            .then(setmodalHandler(false))
            .then(() => getMaker())
            .catch((error) => console.log(error))
    }

    return (
        <Modal show={modalHandler} >
            <Modal.Header closeButton onClick={() => setmodalHandler(false)}>
                <Modal.Title>Add Maker</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={addmaker}>

                    <Form.Group className="mb-3" controlId="maker_name">
                        <Form.Label>Maker name</Form.Label>
                        <Form.Control type="text" placeholder="maker name" required onChange={(e) => setmakerName(e.target.value)} />
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

export default Addmaker;