import react from 'react'
import logo from '../logo.png'
import './style.css'
import {Badge,Container,Col,Row,Media} from 'react-bootstrap';

function Header() {
    return (
        <Container className="container">
            <Row className=" block-example border border-dark">
                <Col sm={2}>
                    <Media>
                        <img
                            
                            height={65}
                            width= {65}
                            src={logo}
                            alt="Generic placeholder"
                        />
                    </Media>
                </Col>
                <Col sm={10}><p class="h1">Malaviya National Institute of technology</p></Col>
            </Row>
        </Container>
        
    )
}

export default Header
