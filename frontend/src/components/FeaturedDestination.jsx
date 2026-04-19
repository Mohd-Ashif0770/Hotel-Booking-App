import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { Link } from "react-router-dom";

const FeaturedDestination = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-6 md:px-16 lg:px-18 my-20">
        <Title />
       
        <div className="flex flex-wrap justify-center items-center gap-4">
            {roomsDummyData.map((room, index) => (
                <HotelCard key={index} room={room} index={index} />
            ))}
        </div>

        <Link to="/rooms">
            <button className="cursor-pointer border border-gray-300 text-gray-800 px-8 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-all duration-300">View All Hotels</button>
        </Link>
    </div>
  )
}

export default FeaturedDestination