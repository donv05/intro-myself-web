import React, { } from 'react'
import './main.css'
import 'antd/dist/antd.css';
import Home from './home/home'
import AboutMe from './AboutMe/AboutMe'
import NoMatch from '../noMatch/noMatch'
import Blog from './blog/blog'
import Profile from './profile/profile'
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

function Main() {

    const match = useRouteMatch();

    return (
        <div className="content-layout xl-main">
            <Switch>
                <Route path={match.path +'/home'}>
                    <Home></Home>
                </Route>
                <Route path={match.path +'/about-me'}>
                    <AboutMe></AboutMe>
                </Route>
                <Route path={match.path +'/blog'}>
                    <Blog></Blog>
                </Route>
                <Route path={match.path +'/profile'}>
                    <Profile></Profile>
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;
