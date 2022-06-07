import React from 'react';
import './Guests.css';

const Guests = () => {
    return (
        <div className='app__guests'>
            <div className='app__guests-item'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt='guestimg' className='guests-img' />
                <span className='name'>Aparthotel Stare Miastro</span>
                <span className='city'>Madrid</span>
                <span className='price'>Starting from $120</span>
                <div className='rating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='app__guests-item'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt='guestimg' className='guests-img' />
                <span className='name'>Aparthotel Stare Miastro</span>
                <span className='city'>Madrid</span>
                <span className='price'>Starting from $120</span>
                <div className='rating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='app__guests-item'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt='guestimg' className='guests-img' />
                <span className='name'>Comfort Suites Airports</span>
                <span className='city'>Austin</span>
                <span className='price'>Starting from $140</span>
                <div className='rating'>
                    <button>9.3</button>
                    <span>Excellent</span>
                </div>
            </div>

            <div className='app__guests-item'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt='guestimg' className='guests-img' />
                <span className='name'>Four Seasons Hotel</span>
                <span className='city'>Lisbon</span>
                <span className='price'>Starting from $100</span>
                <div className='rating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default Guests