import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";

let CvNavbar = () => {
    return (

        <Navbar className="navbar-custom" variant="light">
            <Navbar.Brand className="navbar-brand mx-auto" href="#home" style={{color:"rgba(159, 90, 253, 1 )", fontWeight: "bolder", fontSize: "larger"}}>
                My Portfolio 
            </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#features">
            </Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default CvNavbar;