import React from 'react'
import './highlights.css'
import { Link } from 'react-router-dom'
import { MdDeliveryDining } from 'react-icons/md'
import salad from '../../assets/greek salad.jpg'
import bruchetta from '../../assets/bruchetta.jpg'
import dessert from '../../assets/lemon dessert.jpg'

const Highlights = () => {
  return (
    <div className='container'>
      <section className='sectionOne'>
        <h1 className='cards-title'>This weeks specials!</h1>
        <Link to='/menu'>
          <button className='cards-button'>Online Menu</button>
        </Link>
      </section>
      <section className='sectionTwo'>
      <div className='card card-one'>
          <img className='card-img' src={salad} alt="salad" />
          <p className='card-title'>Greek salad <span className='card-price'>$12.99</span></p>
          <p className='card-description'>the famous greek salad of crypsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosmary croutons.</p>
          <div className='card-button'>
          <Link to='/order-online'>
              <button>Order a delevery</button>
          </Link>
            <MdDeliveryDining className='btn-img'  />
          </div>
        </div>
        <div className='card card-two'>
          <img className='card-img' src={bruchetta} alt="bruchetta" />
          <p className='card-title'>Bruchetta <span className='card-price'>$5.99</span></p>
          <p className='card-description'>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <div className='card-button'>
          <Link to='/order-online'>
              <button>Order a delevery</button>
          </Link>
            <MdDeliveryDining className='btn-img'  />
          </div>
        </div>
        <div className='card card-three'>
          <img className='card-img' src={dessert} alt="dessert" />
          <p className='card-title'>Lemon Dessert <span className='card-price'>$5.00</span></p>
          <p className='card-description'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <div className='card-button'>
          <Link to='/order-online'>
              <button>Order a delevery</button>
          </Link>
            <MdDeliveryDining className='btn-img'  />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Highlights
