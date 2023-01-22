import React from 'react'
import './footer.css'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>

      <div className="app__footer-links_logo">
        <Link to='/' className='logo'>
          <img src={logo} alt='logo' />
        </Link>
        <p>The best way to find yourself is to lose yourself in the service of others</p>
      </div>

      <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p>9 W 53rd St, New York, NY 10019, USA</p>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
      </div>
      
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p>Monday-Friday:</p>
        <p>08:00 am - 12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00 am - 11:00 pm</p>
      </div>
</div>
    
    </footer>
  )
}

export default Footer