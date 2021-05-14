import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsX } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListItem from './ListItems';
import AddListItem from './AddListItem';

const List = ({ listData }) => {
    const {
        id,
        name = ''
    } = listData;
    const listItems = useSelector(state => (state.listItems) || {});
    const items = listItems[id] || [];
    const dispatch = useDispatch();
    const handleListDelete = () => {
        dispatch({
            type: 'REMOVE_LIST',
            payload: id
        });
    };

    return (
        <Card style={{ marginTop: '20px'}}>
            <Card.Body>
                <Card.Title>
                    {name}&nbsp;&nbsp;
                    <Card.Link href="#" onClick={handleListDelete}><BsX /></Card.Link>
                </Card.Title>
                {
                    !!items.length
                        ? items.map((listItem) => (
                            <React.Fragment key={ `${name}-listItem-${listItem.id}`}>
                                <ListItem listItem={listItem} listId={id}/>
                            </React.Fragment>
                        ))
                        : (
                            <Container>
                                No Items in list
                            </Container>
                        )
                }
                <Container>
                    <AddListItem listId={id} listName={name} />
                </Container>
            </Card.Body>
        </Card>
    );
};

export default List;
