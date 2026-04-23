import React from "react";
import Star from "./Star";
import { assets, facilityIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-start gap-6  border-b border-gray-300 pb-6">
      <img
        src={room.images[0]}
        alt="hotel image"
        onClick={() => navigate(`/room/${room._id}`)}
        className="max-w-70 md:w-1/2 rounded-xl shadow-md object-cover cursor-pointer"
      />
      <div className="md:w-3/4 flex flex-col gap-1">
        <p className="text-gray-500 text-xs font-medium">{room.hotel.city}</p>
        <h3
          onClick={() => navigate(`/room/${room._id}`)}
          className="cursor-pointer text-gray-800 text-lg font-playfair font-medium"
        >
          {room.hotel.name}
        </h3>
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star key={index} filled={index < 4} />
            ))}
          <p className="text-gray-500 text-xs font-medium">200+ reviews</p>
        </div>
        <div className="flex items-center gap-1 mt-2 text-gray-500 text-sm">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          <p className="text-gray-500 text-xs font-medium">
            {room.hotel.address}
          </p>
        </div>
        {/* Amenities */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {room.amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-gray-100 rounded-md p-2"
            >
              <img
                src={facilityIcons[amenity]}
                alt={amenity}
                className="w-3 h-3"
              />
              <p className="text-gray-600 text-[10px] font-medium">{amenity}</p>
            </div>
          ))}
        </div>

        {/* Price */}
        <p className="text-gray-700 text-lg font-medium mt-2">
          $ {room.pricePerNight}{" "}
          <span className="text-gray-500 font-medium">/ day</span>
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
