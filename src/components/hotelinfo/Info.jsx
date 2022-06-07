import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../constants/Footer/Footer';
import Header from '../../constants/Header/Header';
import Mails from '../../constants/Mails/Mails';
import Navbar from '../../constants/Navbar/Navbar';
import './Info.css';

const Info = () => {
  const photo = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },



  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='app__info'>
        <div className='app__info-wrapper'>
          <button type='button' className='cus-button'>Reserve Now!</button>
          <h1 className='wrapper-title'> Tower Street Apartments</h1>
          <div className='app-address'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className='wrapper-address'>5 Basztowa, Old Town,33-332 Krakow,Poland</span>
          </div>
          <span className='wrapper-desc'>Excellent location- 500m from center</span>
          <span className='wrapper-descri'>Book a stay over $125 at this property and get free airport taxi</span>

          <div className='wrapper-image'>
            {photo.map((photo => (
              <div className='info-img'>
                <img src={photo.src} alt='hotelimg' className='photo' /> </div >
            )))}

          </div>

          <div className='all-info'>

            <div className='info-details'>
              <h1 className='details-head'>
                Stay in the heart of City
              </h1>
              <p className='details-para'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>

            </div>
            <div className='info-price'>
              <h1 className='h-info'>Perfect for a 9-night stay</h1>
              <span className='p-info'>Located in the heart of Krakow , this property has an excellent rate of 9.8</span>
              <h2>
                <b>$145</b> (9 nights)
              </h2>
              <button type='button' className='price-button'>Reserve and Book Now!</button>

            </div>
          </div>

        </div>

      </div>
      <div className='mails-foot'>

        <Mails />
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default Info;