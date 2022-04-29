import React from 'react';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg'
import './Home.css'


const Home = () => {

    const [items] = useItems()
    console.log(items)

    return (
        <>
            <div>
                <img className='banner' src={banner} alt="" />
            </div>

            <div className="inventory-items">

            </div>


        </>
    );
};

export default Home;