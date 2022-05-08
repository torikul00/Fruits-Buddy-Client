import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { sendEmailVerification } from 'firebase/auth';
import useSocialLogin from '../../hooks/useSocialLogin';
import Spinner from '../../Spinner/Spinner';
const SignUp = () => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const { signInWithGoogle } = useSocialLogin()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const userEmail = email.value
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
        return <Spinner />

    }
    if (user) {
        navigate(from, { replace: true });


        toast.success('SignUp Successful', { style: { backgroundColor: 'black', color: 'white' }, id: 'signup' })

    }
    const handleSubmit = e => {

        e.preventDefault()
        if (email.value && password.value && confirmPassword.value) {

            //    Creating a new user
            createUserWithEmailAndPassword(email.value, password.value)
                .then(() => {
                    // sent email verification 
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            alert('Email verification sent')
                        });

                })
                .catch(() => {
                    toast.error('something went wrong')
                })



        }


    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>

                <h1> SignUp Here</h1>

                {
                    email?.error && <small style={{ color: 'red' }}>{email.error}</small>
                }
                <input onBlur={(e) => handleEmail(e.target.value)} type="email" placeholder='Email' required />
                {
                    password?.error && <small style={{ color: 'red' }}>{password.error}</small>
                }
                <input onBlur={(e) => handlePassword(e.target.value)} type="password" placeholder='Password' required />
                {
                    confirmPassword?.error && <small style={{ color: 'red' }}>{confirmPassword.error}</small>
                }
                <input onBlur={(e) => handleConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' required />
                {
                    error && <small style={{ color: 'red' }}>Email already exist</small>
                }
                <button className='login-button' type='submit'>SignUp</button>
                <p>Already Registered ? <Link className='form-link' to='/login'>Login </Link> </p>
                <div className="horizontal-line">
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button onClick={signInWithGoogle} className='google-button'>  <FcGoogle className='google-icon' /> Google</button>
            </form>
        </div>
    );
};

export default SignUp;