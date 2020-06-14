import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './header.css'
import axios from '../../../configurations/axiosConfig'

export default class Header extends Component {

    constructor(props) {
        super(props);
    }
    
    handleClickLogout = (event) => {
        console.log(this.props.props)
        axios.post('/users/logout')
            .then((result) => {
                if (result && result.data) {
                    console.log(result);
                    localStorage.removeItem('userInformation')
                    this.props.props.history.push('/')
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <h1>My Website</h1>
                    <p>Resize the browser window to see the effect.</p>
                </div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">X X X</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.handleClickLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
