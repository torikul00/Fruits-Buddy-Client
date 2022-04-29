import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            
          <nav>
            <div><h2 onClick={()=>navigate('/')} className='logo'>Fruits Buddy</h2></div>
                <div className='nav-links'>
                    <Link to="/blog">Blog</Link>
                    <button className='nav-button' onClick={()=>navigate('/login')}>Login</button>
            </div>

        </nav>


        </div>
    );
};

export default Navbar;