import React from 'react'
import { assets } from '../assets/assets'

const ExclusiveCard = ({ title, description, priceOff, expiryDate, image }) => {
  return (
    <div className="group w-90 relative text-white rounded-lg shadow-md overflow-hidden  hover:scale-105 transition-all duration-300">
        <img src={image} alt={title}  />
        <p className="bg-white text-xs font-medium absolute top-3 left-4 rounded-full px-2 py-1 text-gray-700">{priceOff}% off</p>
        <div className="px-4 py-3 text-white flex flex-col gap-3 items-start justify-between absolute top-10 left-0 right-0">
            <h3 className="text-lg font-playfair text-gray-200">{title}</h3>
            <p className="text-gray-300 text-sm font-medium">{description}</p>
            <p className="text-gray-300 text-xs font-medium">Expires {expiryDate}</p> 
        </div>
        <button className="flex items-center gap-2 text-gray-300 text-xs font-medium cursor-pointer absolute bottom-4 left-4">View Offers
            <img src={assets.arrowIcon} alt="arrow" className="brightness-0 invert" />
        </button>
    </div>
  )
}

export default ExclusiveCard