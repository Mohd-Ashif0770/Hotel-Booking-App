import React from 'react'
import { assets } from '../assets/assets'

const Star = ({ filled }) => {
  return (
    <div>
        <img src={filled ? assets.starIconFilled : assets.starIconOutlined} alt="star" className="w-4 h-4" />
    </div>
  )
}

export default Star