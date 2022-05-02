import React from 'react';
import './Additem.css'
const AddItem = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const price  = e.target.price.value
        const quantity  = e.target.quantity.value
        const image = e.target.imgURL.value
        const desc = e.target.desc.value
        const data = { name, price, quantity, image, desc }
 
        fetch('http://localhost:5000/fruits', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                window.alert('Item added')
                e.target.reset()
        })

    }

    return (
        <div className='add-item-container'>
            <form onSubmit={handleSubmit}>
                <h1>Add new item</h1>
                <input name='name' autoComplete='off' type="text" placeholder='Item Name'  />
                <input name='price' type="number" placeholder='Price' />
                <input name='quantity' type="number" placeholder='Quantity' />
                <input name='imgURL' autoComplete='off' type="text" placeholder='Image URL' />
                <textarea  autoComplete='off' name="desc" placeholder='Description'  cols="30" rows="5"></textarea>
                <button className='add-button' type='submit'>Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;