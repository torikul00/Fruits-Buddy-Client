import React from 'react';
import './NotFound.css'
import notFound from '../../images/404.png'
const NotFound = () => {
    return (
        <div className='notFound-container'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;