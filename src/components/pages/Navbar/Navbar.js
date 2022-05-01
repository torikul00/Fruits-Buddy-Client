import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from "firebase/auth";
import toast from 'react-hot-toast';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

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
            <div><h2 onClick={()=>navigate('/')} className='logo'>Fruits Buddy</h2></div>
                <div className='navbar-links'>
                    <Link to="/blog">Blog</Link>
                    {user ?
                        <>
                        
                        <Link to='additem'>Manage Items</Link>
                         <Link to='addItem'>Add Item</Link>
                         <Link to='myItems'>My items</Link>
                         <button onClick={handleSignOut} className='nav-button'>Logout</button>
                        </>
                        
                      :
                        
                 <button className='nav-button' onClick={() => navigate('/login')}>Login</button>
                        
                    }
                    
            </div>

        </nav>


        </div>
    );
};

export default Navbar;