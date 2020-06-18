import React, { Component } from 'react'
import './main.css'
import 'antd/dist/antd.css';
import Home from './home/home'
import CV from './cv/cv'
import NoMatch from '../noMatch/noMatch'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
function Main() {

    let match = useRouteMatch();

    return (
        <div className="content-layout">
            <Switch>
                <Route path={match.path +'/home'}>
                    <Home></Home>
                </Route>
                <Route path={match.path +'/cv'}>
                    <CV></CV>
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;
