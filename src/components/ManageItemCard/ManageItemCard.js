import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItemCard.css'

const ManageItemCard = ({ item, handleItemDelete }) => {
    const { name, price, quantity, _id, image } = item
    const navigate = useNavigate()
    const handleItemUpdate = (id) => {
        navigate(`/fruit/${id}`)
    }
    return (
        <div className='card-info-container'>
            <div className='img'>
                <img src={image ? image : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'} alt="" />
            </div>
            <div className='single-item-info'>
                <h2>{name}</h2>
                <p>Price : ${price}</p>
                <p>Quantity : {quantity} sack</p>
                <div className="buttons">
                <button onClick={() => handleItemDelete(_id)} className='delete-button'>Delete</button>
                <button onClick={() => handleItemUpdate(_id)} className='updt-button'>Update</button>
               </div>
            </div>
        </div>
    );
};

export default ManageItemCard;