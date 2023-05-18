import React from "react";
import "../style.css";
import "./InputLayout.css"

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BackgroundImage from "../pictures/Circles.svg";

import NavBar from "../components/NavBars/Input_NavBar";
import { RegistrationForm } from "../components/Form";

const Registration = () => {
    return (
        <>
            <div className="background">
                <img alt="A bunch of circles" src={BackgroundImage} style={{position: "absolute", width: "100%", height: "100%", zIndex: -1}}/>
                <Container style={{margin: "0px", padding: "0px", maxWidth: "100%", height: "100%"}}>
                    <Row style={{height: "100vh"}}>
                        <Col md={9} style={{padding: "0px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <RegistrationForm />
                        </Col>
                        <Col md={3} style={{ padding: "0px", margin: "0px"}}>
                            <NavBar text="Already have an account?" type="Registration"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Registration;