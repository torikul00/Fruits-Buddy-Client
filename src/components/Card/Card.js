import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'
const Card = ({ item }) => {
    const navigate = useNavigate()
    const { name, image, desc, _id, sup_name, price, quantity } = item
    
    const handleNavigate = (id) => {
        navigate(`/fruit/${id}`)
    }
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{desc}</p>   
            <p><strong>Price : $ {price}</strong></p>
            <p><strong>Quantity : {quantity}</strong></p>
            <p><strong> Supplier : { sup_name}</strong></p>
            <button onClick={()=>handleNavigate(_id)} className='update-button'>Update </button>
        </div>
    );
};

export default Card;