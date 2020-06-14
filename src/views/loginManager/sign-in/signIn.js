import React from 'react';
import './signIn.css';
import axios from '../../../configurations/axiosConfig'



export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        const userInformation = JSON.parse(localStorage.getItem('userInformation'))
        if (userInformation) {
            this.props.history.push('/web/dashboard')
        }
        this.state = {
            email: '',
            password: ''
        };
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount() {
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        axios.post('/users/login', { email: this.state.email, password: this.state.password })
            .then((result) => {
                if (result) {
                    this.setState({
                        isLoaded: true,
                        information: result
                    });
                    localStorage.setItem('userInformation', JSON.stringify(result.data));
                    localStorage.setItem('token', result.data.token);
                    localStorage.setItem('refresh_token', result.data.token);
                    const AUTH_TOKEN =  'Bearer ' + result.data.token
                    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                    this.props.history.push('/web/dashboard')
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }

    render() {
        return (
            <div className="Container">
                <div className="login-layout Content w-30rem">
                    <div className="title">
                        <h1>Sign In</h1>
                    </div>
                    <form >
                        <div className="group-control mx-2 mt-65">
                            <label htmlFor="uname">Username <span>*</span></label>
                            <input type="text" placeholder="Enter Username" name="uname" value={this.state.email} onChange={this.handleChangeEmail} />
                        </div>
                        <div className="group-control mb-4 mx-2">
                            <label htmlFor="psw">Password <span>*</span></label>
                            <input type="password" placeholder="Enter Password" name="psw" value={this.state.password} onChange={this.handleChangePassword} ></input>
                        </div>
                        <div className="group-control mx-2">
                            <button type="button" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

