import React from 'react';
import './Searchitem.css';
import { useNavigate } from 'react-router-dom';

const Searchitem = () => {

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels/:id")
  };
  return (
    <div className='app__search'>
      <div className='app__search-container'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" className='search-img' />

        <div className='search-details'>
          <h1 className="search-title">Tower Street Apartments</h1>
          <span className="search-distance">500m from center</span>
          <span className="search-taxi">Free airport taxi</span>
          <span className="search-subtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="search-features">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="search-cancel">Free cancellation </span>
          <span className="search-cancel_subtitle">
            You can cancel later, so lock in this great price today!
          </span>

        </div>
        <div className='search-price'>
          <div className='rating'>
            <span className='rate'> Excellent</span>
            <button type='button'>8.9</button>
          </div>

          <div className='pricing'>
            <span className='price'>$100</span>
            <span className='price-tax'>Inclusive of all taxes</span>
            <button type='button' className='avail-button' onClick={handleSearch}>See Availability</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Searchitem;