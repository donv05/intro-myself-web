/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import "./header.scss";
import axios from "../../../configurations/axiosConfig";
// eslint-disable-next-line no-unused-vars
import { useHistory } from "react-router";

function Header() {
    // eslint-disable-next-line no-unused-vars
    // const [match, setMatch] = useState(useRouteMatch());
    // hot fix
    const match = {
      url: './'
    }
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
            <div className="header-wrapper__bar-icon" onClick={() => {sidenavToggle(true)}}></div>
        </div>
        <div className="page-header-picture">
            {/* <picture>
                <img alt="img header" className="page-header-picture__content" src="/header-img.jpg" width="100%" height="100%" ></img>
            </picture> */}
            <div className="page-header-picture__content"></div>
        </div>
    </div>
    <div id="jsSidenav" className={isSidenav? 'side-nav--show side-nav side-nav--modify' : 'w-0 side-nav side-nav--modify'} ref={jsSidenav}>
        <div className="side-nav__header side-nav__header--modify">
            <a className="side-nav__header-close" onClick={() => {sidenavToggle(false)}}></a>
        </div>
        <div className="side-nav__menu nav-menu">
            <div className="nav-menu__item nav-menu__item--modifier">
                <a className="nav-menu__link" href={`${match.url}/home`}>Home</a>
            </div>
            <div className="nav-menu__item nav-menu__item--modifier">
                <a className="nav-menu__link" href={`${match.url}/about-me`}>About Me</a>
            </div>
            <div className="nav-menu__item nav-menu__item--modifier">
                <a className="nav-menu__link" href={`${match.url}/blog`}>Blog</a>
            </div>
            <div className="nav-menu__item nav-menu__item--modifier">
                <a className="nav-menu__link" href="#">More</a>
            </div>
        </div>

        <div className="nav-sub-menu">
        <div className="nav-sub-menu nav-sub-menu--modifier">
                <a className="nav-sub-menu__link" 
                onClick={() => {
                setHiddenDro(true);
                }}
                href={`${match.url}/profile`}>Profile</a>
            </div>
            <div className="nav-sub-menu nav-sub-menu--modifier">
                <a className="nav-sub-menu__link" onClick={handleClickLogout}>Logout</a>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default Header;
