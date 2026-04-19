import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  const isOwnerPage = location.pathname.includes('/owner');

  return (
    <div>
      {!isOwnerPage && <Navbar /> }
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App