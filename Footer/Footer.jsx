import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>CollegeMeals</h1>
            <p>Your go-to destination for delicious and affordable meals. We bring quality food right to your doorstep, making every meal a satisfying experience.</p>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9606563396</li>
                <li>rabindranathc54@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CollegeMeals.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
