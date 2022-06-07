import React from 'react';
import Header from '../../constants/Header/Header';
import Navbar from '../../constants/Navbar/Navbar';
import { format } from 'date-fns';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import './Hotel.css';
import { DateRange } from "react-date-range";
import Searchitem from '../../constants/Searchitem/Searchitem';

const Hotel = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='list-container'>
        <div className='list-wrapper'>
          <div className='list-search'>
            <h1 className='list-title'>Search</h1>
            <div className='list-item'>
              <label>Destination</label>
              <input type="text" placeholder='Enter a destination' />
            </div>
            <div className='list-item'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                 />
              )}
            </div>
            <div className='list-item1'>
              <label >Options</label>
              <div className='list-option_item'>
                <span className='list-text'>Min Price <small>per night</small></span>
                <input type='number' className='list-number' />
              </div>
            </div>

            <div className='list-option_item'>
                <span className='list-text'>Max Price <small>per night</small></span>
                <input type='number' className='list-number' />
              </div>

              <div className='list-option_item'>
                <span className='list-text'>Adult</span>
                <input type='number' min={1} className='list-number' placeholder={options.Adult}/>
              </div>

              <div className='list-option_item'>
                <span className='list-text'>Children</span>
                <input type='number' min={0} className='list-number'placeholder={options.Children} />
              </div>

              <div className='list-option_item'>
                <span className='list-text'>Room</span>
                <input type='number' min={1} className='list-number'placeholder={options.Room} />
              </div>
              <div className='list-button'>
              <button>Search</button>
              </div>

          </div>
          <div className='list-result'>
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel;