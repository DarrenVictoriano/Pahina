import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Typewriter from 'typewriter-effect';
import './navbar.css';
import { PostContext } from '../../providers/postContext';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

    const [expanded, setExpanded] = useState(false);
    const { mobileCheckState, accountInfoState } = useContext(PostContext);
    const isMobile = mobileCheckState;
    const [accountInfo, setAccountInfo] = accountInfoState;

    // TODO: componentDidMount hook
    useEffect(() => {

    });

    const handleLogout = () => {
        // reset to defaul value so we logout
        setAccountInfo({
            "token": "",
            "_id": "",
            "username": "",
            "posts": [{
                "_id": "",
                "title": "",
                "overview": "",
                "body": "",
                "date_created": ""
            }]
        });

        // this is for mobile view
        setExpanded(false);
    }

    return (
        <Navbar fixed="top" expanded={expanded} expand="lg" className="bg-navy" variant={(isMobile ? "dark" : "text-slate")}>
            <Navbar.Brand className="brand-name">
                <NavLink
                    exact to="/deets"
                    className="brand-link"
                    activeClassName="active"
                    onClick={() => setExpanded(false)}>
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
                </NavLink>

            </Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav className="nav-link ">
                    <NavLink
                        exact to="/"
                        className="px-3 nav-link"
                        activeClassName="active"
                        onClick={() => setExpanded(false)}>
                        Home
                    </NavLink>

                    <NavLink
                        exact to="/portfolio"
                        className="px-3 nav-link"
                        activeClassName="active"
                        onClick={() => setExpanded(false)}>
                        Portfolio
                    </NavLink>

                    <NavLink
                        exact to="/blog"
                        className="px-3 nav-link"
                        activeClassName="active"
                        onClick={() => setExpanded(false)}>
                        Blog
                    </NavLink>

                    {accountInfo.token &&
                        <NavLink
                            exact to="/postform"
                            className="px-3 nav-link"
                            activeClassName="active"
                            onClick={() => setExpanded(false)}>
                            Post Form
                        </NavLink>
                    }

                    <NavLink
                        exact to="/resume/VR040.pdf"
                        className="px-3 nav-link"
                        target="_blank"
                        onClick={() => setExpanded(false)}>
                        Resume
                    </NavLink>

                    {accountInfo.token &&
                        <NavLink
                            exact to="/"
                            className="px-3 nav-link"
                            activeClassName="active"
                            onClick={handleLogout}>
                            <i className="fas fa-lock"></i>
                        </NavLink>
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default NavBar;