import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typewriter from 'typewriter-effect';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/post-form">
                <Navbar.Brand className="brand-name text-light">
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
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Link to="/" className="link-style">
                        <div className="px-3 nav-link">Home</div>
                    </Link>

                    <Link to="/portfolio" className="link-style">
                        <div className="px-3 nav-link">Portfolio</div>
                    </Link>

                    <Link to="/posts" className="link-style">
                        <div className="px-3 nav-link">Posts</div>
                    </Link>

                    <Link to="/resume" className="link-style">
                        <div className="px-3 nav-link">Resume</div>
                    </Link>

                    <Link to="/deets" className="link-style">
                        <div className="px-3 nav-link"><i className="fas fa-lock"></i></div>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;