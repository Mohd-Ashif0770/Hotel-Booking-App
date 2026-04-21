import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link to={`/room/${room._id}`} key={room._id} >
      <div className="w-full h-full relative bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-44 object-cover rounded-t-lg shadow-md"
        />

       {index % 2 === 0 && <p className="absolute top-3 left-2 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
          Best Seller
        </p>}
        
        <div className="px-3 py-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-playfair text-gray-800">{room.hotel.name}</h3>
                <div className="flex items-center gap-1 ">
                    <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                    <p className="text-gray-800">4.5</p>
                </div>

            </div>

            <div className="flex items-center gap-1 mt-1">
                <img src={assets.locationIcon} alt="location" className="w-4 h-4 mt-0.5" />
                <p className="text-gray-500 text-sm font-medium">{room.hotel.address}</p>
            </div>

            <div className="flex items-center justify-between mt-3">
                <p className="text-gray-500 text-sm font-medium"><span className="text-gray-800 text-lg font-medium">${room.pricePerNight}</span> / night</p>
                <button className="cursor-pointer border border-gray-300 text-gray-800 px-3  py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-all duration-300">Book Now</button>
            </div>

            </div>
      </div>
    </Link>
  );
};

export default HotelCard;
