import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar-head'>
            <h1 className='logo'> Relax.com</h1>
            <div className='app__navbar-button'>
                <button type="button" className='custom_button'>Register</button>
                <button type="button" className='custom_button'>Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar