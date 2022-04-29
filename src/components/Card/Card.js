import React from 'react';
import './Card.css'
const Card = ({item}) => {
    const {name,image,desc,id,sup_name,price,quantity}= item
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{ desc}</p>
            <p>Price : $ {price}</p>
            <p>Quantity : {quantity}</p>
            <p> Supplier : { sup_name}</p>
            <button>Update </button>
        </div>
    );
};

export default Card;