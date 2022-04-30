import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
const SignUp = () => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = email => {

        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail({ value: email, error: '' })
        }
        else if (email === '') {
            setEmail({ value: '', error: 'Email required' })
        }
        else {
            setEmail({ value: '', error: 'Invalid Email' })
        }
    }

    const handlePassword = password => {
        if (password === '') {
            setPassword({ value: '', error: 'Password required' })
        }
        else if (password.length < 6) {
            setPassword({ value: '', error: 'Password is too short ' })
        }
        else { setPassword({ value: password, error: '' }) }
    }
    const handleConfirmPassword = (confirmpassword) => {
        if (password.value === confirmpassword) {
            setConfirmPassword({ value: confirmPassword, error: '' })
        }
        else {
            setConfirmPassword({ value: '', error: 'Password does not Match' })
        }
    }
    if (loading) {
        return <div className='spinner'>
             <Spinner  animation="border" variant="primary" />
                  </div>
    }

    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email.value, password.value)
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1> SignUp Here</h1>

                {
                    email?.error && <small style={{ color: 'red' }}>{email.error}</small>
                }
                <input onBlur={(e) => handleEmail(e.target.value)} type="text" placeholder='Email' required />
                {
                    password?.error && <small style={{ color: 'red' }}>{password.error}</small>
                }
                <input onBlur={(e) => handlePassword(e.target.value)} type="text" placeholder='Password' required />
                {
                    confirmPassword?.error && <small style={{ color: 'red' }}>{confirmPassword.error}</small>
                }
                <input onBlur={(e) => handleConfirmPassword(e.target.value)} type="text" placeholder='Confirm Password' required />
                <button className='login-button' type='submit'>SignUp</button>
                <p>Already Registered ? <Link className='form-link' to='/login'>Login </Link> </p>
                <div className="horizontal-line">
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button className='google-button' type='submit'>  <FcGoogle className='google-icon' /> Google</button>
            </form>
        </div>
    );
};

export default SignUp;