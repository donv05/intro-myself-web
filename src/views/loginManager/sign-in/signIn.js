import React from 'react';
import './signIn.css';
import axios from '../../../configurations/axiosConfig'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router"
import { Redirect } from 'react-router-dom';

function SignIn(props) {

    const { register, handleSubmit, errors } = useForm(
        {
          defaultValues: {
            username: '',
            psw: '',
          }
        }
    );

    function login (data){
        axios.post('/users/login', { email: data.username, password: data.psw })
            .then((result) => {
                if (result) {
                    localStorage.setItem('userInformation', JSON.stringify(result));
                    localStorage.setItem('token', result.token);
                    localStorage.setItem('refresh_token', result.token);
                    const AUTH_TOKEN =  'Bearer ' + result.token
                    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                    props.history.push('/web/home')
                }
            })
            .catch( (error) => {
                if(error && error.data){
                    toast.error(error.data.message)
                }
            })
            .finally(function () {
            });
    }

    if(!JSON.parse(localStorage.getItem('userInformation'))) {
        return (
            <div className="container-login">
                <div className="login-layout Content w-30rem">
                    <div className="title">
                        <h1>Sign in</h1>
                    </div>
                    <form >
                        <div className="group-control mx-2 mt-65">
                            <label htmlFor="username">Username <span>*</span></label>
                            <input type="text" placeholder="Enter Username" name="username" ref={register({ required: true })} />
                            <p className="text-danger mt-1">{errors.username && 'Username is required'}</p>
                        </div>
                        <div className="group-control mb-4 mx-2">
                            <label htmlFor="psw">Password <span>*</span></label>
                            <input type="password" placeholder="Enter Password" name="psw" ref={register({ required: true })} />
                            <p className="text-danger mt-1">{errors.psw && 'Password is required'}</p>
                        </div>
                        <div className="group-control mx-2">
                            <button type="button" onClick={handleSubmit(login)}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }else {
        return (<Redirect to={'web/home'}></Redirect>)
    }
    
}

export default SignIn;