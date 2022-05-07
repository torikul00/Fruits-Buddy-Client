import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import toast from 'react-hot-toast';
import { FiMenu} from 'react-icons/fi';
import { AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const [toggle, setToggle] = useState(false)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('Sign out successful')
            }).catch(() => {

            })
    }
    const navigate = useNavigate()
    return (
        <div>

            <nav>
                <div><h2 onClick={() => navigate('/')} className='logo'>Fruits Buddy</h2></div>
                <div className='navbar-links'>
                    <Link to='/'>Home</Link>
                    <Link to="/blog">Blog</Link>
                    {user ?
                        <>
                            <Link to='manageItems'>Manage Items</Link>
                            <Link to='addItem'>Add Item</Link>
                            <Link to='myItems'>My items</Link>
                            <button onClick={handleSignOut} className='nav-button'>Logout</button>
                        </>

                        :

                        <button className='nav-button' onClick={() => navigate('/login')}>Login</button>

                    }

                </div>

                <FiMenu onClick={() => setToggle(!toggle)} className='toggle-icon' />


                {toggle && <div onClick={() => setToggle(!toggle)} className="toggle-menu">
                    
                    <AiOutlineClose className='close-icon' onClick={() => setToggle(!toggle)} />
                  
                    <Link to='/'>Home</Link>
                    <Link to="/blog">Blog</Link>
                    {user ?
                        <>
                            <Link to='manageItems'>Manage Items</Link>
                            <Link to='addItem'>Add Item</Link>
                            <Link to='myItems'>My items</Link>
                            <button onClick={handleSignOut} className='nav-button'>Logout</button>
                        </>

                        :

                        <button className='nav-button' onClick={() => navigate('/login')}>Login</button>
                    }
                </div>}

            </nav>

        </div>
    );
};

export default Navbar;