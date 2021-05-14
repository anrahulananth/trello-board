import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from '../list';
import AddList from './AddList';

const ListContainer = () => {
    const lists = useSelector((state) => state.lists || []);
    return (
            <Container>
                <Row>
                    <Col sm={12} md={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 8 }} xl={{ span: 3, offset: 9}}>
                        <AddList />
                    </Col>
                </Row>
                <Row>
                    {
                        !!lists.length
                            ? lists.map((list) => (
                                <Col sm={12} md={6} lg={4} xl={3} key={`list-${list.id}`}>
                                    <List listData={list} />
                                </Col>
                            )) : (
                                <Container>
                                    No Lists in Board
                                </Container>
                            )
                    }
                </Row>
            </Container>
    );
};

export default ListContainer;
