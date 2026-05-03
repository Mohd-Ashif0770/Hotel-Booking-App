import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
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
          {room?.images.length > 1 &&
            room?.images.map((image, index) => (
              <img
                key={index}
                onClick={() => setMainImage(image)} // set the main image to the clicked image
                src={image}
                alt="room image"
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? "border-2 border-orange-500" : ""}`}
              />
            ))}
        </div>
      </div>
      {/* room amenities */}
      <div className="flex flex-col md:flex-row items-start md:justify-between gap-6 mt-8">
        {/*left side */}
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-6">
          <h1 className="text-2xl font-playfair md:text-3xl font-medium">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3">
            {room.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 rounded-md p-2"
              >
                <img
                  src={facilityIcons[amenity]}
                  alt="amenity"
                  className="w-4 h-4"
                />
                <p className="text-gray-500 text-xs font-medium">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
        {/*right side */}
        <div>
          <p className="text-gray-700 text-2xl font-medium">
            $ {room.pricePerNight}{" "}
            <span className="text-gray-500 text-lg font-medium">/ night</span>
          </p>
        </div>
      </div>
      {/* check availability form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] rounded-lg p-6 mx-auto mt-16 gap-4 max-w-6xl">
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label
              htmlFor="checkIn"
              className="text-sm font-medium text-gray-500"
            >
              Check in
            </label>
            <input
              type="date"
              id="checkIn"
              required
              placeholder="select date"
              className="rounded-md border border-gray-300 px-3 py-2 w-full mt-1.5 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="checkOut"
              className="text-sm font-medium text-gray-500"
            >
              Check out
            </label>
            <input
              type="date"
              required
              id="checkOut"
              placeholder="select date"
              className="rounded-md border border-gray-300 px-3 py-2 w-full mt-1.5 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="guests"
              className="text-sm font-medium text-gray-500"
            >
              Guests
            </label>
            <input
              type="number"
              id="guests"
              required
              placeholder="0"
              className="rounded-md border border-gray-300 px-3 py-2 w-full mt-1.5 outline-none max-w-16"
            />
          </div>
        </div>
        <button
          type="submit"
          className="cursor-pointer border mxa-md:w-full border-gray-300 px-18 py-3 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
        >
          Check Availability
        </button>
      </form>

      {/*common specifications */}
      <div className="mt-20 space-y-5">
        {roomCommonData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.icon} alt={item.title} className="w-6.5 mt-1.5" />
            <div className="flex flex-col ">
              <h3 className="text-lg font-playfair font-medium">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* room description */}
      <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-4xl py-8 my-18 border-y border-gray-300">
        Guests will be allocated on the ground floor according to availability.
        You get a comfortable Two bedroom apartment has a true city feeling. The
        price quoted is for two guest, at the guest slot please mark the number
        of guests to get the exact price for groups. The Guests will be
        allocated ground floor according to availability. You get the
        comfortable two bedroom apartment that has a true city feeling.
      </p>

      {/* room owner info */}
      <div className="flex items-start gap-4">
        <div>
          <img src={room.hotel.owner.image} alt={room.hotel.owner.name} className="w-16 rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-playfair font-medium">Hosted By {room.hotel.name}</h2>
          <div className="flex items-center gap-1 ">
            {Array(5).fill(0).map((_, index) => (
              <Star key={index} filled={index < 4} />
            ))}
            <p className="text-gray-500 text-sm font-medium ms-2">200+ reviews</p>
          </div>
          <button className="cursor-pointer max-w-40 border border-gray-300 mt-8 px-3 py-3 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">Contact Owner</button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetials;
