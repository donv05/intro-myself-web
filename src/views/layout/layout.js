import React from 'react';
import './layout.css';
import Header from './header/header'
import Footer from './footer/footer'
import Main from './main/main'
import axios from '../../configurations/axiosConfig'
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        const userInformation = JSON.parse(localStorage.getItem('userInformation'))
        if (!userInformation) {
            this.props.history.push('/')
        }
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
        this.setTimeout();
    }

    warn() {
        console.log("You will be logged out automatically in 1 minute.");
    }
    clearTimeout() {
        if (this.warnTimeout) clearTimeout(this.warnTimeout);
    
        if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
    }

    setTimeout() {
        // console.log('Set timeout')
        this.warnTimeout = setTimeout(this.warn, 16 * 1000);
        this.logoutTimeout = setTimeout(this.logout, 60 * 1000);
    }

    resetTimeout() {
        // console.log('reset')
        this.clearTimeout();
        this.setTimeout();
    }

    logout() {
        // Send a logout request to the API
        console.log("Sending a logout request to the API...");
        this.setState({ logginStatus: false });
        // this.destroy(); // Cleanup
    }

    componentDidMount() {
        axios.get('/users')
            .then((result) => {
                if (result) {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    
    handleClickLogout = (event) => {
        console.log('logOut')
        axios.post('/users/logout')
            .then((result) => {
                if (result) {
                    localStorage.removeItem('userInformation')
                    this.props.history.push('/')
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
            <React.Fragment>
                <Header props={this.props}></Header>
                <Main></Main>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

