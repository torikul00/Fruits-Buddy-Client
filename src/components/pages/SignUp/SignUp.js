import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const [email,setEmail] = useState({value:'',error:''})
   const [password,setPassword] = useState({value:'',error:''})
   const [confirmPassword,setConfirmPassword] = useState({value:'',error:''})

    const handleEmail = email => {

        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail({ value: email, error: '' })
        }
        else {
            setEmail({ value: '', error: 'Invalid Email' })
        }
    }
    
    const handlePassword = password => {

        if (password.length < 6) {
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
    
    const handleSubmit = e => {
        e.preventDefault()
       

    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1> SignUp Here</h1>
                <input onBlur={(e)=>handleEmail(e.target.value)} type="text" placeholder='Email' required />
                <input onBlur={(e)=>handlePassword(e.target.value)} type="text" placeholder='Password' required />
                <input onBlur={(e)=>handleConfirmPassword(e.target.value)} type="text" placeholder='Confirm Password' required />
                <button className='form-button' type='submit'>SignUp</button>
                <p>Already Registered ? <Link className='form-link' to='/login'>Login </Link> </p>
                <div className="horizontal-line">
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button className='form-button' type='submit'>Sign in With Google</button>
            </form>
        </div>
    );
};

export default SignUp;