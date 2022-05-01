import React, { useEffect, useState } from 'react';
import ManageItemCard from '../../ManageItemCard/ManageItemCard';
import './ManageItem.css'
const ManageItems = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/fruits')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div className="card-container">
            {
                items?.map(item =><ManageItemCard key={item._id} item={item}  />)
           }
        </div>
    );
};

export default ManageItems;