import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typewriter from 'typewriter-effect';
import './navbar.css';

const NavBar = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="type-width" href="#home">
                <Typewriter
                    options={{
                        strings: ['Darren', 'Victoriano', "へ‿(ツ)‿ㄏ"],
                        autoStart: true,
                        loop: true,
                        pauseFor: 100,
                        changeDeleteSpeed: 1,
                        changeDelay: 1
                    }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#post">Posts</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets"><i class="fas fa-lock"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;