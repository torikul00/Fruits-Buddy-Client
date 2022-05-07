import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Additem.css'
const AddItem = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const image = e.target.imgURL.value
        const desc = e.target.desc.value
        const sup_name = e.target.supplier.value
        const data = { name, price, quantity, image, desc, sup_name, email }
        fetch('https://gentle-plateau-90897.herokuapp.com/fruits', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
            <form className='form' onSubmit={handleSubmit}>
                <h1>Add new item</h1>
                <input name='name' autoComplete='off' type="text" placeholder='Fruit Name' required />
                <input name='price' type="number" placeholder='Price per Sack' required />
                <input name='quantity' type="number" placeholder='Quantity of Sack' required />
                <input name='imgURL' autoComplete='off' type="text" placeholder='Image URL' />
                <input name='supplier' autoComplete='off' type="text" placeholder='Supplier' required />
                <textarea autoComplete='off' name="desc" placeholder='Description' required cols="30" rows="5"></textarea>
                <button className='add-button' type='submit'>Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;