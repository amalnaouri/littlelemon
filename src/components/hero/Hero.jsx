import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'
import restauranfood from '../../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <section>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional <br /> recipes served with a modern twist.
        </p>
        <Link to='/reservations'>
          <button>Reserve a Table</button>
        </Link>
      </section>
      <div className='img-section'>
        <img src={restauranfood} alt='restauranfood' />
      </div>
    </div>
  )
}

export default Hero
