import Title from "../components/Title";
import { roomsDummyData } from "../assets/assets";
import RoomCard from "../components/RoomCard";
import { useState } from "react";

const AllRooms = () => {
  const [openFilters, setOpenFilters] = useState(false);
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
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-gray-300 ${openFilters && 'border-b' }`} >
          <p className="text-base text-gray-800 font-medium">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden" >{openFilters ? 'Hide' : 'Show'}</span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
