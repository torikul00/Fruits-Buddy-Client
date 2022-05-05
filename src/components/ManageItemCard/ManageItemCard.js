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

            <div className="img"><img src={image ? image : 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image-300x225.png'} alt="" /></div>
            <div className="card-info">
                <h3>Name : {name}</h3>
                <p>Price : {price} Per Sack</p>
                <p> Quantiity {quantity} Per Sack</p>

            </div>
            <div className="buttons">
                <button onClick={() => handleItemDelete(_id)} className='delete-button'>Delete</button>
                <button onClick={() => handleItemUpdate(_id)} className='update-btn'>Update</button>
            </div>

        </div>
    );
};

export default ManageItemCard;