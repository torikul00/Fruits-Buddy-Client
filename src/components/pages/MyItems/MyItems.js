import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import MyItemsCard from '../../MyitemsCard/MyItemsCard';
import Spinner from '../../Spinner/Spinner';
import './MyItems.css'
import { signOut } from 'firebase/auth';
const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth)
    const [isFetch, setIsFetch] = useState(false)
    const navigate = useNavigate()
    const email = user?.email
    useEffect(() => {
        setLoading(true)
        try {
            fetch(`https://gentle-plateau-90897.herokuapp.com/orderItems?email=${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                    setLoading(false)
                })
        }
        catch (error) {
            console.log(error)
            navigate('/login')
            signOut(auth)

        }

    }, [email, isFetch])
    const handleDelete = id => {
        const confirmDelete = window.confirm('Are you sure to delete ?')
        if (confirmDelete) {

            if (confirmDelete) {
                const url = `https://gentle-plateau-90897.herokuapp.com/fruit/${id}`
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            setIsFetch(!isFetch)
                        }
                    })
            }
        }
    }

    if (loading) {
        return <Spinner />
    }
    if (!loading) {
        return (
            <div className='card-container'>
                {
                    myItems.length ? myItems.map(item => <MyItemsCard key={item._id} item={item} handleDelete={handleDelete} />)
                        :

                        <div className='my-items'>
                            <h1>No Items Added</h1>
                        </div>
                }

            </div>
        );
    }
};

export default MyItems;