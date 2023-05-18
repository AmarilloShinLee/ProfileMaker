import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../../pictures/Logo.svg";
import {DesignButton} from "../Button";
import "./Input_NavBar.css"

function ToLoginRegistration({text, variant}) {
    if (variant === "Login") {
        return (
            <>
                <p>{text}</p>
                <DesignButton href="/Registration" variant="secondary" size="lg" text="SIGN UP" />  
            </>
        )
    }

    return (
        <>
            <p>{text}</p>
            <DesignButton href="/Login" variant="secondary" size="lg" text="SIGN IN" />
        </>
    )
}

const NavBar = ({text="text here", type="Login"}) => {
    return(
        <Navbar style={{height: "100vh"}} bg="default">
            <Container>
                <Navbar.Brand style={{display: "flex", flexDirection: "column", gap: "27px"}}>
                    <img 
                        src={Logo}
                        width="168px"
                        height="168px"
                        />
                    <h2>Profile Maker</h2>

                    <ToLoginRegistration text={text} variant={type} />

                    {/* <p>Already have an account?</p>
                    <DesignButton href="/Login" variant="secondary" size="lg" text="SIGN IN" /> */}

                    {/* Don't have an account? */}

                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;