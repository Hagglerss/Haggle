import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FrameComp = () => {

    return(
        <Container>
            <Row>
                <Col>첫 번째 열</Col>    
                <Col>두 번째 열</Col>    
            </Row>            
        </Container>
    );
}

export default FrameComp;