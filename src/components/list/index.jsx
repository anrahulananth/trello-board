import React from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { BsX } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListItem from './ListItems';
import AddListItem from './AddListItem';

const List = ({ listData, placeholder }) => {
    const {
        id,
        name = '',
        items
    } = listData;

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
                        ? items.map((listItem, index) => (
                            <Draggable key={ `${name}-listItem-${listItem.id}`} draggableId={listItem.id} index={index}>
                                {
                                    (provided, snapshot) => (
                                        <div 
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                opacity: snapshot.isDragging ? '0.5' : '1',
                                                ...provided.draggableProps.style
                                            }}
                                        >
                                            <ListItem listItem={listItem} listId={id}/>
                                        </div>
                                    )
                                }
                            </Draggable>
                        ))
                        : (
                            <Container>
                                No Items in this list
                            </Container>
                        )
                }
                {placeholder}
                <Container>
                    <AddListItem listId={id} listName={name} />
                </Container>
            </Card.Body>
        </Card>
    );
};

export default List;
