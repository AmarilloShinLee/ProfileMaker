import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from "../../pictures/Logo.svg";
import "./LandingPage_NavBar.css"

const NavBar = () => {
    return(
        <Navbar bg="default">
            <Container>
                <Navbar.Brand>
                    <img 
                        src={Logo}
                        width="81px"
                        height="81px"
                        />
                    <h2>Profile Maker</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;