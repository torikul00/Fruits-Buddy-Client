import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import './ForgotPassword.css'

const ForgotPassword = () => {
    const [error,setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        if (email) {
            sendPasswordResetEmail(auth, email)
              .then(() => {
                  toast.success('verification sent')
                  setError('')
              })
              .catch(() => {
               
                setError('User not found')
              });
      }

    }

    return (
        <div className='forgot-container'>

            <form  onSubmit={handleSubmit} className='forgot-info'>
                <h2>Enter Your Email</h2>
                <input autoComplete='off' type="email" name='email' />
                {
                    error && <small style={{color:'red'}}>{ error}</small>
                }
                <button className='reset-button' type='submit'>Reset password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;