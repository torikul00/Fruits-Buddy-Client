import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Card/Card';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg'
import banner2 from '../../images/banner2.jpg'
import './Home.css'


const Home = () => {

    const [items] = useItems()
    const navigate = useNavigate()


    return (
        <>
            <div className='banner-container'>
                <img className='banner' src={banner} alt="" />
                <div className='banner-sub-container'>
                    <h1>Welcome to Fruits Buddy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatibus, id vitae laboriosam reprehenderit officia, tempora nobis accusantium adipisci autem odio soluta placeat quasi est quas. Accusantium, voluptas. Enim, libero?</p>
                    <button onClick={()=>navigate('/signUp')} className='reg-button'>Register Now</button>

                </div>
            </div>

            <div className="inventory-items">
                {
                    items.slice(0,6).map(item => <Card item={item} key={item.id} />)
                }
            </div>

            <div>
                <img src={banner2} alt="" />
            </div>

        </>
    );
};

export default Home;