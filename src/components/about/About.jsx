import React from 'react'
import './about.css'
import restaurant from '../../assets/restaurant.jpg'

const About = () => {
  return (
    <section className='about-section'>
      <div className='desc'>
        <h1>Little Lemon</h1>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      </div>
      <img src={restaurant} alt="restaurant" />
    </section>
  )
}

export default About
