
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Form.css'
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import useSocialLogin from '../../hooks/useSocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Spinner from '../../Spinner/Spinner';
const Login = () => {
    const navigate = useNavigate()

    const { signInWithGoogle } = useSocialLogin()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Spinner />
    }

    if (user) {
        navigate(from, { replace: true });
        toast.success('Login succesful', { id: 'login' })

    }
    const handleSubmit = (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
               
            })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <h1> Login Here</h1>
                <input name='email' type="email" placeholder='Email' required />
                <input name='password' type="password" placeholder='Password' required />
                {
                    error && <p style={{ color: 'red', padding: '10px 0px' }}>Wrong email or password</p>
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