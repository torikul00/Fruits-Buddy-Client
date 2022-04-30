import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [email,setEmail] = useState({value:'',error:''})
    const [password,setPassword] = useState({value:'',error:''})

    const handleEmail = email => {

        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail({ value: email, error: '' })
        }
       else if (email === '') {
            setEmail({ value:'',error:'Email required'})
        }
        else {
            setEmail({ value: '', error: 'Please check your email' })
        }
    }
    const handlePassword = password => {
        if (password === '') {
            setPassword({ value:'',error:'Password required'})
        }
        else if (password.length < 6) {
            setPassword({ value: '', error: 'Password is too short ' })
        }
        else { setPassword({ value: password, error: '' }) }
    }

    const handleSubmit = e => {
        e.preventDefault()
        

    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1> Login Here</h1>
                <input onBlur={(e)=>handleEmail(e.target.value)} type="text" placeholder='Email' required />
                <input onBlur={(e)=>handlePassword(e.target.value)} type="text" placeholder='Password' required />
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