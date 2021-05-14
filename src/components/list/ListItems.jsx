import React from 'react';
import { useDispatch } from 'react-redux';
import { BsX } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';

const ListItem = ({ listItem, listId }) => {
    const {
        id,
        name = '',
        desc
    } = listItem;
    const dispatch = useDispatch();

    const handleListItemDelete  = () => {
        dispatch({
            type: 'REMOVE_LIST_ITEM',
            payload: {
                data: id,
                listId
            }
        });
    };

    return (
        <Card style={{ marginTop: '20px', marginBottom: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
            <Card.Body>
                <Card.Title>
                    {name}&nbsp;&nbsp;<Card.Link href="#" onClick={handleListItemDelete}><BsX /></Card.Link>
                </Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ListItem;
