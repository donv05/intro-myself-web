import React from 'react';
import './signin.scss';
import axios from '../../../configurations/axiosConfig'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

function SignIn(props) {

    const { register, handleSubmit, errors, unregister} = useForm(
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
                    setInformation(result)
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

    function loginWithGuest (data){
        unregister('username');
        unregister('psw');
        data = {
            username: 'guest@gmail.com',
            psw: '1234567'
        }
        axios.post('/users/login', { email: data.username, password: data.psw })
            .then((result) => {
                if (result) {
                    setInformation(result)
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

    function setInformation(data) {
        localStorage.setItem('userInformation', JSON.stringify(data));
        localStorage.setItem('token', data.token);
        localStorage.setItem('refresh_token', data.token);
        const AUTH_TOKEN =  'Bearer ' + data.token
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        props.history.push('/web/blog')
    }

    if(!JSON.parse(localStorage.getItem('userInformation'))) {
        return (
            <div className="login-container login-container--modify">
                <div className="login-container__content">
                    <div className="login-container__title">
                        <h1>Sign in</h1>
                    </div>
                    <form className="form-group">
                        <div className="group-control">
                            <label className="group-control__title" htmlFor="username">Username <span className="group-control__asterisks">*</span></label>
                            <input type="text" placeholder="Enter Username" name="username" ref={register({ required: true })} />
                            <p className="group-control__error-ms">{errors.username && 'Username is required'}</p>
                        </div>

                        <div className="group-control">
                            <label className="group-control__title" htmlFor="psw">Password <span className="group-control__asterisks">*</span></label>
                            <input type="password" placeholder="Enter Password" name="psw" ref={register({ required: true })} />
                            <p className="group-control__error-ms">{errors.psw && 'Password is required'}</p>
                        </div>

                        <div className="group-control">
                            <button  className="btn btn--primary-gradient" type="submit" onClick={handleSubmit(login)}>Login</button>
                            {/* <button className="btn u-bnt-secondary-gradient" type="button" onClick={onSubmit}>Guest</button> */}
                            <button className="btn btn--secondary-gradient" type="button" onClick={loginWithGuest}>Guest</button>
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