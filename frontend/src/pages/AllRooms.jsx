import React from "react";
import Title from "../components/Title";
import { roomsDummyData } from "../assets/assets";
import RoomCard from "../components/RoomCard";


const AllRooms = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-22 md:pt-35 px-6 md:px-16 lg:px-18">
      <div className="flex flex-col gap-4 max-w-6xl">
        <Title
          title="Hotel Rooms"
          subtitle={
            <>
              Take advantage of our limited-time offers and special packages to
              <br />
              enhance your stay and create unforgettable memories.
            </>
          }
          align="left"
          font="playfair"
        />

        {roomsDummyData.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
      {/* Filter Section */}
      <div >
        filter section
      </div>
    </div>
  );
};

export default AllRooms;
