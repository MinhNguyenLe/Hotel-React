import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>2019 -2020 Only Brand to Achieve Forbes Travel Guide Five-Star Status Across Entire Portfolio.</p>
            <br />
            <p>2014 - 2020 World’s Best Awards Top Hotel Brands</p>
            <div className='icon flex_space'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Forbes Five Star Award 2002 - 2020</p>
                <label className='fa fa-calendar-alt'></label>
                <span>2003 - 2019</span>
              </li>
              <li>
                <p>AAA Five Diamond Award 2003 - 2019</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct  2002 - 2020</span>
              </li>
              <li>
                <p>Gold List 2018</p>
                <label className='fa fa-calendar-alt'></label>
                <span>2018</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWSLETTER #1 Top Luxury Hotel in the US </h2>
            <p>TripAdvisor Travelers' Choice Awards 2019</p>

            <input type='text' name='' id='' />
            <input type='text' className='primary-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer
