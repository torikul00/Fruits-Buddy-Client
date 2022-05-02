import React from 'react';
import './ManageItemCard.css'

const ManageItemCard = ({ item, handleItemDelete }) => {
    const { name, price, quantity, _id, image } = item


    return (
        <div className='card-info-container'>
            <div className='img'>
                <img src={image ? image : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'} alt="" />
            </div>
            <div className='single-item-info'>
                <h2>{name}</h2>
                <p>Price : ${price}</p>
                <p>Quantity : {quantity}</p>
                <button onClick={() => handleItemDelete(_id)} className='delete-button'>Delete</button>
            </div>
        </div>
    );
};

export default ManageItemCard;