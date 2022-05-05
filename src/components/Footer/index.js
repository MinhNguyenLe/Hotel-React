import React from 'react';
import './styles.scss'

function Footer() {
    return (
        <footer className='footer mt-5'>
            <ul className='d-flex flex-wrap justify-content-center align-items-center py-4'>
                <li>
                    <img src='/images/logo_mobile.png' alt='Cocos' height='36' />
                </li>
                <li>
                    <span className='ico ico-logo'></span>
                </li>
                <li>
                    <a href='/'>Terms &amp; Conditions</a>
                </li>
                <li>
                    <a href='/'>Privacy Policy</a>
                </li>
                <li>
                    <a href='/'>Partners</a>
                </li>
                <li>
                    <a href='/' className='dark-blue'>minh.nguyenle1809@gmail.com</a>
                </li>
                <li >
                    <a href='/' className='dark-blue'>Tlf: +123 456 789 00</a>
                </li>
                <li>
                    <div className='ico'></div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
