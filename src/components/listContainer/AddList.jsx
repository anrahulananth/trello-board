import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import uuid from 'uuid/dist/v4';

const AddList = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    };

    const handleListAdd = () => {
        dispatch({
            type: 'ADD_LIST',
            payload: {
                id: uuid(),
                name,
                items: []
            }
        });
        setOpen(false);
    };

    return (
        <>
            <Button variant="primary" onClick={() => setOpen(true)} block style={{margin: '10px'}}>Add List</Button>
            <Modal show={open} animation={false} centered>
                <Modal.Header>
                    <Modal.Title>Add List</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label htmlFor="item-name">List Name</label>
                    <InputGroup className="mb-3">
                        <FormControl id="item-name" onChange={handleNameChange}/>
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
                    <Button variant="primary" onClick={handleListAdd} disabled={!name.length}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddList;
