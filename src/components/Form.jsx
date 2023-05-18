import React from "react";
import "../style.css";

import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {DesignButton} from "./Button";

const LoginForm = () => {
    const loginElements = [
        { id: "Email", type: "email", placeholder: "Email" },
        { id: "Password", type: "password", placeholder: "Password" },
    ]

    return(
        <Form>
            <Form.Group style={{display: "flex", justifyContent: "center", margin: "0px", padding: "0px"}}>
                <Form.Label style={{padding: "0px", margin: "0px"}}>
                    <h2 style={{padding: "0px", margin: "0px"}}>LOGIN</h2>
                </Form.Label>
            </Form.Group>

            {loginElements.map((element => {
                return (
                    <Form.Group>
                        <Form.Control id={element.id} type={element.type} placeholder={element.placeholder}/>
                    </Form.Group>
                );
            }))}

            <Form.Group style={{display: "flex", justifyContent: "center"}}>
                <DesignButton type="submit" variant="primary" text="SIGN IN" />
            </Form.Group>
        </Form>
    );
};

const RegistrationForm = () => {
    const loginElements = [
        { id: "Firstname", type: "text", placeholder: "First name" },
        { id: "Lastname", type: "text", placeholder: "Last name" },
        { id: "Email", type: "email", placeholder: "Email" },
        { id: "Password", type: "password", placeholder: "Password" },
        { id: "ConfirmPassword", type: "password", placeholder: "Confirm Password" },
    ]

    return(
        <Form>
            <Form.Group style={{display: "flex", justifyContent: "center", margin: "0px", padding: "0px"}}>
                <Form.Label style={{padding: "0px", margin: "0px"}}>
                    <h2 style={{padding: "0px", margin: "0px"}}>REGISTRATION</h2>
                </Form.Label>
            </Form.Group>

            {loginElements.map((element => {
                return (
                    <Form.Group>
                        <Form.Control id={element.id} type={element.type} placeholder={element.placeholder}/>
                    </Form.Group>
                );
            }))}

            <Form.Group style={{display: "flex", justifyContent: "center"}}>
                <DesignButton type="submit" variant="primary" text="NEXT" />
            </Form.Group>
        </Form>
    );
};

export {LoginForm, RegistrationForm}