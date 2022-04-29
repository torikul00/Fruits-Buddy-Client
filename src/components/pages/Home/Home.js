import React from 'react';
import Card from '../../Card/Card';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg'
import './Home.css'


const Home = () => {

    const [items] = useItems()
    console.log(items)

    return (
        <>
            <div className='banner-container'>
                <img className='banner' src={banner} alt="" />
                <div className='banner-sub-container'>
                    <h1>Welcome to Fruits Buddy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatibus, id vitae laboriosam reprehenderit officia, tempora nobis accusantium adipisci autem odio soluta placeat quasi est quas. Accusantium, voluptas. Enim, libero?</p>
                    <button className='reg-button'>Registered Now</button>

                </div>
            </div>

            <div className="inventory-items">
                {
                    items.map(item => <Card item={item} key={item.id} />)
                }
            </div>


        </>
    );
};

export default Home;