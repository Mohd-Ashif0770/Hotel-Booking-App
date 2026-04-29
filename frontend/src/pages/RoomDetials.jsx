import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets";
import Star from "../components/Star";

const RoomDetials = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const result = roomsDummyData.find((room) => room._id === id);
    if (result) {
      setRoom(result);
      setMainImage(result.images[0]);
    }
  }, [id]);

  if (!room) return <div>Loading...</div>;
  return (
    <div className="py-22 md:py-30 px-6 md:px-16 lg:px-18">
      {/* room details */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h2 className="text-2xl md:text-3xl font-playfair font-medium ">
          {room.hotel.name}{" "}
          <span className="font-inter font-medium text-sm">
            ({room.roomType})
          </span>
        </h2>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% off
        </p>
      </div>
      {/* room rating */}
      <div className="flex items-center gap-1 my-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star key={index} filled={index < 4} />
          ))}
        <p className="text-gray-500 text-xs font-medium">200+ reviews</p>
      </div>
      {/* room location */}
      <div className="flex items-center gap-1 my-2 text-gray-500 text-sm">
        <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
        <p className="text-gray-500 text-sm font-medium">
          {room.hotel.address}
        </p>
      </div>
      {/* room images */}
      <div className="flex flex-col md:flex-row my-6 gap-6">
        <div className="md:w-1/2 w-full">
          <img
            src={mainImage}
            alt="room image"
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 md:w-1/2 w-full">
            {room?.images.length > 1 && room?.images.map((image, index) => (
                <img
                    key={index}
                    onClick={() => setMainImage(image)} // set the main image to the clicked image
                    src={image}
                    alt="room image"
                    className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? 'border-2 border-orange-500' : ''}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetials;
