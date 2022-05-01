import React from 'react';
import './ManageItemCard.css'

const ManageItemCard = ({item}) => {
    const {name,price,quantity,_id,image}  = item
    return (
        <div className='card-info-container'>
            <div className='img'>
                <img src={image} alt="" />
            </div>
            <div className='single-item-info'>
                <h2>{name}</h2>
                <p>Price : ${ price}</p>
                <p>Quantity : {quantity}</p>
                <button className='delete-button'>Delete</button>
            </div>
        </div>
    );
};

export default ManageItemCard;