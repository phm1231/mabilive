import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Section from './section';
import Aside from './aside';
import './layout.css';

function Layout(){
    return(
        <Container fluid>
            <Row>
                <Col><Header></Header></Col>
            </Row>
            <Row>
                <Col><Section></Section></Col>
                <Col xs={3}><Aside></Aside></Col>
            </Row>
            <Row>
                <Col><Footer></Footer></Col>
            </Row>
        </Container>
    )
}
export default Layout;