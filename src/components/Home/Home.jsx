import React from 'react'
import Navbar from '../../constants/Navbar/Navbar';
import Header from '../../constants/Header/Header';
import Features from '../../constants/Features/Features';
import Property from '../../constants/Property/Property';
import Guests from '../../constants/Guests/Guests';
import Mails from '../../constants/Mails/Mails';
import Footer from '../../constants/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className='home_container'>
        <Features />
        <h1 className='home_title'>Browse by property type</h1>
        <Property />
        <h1 className='home_title1'>Homes guests love</h1>
        <Guests />
        <Mails />
        <Footer />
      </div>
    
    </div>
    
  )
}

export default Home