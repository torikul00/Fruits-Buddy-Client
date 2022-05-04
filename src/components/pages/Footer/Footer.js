import React from 'react';
import './Footer.css'
import { BsFacebook,BsInstagram,BsYoutube,BsLinkedin } from 'react-icons/bs';
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    
    return (
        <div className='footer-container'>
            <footer>
                <h3>Follow Us </h3>
                <a href="https://www.google.com"><BsFacebook className='icon' /></a>
                <a href="https://www.google.com"><BsInstagram className='icon' /></a>
                <a href="https://www.google.com"><BsYoutube className='icon' /></a>
                <a href="https://www.google.com"><BsLinkedin className='icon' /></a> <br />
                <h3> &copy; - Torikul Islam - {year} </h3>
           </footer>
        </div>
    );
};

export default Footer;