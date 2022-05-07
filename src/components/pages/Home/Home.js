import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Card/Card';
import useItems from '../../hooks/useItems';
import banner from '../../images/banner.jpg'
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Torikul from '../../images/torikul.jpg'
import Spinner from '../../Spinner/Spinner';
import amazon from '../../images/logos/amazon.png'
import target from '../../images/logos/target.png'
import gebber from '../../images/logos/gebber.png'
import walmart from '../../images/logos/walmart.png'
const Home = () => {
  const [items, , loading] = useItems()
  const navigate = useNavigate()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },

      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  if (loading) {
    return <Spinner />
  }
  if (!loading) {
    return (
      <>
        <div className='banner-container'>
        
          <div className='banner-sub-container'>
            <h1>Welcome to Fruits Buddy</h1>
            <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.</p>
            <button onClick={() => navigate('/signUp')} className='reg-button'>Register Now</button>
          </div>
        </div>

        <div className="inventory-items">
          {
            items.slice(0, 6).map(item => <Card item={item} key={item._id} />)
          }
        </div>

        <button onClick={() => navigate('/manageItems')} className='manage-inven-button'>Manage Inventories</button>

        <div className='carousel-container' >
          <h1 className='carousel-title'>Our Team Members</h1>
          <Carousel
            className='carousel'
            infinite
            draggable
            autoPlay
            customTransition="all 1s linear"
            autoPlaySpeed={2000}
            showDots={true}
            responsive={responsive}>
            <div className='carousel-item'>
              <img src={Torikul} alt="" />
              <div>
                <h1>Torikul Islam</h1>
                <p>Founder & CEO </p>
                <button>Contact</button>
              </div>
            </div>
            <div className='carousel-item'>
              <img src='https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=' alt="" />
              <div>
                <h1>David Herman</h1>
                <p>Stock Manager</p>
                <button>Contact</button>
              </div>
            </div>
            <div className='carousel-item'>
              <img src='https://cdn6.f-cdn.com/files/download/38546484/28140e.jpg' alt="" />
              <div>
                <h1>Michel Joe</h1>
                <p>Senior Web Developer</p>
                <button>Contact</button>
              </div>
            </div>
            <div className='carousel-item'>
              <img src='https://cdn2.f-cdn.com/files/download/38547697/ddc116.jpg' alt="" />
              <div>
                <h1>Hermena Mawa</h1>
                <p>Product Manager </p>
                <button>Contact</button>
              </div>
            </div>
          </Carousel>
        </div>

        <h1 className='partner-title'>OUR PARTNER COMPANIES</h1>
        <div className="companies-container">

          <div className="company">
            <img className='walmart' src={walmart} alt="" />
          </div>

          <div className="company">
            <img className='target' src={target} alt="" />
          </div>

          <div className="company">
            <img className='gebber' src={gebber} alt="" />
          </div>

          <div className="company">

            <img className='amazon' src={amazon} alt="" />
          </div>

        </div>



      </>
    );
  }

};

export default Home;