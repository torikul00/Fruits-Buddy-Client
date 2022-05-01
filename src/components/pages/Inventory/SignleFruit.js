import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './SignleFruit.css'
const SignleFruit = () => {

    const [fruit,setFruit] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/fruits/${id}`)
        .then(res => res.json())
        .then(data => setFruit(data))
    },[])
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
                          
                <div className="update-item">
                <input className='quantity-input' type="number" placeholder='Add Quantity' />
                 <button className='quantity-update-button'>Add</button>
           </div>

            </div>
  
        </div>
    );
};

export default SignleFruit;