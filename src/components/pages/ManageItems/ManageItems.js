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
    const handleItemDelete = id => {
        const confirmDelete = window.confirm('Are you sure to delete ?')
        if (confirmDelete) {

          
            const url = `http://localhost:5000/fruit/${id}`
            fetch(url, {
                method: 'DELETE',
                
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        window.alert('Item Deleted')
                       const restItem = items.filter(item => item._id !== id)
                       setItems(restItem)
                    }
            })
            
        }
        
    }
    return (
        <div className="card-container">
            {
                items?.map(item =><ManageItemCard key={item._id} item={item} handleItemDelete={handleItemDelete}  />)
           }
        </div>
    );
};

export default ManageItems;