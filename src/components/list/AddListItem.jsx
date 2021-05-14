import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { BsPlusCircle } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import uuid from 'uuid/dist/v4';

const AddListItem = ({ listId, listName }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    };

    const handleDescChange = (evt) => {
        setDesc(evt.target.value);
    };

    const handleListItemAdd = () => {
        dispatch({
            type: 'ADD_LIST_ITEM',
            payload: {
                listId,
                data: {
                    id: uuid(),
                    name,
                    desc
                }
            }
        });
        setOpen(false);
    };

    return (
        <>
            <Button variant="link" onClick={() => setOpen(true)}><BsPlusCircle /></Button>
            <Modal show={open} animation={false} centered>
                <Modal.Header>
                    <Modal.Title>{`Add List Item - ${listName}`}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label htmlFor="item-name">Item Name</label>
                    <InputGroup className="mb-3">
                        <FormControl id="item-name" onChange={handleNameChange}/>
                    </InputGroup>
                    <label htmlFor="item-desc">Item Description</label>
                    <InputGroup className="mb-3">
                        <FormControl id="item-desc" onChange={handleDescChange}/>
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
                    <Button variant="primary" onClick={handleListItemAdd} disabled={!name.length && !desc.length}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddListItem;
