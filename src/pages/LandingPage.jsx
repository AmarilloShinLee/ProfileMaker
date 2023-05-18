import React from "react";
import "../style.css";
import "./LandingPage.css";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/NavBars/LandingPage_NavBar";
import {DesignButton} from "../components/Button";

const LandingPage = () => {
    return (
        <>
            <div className="landingPage">
                <NavBar />
                <Container className="callingCard">
                    <Row>
                        <Col md={6}>
                            <h1>Profile Maker</h1>
                            <p>Whether you're a freelancer, entrepreneur, or job seeker, your online profile can make all the difference. Use Profile Maker to create a polished and compelling profile that gets noticed.</p>
                            <p>Start today and take your career to the next level!</p>
                            
                            <Container style={{padding: "0px"}}>
                                <Row>
                                    <Col xl={4} style={{padding: "0px"}}>
                                        <DesignButton variant="primary" href="/Login" size="lg" text="SIGN IN" />
                                    </Col>
                                    <Col xl={4} style={{padding: "0px"}}>
                                        <DesignButton  variant="secondary" href="/Registration" size="lg" text="SIGN UP" />
                                    </Col>
                                </Row>
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LandingPage;