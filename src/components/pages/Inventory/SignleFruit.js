import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SignleFruit.css'
const SignleFruit = () => {
   
    // const [quantity,setQuantity] = useState(0)
    const [isReload,setisReload] = useState(false)
    const [fruit, setFruit] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/fruits/${id}`)
            .then(res => res.json())
            .then(data => setFruit(data))
    }, [isReload,id])

    const handleQuantity = (e) => {
        e.preventDefault()
        const quantity = (e.target.quantity.value) 

        if (quantity < 0) {

            window.alert('Please input positive number')
            e.target.reset()
            return
        }
        else {
            const totalQuantity = parseInt(fruit.quantity) + parseInt(quantity)
            const updateQuantity = { quantity: totalQuantity }
            fetch(`http://localhost:5000/fruit/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    
                    setisReload(!isReload)
                    e.target.reset()
                    window.alert('Item added seccessful')
                    
                    
                })
        }

    }
    const handleDelever = () => {
        if (fruit.quantity > 1) {
            const totalQuantity = parseInt(fruit.quantity) - 1
        const updateQuantity = { quantity: totalQuantity }
        fetch(`http://localhost:5000/fruit/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
            
                setisReload(!isReload)
               window.alert('1 item delevered seccessful')
            })
        }
        else {
            window.alert('Insufficient Item')
        }
    }
    return (
        <div className='fruit-container'>
            <div className="fruit-info">
                <img src={fruit.image} alt="" />
                <h1>{fruit.name}</h1>
                <p>{fruit.desc}</p>
                <br />
                <p>Price : $ {fruit.price}</p>
                <p>Quantity : {fruit.quantity}</p>
                <p> Supplier : {fruit.sup_name}</p>

                <form onSubmit={handleQuantity} className="update-item">
                    <input  className='quantity-input' type="number" placeholder='Add Quantity' name='quantity' />
                    <button type='submit' className='quantity-update-button'>Add</button>

                </form>
                <button onClick={handleDelever} className='delevery-button'>Delevery</button>
            </div>

        </div>
    );
};

export default SignleFruit;