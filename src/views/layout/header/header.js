/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import "./header.css";
import axios from "../../../configurations/axiosConfig";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router";

function Header(props) {
    // eslint-disable-next-line no-unused-vars
    const [match, setMatch] = useState(useRouteMatch());
    const [hiddenDro, setHiddenDro] = useState(false);
    const [info, setInfo] = useState(
        JSON.parse(localStorage.getItem("userInformation"))
    );
    const history = useHistory();

    const jsSidenav = useRef(null);
    const [isSidenav, setIsSidenav] = useState(false);
    useEffect(() => {});

    function handleClickLogout(event) {
        axios
        .post("/users/logout")
        .then((result) => {
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
    function sidenavToggle(isShow) {
        console.log(jsSidenav.current)
      setIsSidenav(isShow)
    // var jsSidenav  = document.getElementById("jsSidenav");
    // isShow ? jsSidenav.style.width = "100%" : jsSidenav.style.width = "0";
    }

  return (
    <React.Fragment>
    <div className="page-header page-header--hover-delay">
        
        <div className="header-wrapper header-wrapper--zoom-in-image">
            <div className="header-content-wrapper">
                <h1 className="header-content-wrapper__title">TRUST</h1>
                <div className="header-content-wrapper__txt">
                    Muốn trưởng thành, bạn phải cần biết đi qua những gian khó cuộc đời.
                    <br />
                    Muốn thành công, bạn cần biết vượt lên chính mình, để được những gì
                    xứng đáng.
                </div>
            </div>
            
            {/* toggle sidebar  */}
            <div className="header-wrapper__bar-icon u--hover-mouse" onClick={() => {sidenavToggle(true)}}></div>
        </div>
        <div className="page-header-picture">
            <picture>
                <img alt="img header" className="page-header_image " src="/avatar-header.jpg" width="100%" height="100%" ></img>
            </picture>
        </div>
    </div>
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">X X X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-custom mr-auto">
            <Link to={`${match.url}/home`}>Home</Link>
            <Link to={`${match.url}/about-me`}>About Me</Link>
            <Link to={`${match.url}/blog`}>Blog</Link>
            <Dropdown>
              <Dropdown.Toggle as="div" variant="success" id="dropdown-basic">
                <img alt="img" src="/person.svg" className="nav-avatar" />
                <span className="header-user">{info.user.name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link
                  className="dropdown-item"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setHiddenDro(true);
                  }}
                  to={`${match.url}/profile`}
                >
                  Profile
                </Link>
                <Dropdown.Item onClick={handleClickLogout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
        <div id="jsSidenav" className={isSidenav? 'has-side-nav--show side-nav side-nav--modify' : 'w-0 side-nav side-nav--modify'} ref={jsSidenav}>
            <div className="side-nav-header side-nav-header--modify">
              <a className="side-nav-header_close" onClick={() => {sidenavToggle(false)}}></a>
            </div>
            <div className="side-nav-menu">
              <div className="side-nav-menu-item side-nav-menu-item--modifier">
                  <a className="side-nav-menu-item__link" href={`${match.url}/home`}>Home</a>
              </div>
              <div className="side-nav-menu-item side-nav-menu-item--modifier">
                  <a className="side-nav-menu-item__link" href={`${match.url}/about-me`}>About Me</a>
              </div>
              <div className="side-nav-menu-item side-nav-menu-item--modifier">
                  <a className="side-nav-menu-item__link" href={`${match.url}/blog`}>Blog</a>
              </div>
              <div className="side-nav-menu-item side-nav-menu-item--modifier">
                  <a className="side-nav-menu-item__link" href="#">More</a>
              </div>
            </div>

           <div className="side-nav-sub-menu">
            <div className="side-nav-sub-menu side-nav-sub-menu--modifier">
                  <a className="side-nav-menu-item__link" 
                   onClick={() => {
                    setHiddenDro(true);
                  }}
                  href={`${match.url}/profile`}>Profile</a>
              </div>
              <div className="side-nav-sub-menu side-nav-sub-menu--modifier">
                  <a className="side-nav-menu-item__link" onClick={handleClickLogout}>Logout</a>
              </div>
           </div>
        </div>
    </React.Fragment>
  );
}

export default Header;
