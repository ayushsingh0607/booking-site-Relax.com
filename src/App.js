import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Hotel from './components/allhotel/Hotel';
import Info from './components/hotelinfo/Info';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotel/>}/>
      <Route exact path="/hotels/:id" element={<Info />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App