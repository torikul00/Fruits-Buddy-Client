import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1> Login Here</h1>
                <input name='email' type="text" placeholder='Email' required />
                <input name='password' type="text" placeholder='Password' required />
                <button className='login-button' type='submit'>Login</button>
                <p>New user ? <Link className='form-link' to='/signUp'>SignUp </Link> </p>
                <div className="horizontal-line">
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button className='google-button' type='submit'><FcGoogle className='google-icon' />  Google</button>
            </form>
        </div>
    );
};

export default Login;