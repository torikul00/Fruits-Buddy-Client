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
                <a target='_blank' href="https://www.facebook.com/timutorikul/"><BsFacebook className='icon' /></a>
                <a target='_blank' href="https://www.instagram.com/itstorikul/?hl=en"><BsInstagram className='icon' /></a>
                <a target='_blank' href="https://www.youtube.com/channel/UCadEO1uyZBF3n4Az_3PPpIw"><BsYoutube className='icon' /></a>
                <a target='_blank' href="https://www.linkedin.com/in/timutorikul/"><BsLinkedin className='icon' /></a> <br />
                <h3> &copy; - Torikul Islam - {year} </h3>
           </footer>
        </div>
    );
};

export default Footer;