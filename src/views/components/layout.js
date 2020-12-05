import React from 'react';
import './layout.css';
import Header from './header/header'
import Footer from './footer/footer'
import Main from './main/main'
import axios from '../../configurations/axiosConfig'
import  { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            userInformation: JSON.parse(localStorage.getItem('userInformation'))
        };
        this.events = [
            'load',
            'mousemove',
            'mousedown',
            'click',
            'scroll',
            'keypress'
        ]
        this.warn = this.warn.bind(this);
        this.logout = this.logout.bind(this);
        this.resetTimeout = this.resetTimeout.bind(this);
        for(let i in this.events) {
            window.addEventListener(this.events[i], this.resetTimeout)
        }
        // debugger
        this.setTimeout();
    }
    
    
    warn() {
    }

    clearTimeout() {
        if (this.warnTimeout) clearTimeout(this.warnTimeout);
    
        if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
    }

    setTimeout() {
        this.warnTimeout = setTimeout(this.warn, 16 * 1000);
        this.logoutTimeout = setTimeout(this.logout, 60 * 1000);
    }

    resetTimeout() {
        this.clearTimeout();
        this.setTimeout();
    }

    logout() {
        this.setState({ logginStatus: false });
    }
    
    handleClickLogout = (event) => {
        axios.post('/users/logout')
            .then((result) => {
                if (result) {
                    localStorage.removeItem('userInformation')
                    this.props.history.push('/')
                }
            })
            .catch(function (error) {
                toast.error("Error!")
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        if(this.state.userInformation) {
            return (
                <React.Fragment>
                    <Header props={this.props}></Header>
                    <Main></Main>
                    <Footer></Footer>
                </React.Fragment>
            );
        } else  {
            return <Redirect to={'/login'} />
        }
    }
}

