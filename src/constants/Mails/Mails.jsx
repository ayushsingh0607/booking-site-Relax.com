import React from 'react';
import './Mails.css';

const Mails = () => {
  return (
    <div className='app__mails'>
        <h1 className='app__mails-title'>Save time , Save money!</h1>
        <p className='app__mails-para'>Sign up and we'll send the best deals to you.</p>
        <div className='app__mails-input'>
            <input type='text' placeholder='Enter your Email Address' />
            <button className='app__mails-button'>Subscribe</button>
        </div>
    </div>
  )
}

export default Mails