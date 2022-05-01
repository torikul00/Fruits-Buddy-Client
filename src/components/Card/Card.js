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
            <p>Price : $ {price}</p>
            <p>Quantity : {quantity}</p>
            <p> Supplier : { sup_name}</p>
            <button onClick={()=>handleNavigate(_id)} className='update-button'>Update </button>
        </div>
    );
};

export default Card;