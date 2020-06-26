/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import "./header.css";
import axios from "../../../configurations/axiosConfig";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router"

function Header(props) {
  // eslint-disable-next-line no-unused-vars
  const [match, setMatch] = useState(useRouteMatch());
  const [hiddenDro, setHiddenDro] = useState(false);
  const [info, setInfo] = useState(
    JSON.parse(localStorage.getItem("userInformation"))
  );
  const history = useHistory()

  useEffect(() => {
    
  });

  function handleClickLogout(event) {
    axios
      .post("/users/logout")
      .then(result => {
        if (result) {
          localStorage.removeItem("userInformation");
          history.push("/login");
        }
      })
      .catch(function (error) {})
      .finally(function () {
        // always executed
      });
  }
  return (
    <React.Fragment>
      <div className="header">
        <div className="txt-inner">
          <h1>Trust</h1>
          <p>
            Muốn trưởng thành, bạn phải cần biết đi qua những gian khó cuộc đời.
            <br />
            Muốn thành công, bạn cần biết vượt lên chính mình, để được những gì
            xứng đáng.
          </p>
        </div>
      </div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">X X X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={`${match.url}/home`}>Home</Link>
            <Link to={`${match.url}/about-me`}>About Me</Link>
            <Link to={`${match.url}/blog`}>Blog</Link>
            <Dropdown>
                <Dropdown.Toggle as="div" variant="success" id="dropdown-basic">
                <img alt="img" src="/person_pin.svg" className="nav-avatar" />
                <span>{info.user.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Link className="dropdown-item" data-dismiss="modal" aria-label="Close" onClick={()=>{setHiddenDro(true)}} to={`${match.url}/profile`}>Profile</Link>
                    <Dropdown.Item onClick={handleClickLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                {/* <div className="dropdown">
                  <div className="dropdown-toggle" variant="success" id="dropdown-basic" onClick={()=>{setHiddenDro(true)}}>
                    <img alt="img" src="/person_pin.svg" className="nav-avatar"/>
                      <span>Nhi</span>
                  </div>
                  <div className={hiddenDro ? "show": "hidden"}>
                    <Link className="dropdown-item" onClick={()=>{setHiddenDro(false)}} to={`${match.url}/profile`}>Profile</Link>
                   </div>
                </div> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
