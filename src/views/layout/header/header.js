import React, { useEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './header.css'
import axios from '../../../configurations/axiosConfig'
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch
  } from "react-router-dom";
function Header(props) {

    const [match, setMatch] = useState(useRouteMatch());

    useEffect(() => {
        // console.log(match)
    });
    function handleClickLogout(event) {
        axios.post('/users/logout')
            .then((result) => {
                if (result && result.data) {
                    localStorage.removeItem('userInformation')
                    props.props.history.push('/')
                }
            })
            .catch(function (error) {
            })
            .finally(function () {
                // always executed
            });
    }
    return (
        <React.Fragment>
            <div className="Header">
                <h1>My Website</h1>
                <p>You think you make it.</p>
            </div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">X X X</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={`${match.url}/Home`}>Home</Link>
                        <Link to={`${match.url}/about-me`}>About Me</Link>
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleClickLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}


export default Header