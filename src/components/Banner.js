import React from 'react'
import logo from '../assets/images/mnit_logo.png'
import styles from '../styles/styles.module.css'
import { Container, Col, Row } from 'react-bootstrap';



function Banner() {
    return (
        <Container className={`container ${styles['banner-container']} d-none d-sm-block`}>
            <Row className={`${styles.banner} justify-content-between`}>
                <img src={logo} className={`col-auto ${styles['banner-logo']}`} alt='MNIT'></img>
                <Col xs="auto" className={`${styles['banner-name']}`}>
                    <b>Malaviya National Institute of Technology Jaipur</b>
                    <br />
                    मालवीय राष्ट्रीय प्रौद्योगिकी संस्थान जयपुर
                </Col>
            </Row>
        </Container >

    )
}

export default Banner
