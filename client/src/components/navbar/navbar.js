import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typewriter from 'typewriter-effect';
import './navbar.css';
import { PostContext } from '../../providers/postContext';

const NavBar = (props) => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;


    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-navy" variant={(isMobile ? "dark" : "text-slate")}>
            <Navbar.Brand className="brand-name" href="/post-form">
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
                <Nav className="nav-link">
                    <Nav.Link className="px-3" href="/">Home</Nav.Link>

                    {/* <Link to="/portfolio" className="link-style"> */}
                    <Nav.Link className="px-3 nav-link" href="/portfolio">Portfolio</Nav.Link>
                    {/* </Link> */}

                    <Nav.Link className="px-3 nav-link" href="/posts">Posts</Nav.Link>

                    <Nav.Link className="px-3 nav-link" target="_blank" href="/resume/VR040.pdf">Resume</Nav.Link>

                    <Nav.Link className="px-3 nav-link" href="/deets">
                        <i className="fas fa-lock"></i>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default NavBar;