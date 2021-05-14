import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '../list';
import AddList from './AddList';

const ListContainer = () => {
    const lists = useSelector((state) => state.lists || []);
    const dispatch = useDispatch();
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        const listsState = [...lists];
        const sourceListIndex = listsState.findIndex(list => list.id === source.droppableId);
        const sourceList = listsState[sourceListIndex];
        const destinationIndex = listsState.findIndex(list => list.id === destination.droppableId);
        const destinationList = listsState[destinationIndex];
        const [moveItem] = sourceList.items.splice(source.index, 1);
        destinationList.items.splice(destination.index, 0, moveItem);
        listsState[sourceListIndex] = sourceList;
        listsState[destinationIndex] = destinationList;
        dispatch({
            type: 'SET_LIST',
            payload: listsState
        });
        localStorage.setItem('lists', JSON.stringify(listsState));
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Container>
                <Row>
                    <Col sm={12} md={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 8 }} xl={{ span: 3, offset: 9}}>
                        <AddList />
                    </Col>
                </Row>
                <Row>
                    {
                        !!lists.length
                            ? lists.map((list, index) => (
                                <Col sm={12} md={6} lg={4} xl={3} key={`list-${list.id}`}>
                                    <Droppable droppableId={list.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver? 'lightblue' : 'lightgrey' 
                                                }}
                                            >
                                                <List listData={list} placeholder={provided.placeholder}/>
                                                
                                            </div>
                                        )}
                                    </Droppable>
                                </Col>
                            )) : (
                                <Container>
                                    No Lists in the board
                                </Container>
                            )
                    }
                </Row>
            </Container>
        </DragDropContext>
    );
};

export default ListContainer;
