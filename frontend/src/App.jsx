import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetials from './pages/RoomDetials'

const App = () => {

  const location = useLocation();
  const isOwnerPage = location.pathname.includes('/owner');

  return (
    <div>
      {!isOwnerPage && <Navbar /> }
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/room/:id' element={<RoomDetials />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App