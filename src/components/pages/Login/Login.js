
import { Link, useNavigate } from 'react-router-dom';
import './Form.css'
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import useSocialLogin from '../../hooks/useSocialLogin';
const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {signInWithGoogle}  = useSocialLogin()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Login succesful')
                navigate('/')
            })
            .catch(() => setError('Password or Email incorrect'))
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h1> Login Here</h1>
                <input name='email' type="email" placeholder='Email' required />
                <input name='password' type="password" placeholder='Password' required />
                {
                    error && <p style={{color:'red'}}>{ error}</p>
                }
                <Link className='forgot-link' to='/forgotPassword'>Forgot password ? </Link>
                <button className='login-button' type='submit'>Login</button>
                <p>New user ? <Link className='form-link' to='/signUp'>SignUp </Link> </p>
                <div className="horizontal-line">
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button onClick={signInWithGoogle} className='google-button' ><FcGoogle className='google-icon' />  Google</button>
            </form>
        </div>
    );
};

export default Login;