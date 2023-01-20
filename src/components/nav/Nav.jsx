import React, {useState} from 'react'
import logo from '../../assets/Logo .svg'
import './nav.css'

const Nav = () => {
  return (
    <header>
      <nav>
        <a href='#home' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className='menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <a href='#reservations'>Reservations</a>
            </li>
            <li>
              <a href='#order-online'>Order Online</a>
            </li>
            <li>
              <a href='#login'>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
