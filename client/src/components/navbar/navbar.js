import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typewriter from 'typewriter-effect';
import './navbar.css';

const NavBar = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="brand-name text-light" href="#home">
                <h1 className="brand-h1">
                    <Typewriter
                        options={{
                            strings: ['Darren', 'Victoriano', "へ‿(ツ)‿ㄏ", "Darren Victoriano"],
                            autoStart: true,
                            loop: true,
                            pauseFor: 100,
                            changeDeleteSpeed: 1,
                            changeDelay: 1
                        }}
                    />
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link className="px-3" href="#home">Home</Nav.Link>
                    <Nav.Link className="px-3" href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link className="px-3" href="#post">Posts</Nav.Link>
                    <Nav.Link className="px-3" href="#resume">Resume</Nav.Link>
                    <Nav.Link className="px-3" href="#deets"><i class="fas fa-lock"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;