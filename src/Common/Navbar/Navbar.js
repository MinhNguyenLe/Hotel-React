import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  const [click, setClick] = useState(false);

  const accountStorage = JSON.parse(localStorage.getItem('account'));

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    localStorage.removeItem('account');
    history.push('/sign-in');
    window.location.reload();
  };

  return (
    <>
      {accountStorage ? (
        <nav className="navbar">
          <div className="container flex_space">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : ' fas fa-bars'}></i>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" onClick={closeMobileMenu}>
                  List rooms
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/service" onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={closeMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/destinations" onClick={closeMobileMenu}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/reviewer" onClick={closeMobileMenu}>
                  Reviewer
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="container flex_space">
              <div className="login-area flex">
                <li>
                  <button
                    onClick={logout}
                    style={{
                      background: 'transparent',
                      fontWeight: '500',
                      border: 'white',
                      color: 'white',
                    }}
                    className="outline-btn"
                  >
                    Log out
                  </button>
                </li>
                <li>
                  <a href="/mypage">
                    <button className="primary-btn">My profile</button>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="container flex_space">
            <div className="login-area flex">
              <li>
                <Link to="/sign-in">
                  <i class="far fa-chevron-right"></i>Sign in
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <i class="far fa-chevron-right"></i>Register
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <button className="primary-btn">Request a Quote</button>
                </Link>
              </li>
            </div>
          </div>
        </nav>
      )}
      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src="images/logo.png" alt="" />
          </div>

          <div className="contact flex_space ">
            <div className="box flex_space">
              <div className="icons">
                <i class="fal fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to="/contact">+011 123 4567</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i class="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
