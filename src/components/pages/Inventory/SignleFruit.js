import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SignleFruit.css'
import Spinner from '../../Spinner/Spinner';
const SignleFruit = () => {
    const [loading, setLoading] = useState(false)
    const [isReload, setisReload] = useState(false)
    const [fruit, setFruit] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/fruits/${id}`)
            .then(res => res.json())
            .then(data => {
                setFruit(data)
                setLoading(false)
            })
    }, [isReload, id])
    const handleQuantity = (e) => {
        e.preventDefault()
        const quantity = (e.target.quantity.value)

        if (quantity < 0) {

            window.alert('Please input positive number')
            e.target.reset()
            return
        }
        else if (quantity == '') {
            alert('Input Can not be Empty')
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
                .then(() => {
                    setisReload(!isReload)
                    e.target.reset()
                    window.alert('Item added seccessful')
                })
        }
    }
    const handleDelever = () => {
        if (fruit.quantity > 0) {
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
                .then(() => {

                    setisReload(!isReload)
                    window.alert('1 sack delevered seccessful')
                })
        }
        else {
            window.alert('Insufficient Item')
        }
    }
    if (loading) {
       return <Spinner />
    }
    if (!loading) {
        return (
            <div className='fruit-container'>
                <div className="fruit-info">
                    <div className='img-container'>
                    <img src={fruit.image ? fruit.image : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'} alt="" />
                   </div>
                    <h2>{fruit.name}</h2>
                    <p>{fruit.desc}</p>
                    <br />
                    <p>Price : ${fruit.price} per Sack</p>
                    <p>Quantity : {fruit.quantity} Sacks</p>
                    <p> Supplier : {fruit.sup_name}</p>
                    <p>ID : {fruit._id}</p>
    
                    <form onSubmit={handleQuantity} className="update-item">
                        <input className='quantity-input' type="number" placeholder='Add Quantity' name='quantity' />
                        <button type='submit' className='quantity-update-button'>Restock Item</button>
                    </form>
                    <button onClick={handleDelever} className='delevery-button'>Delevered</button>
                </div>
    
            </div>
        );
    }
};

export default SignleFruit;