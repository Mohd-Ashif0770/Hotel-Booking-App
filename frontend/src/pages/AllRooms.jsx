import Title from "../components/Title";
import { roomsDummyData } from "../assets/assets";
import RoomCard from "../components/RoomCard";
import { useState } from "react";

const POPULAR_FILTERS = [
  "Single Bed",
  "Family Suite",
  "Double Bed",
  "Luxury Room",
];

const PRICE_RANGES = [
  { id: "2500-5000", label: "₹2500 to ₹5000" },
  { id: "5000-8000", label: "₹5000 to ₹8000" },
  { id: "8000-15000", label: "₹8000 to ₹15000" },
];

const SORT_OPTIONS = [
  "Price Low to High",
  "Price High to Low",
  "Newest First",
];

const AllRooms = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedPopular, setSelectedPopular] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  const togglePopular = (label) => {
    setSelectedPopular((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
    );
  };

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSort = (option) => {
    setSortBy((prev) => (prev === option ? null : option));
  };

  const clearFilters = () => {
    setSelectedPopular([]);
    setSelectedPrices([]);
    setSortBy(null);
  };

  const checkboxClass =
    "size-4 shrink-0 rounded-sm border border-[#E0E0E0] text-black accent-black focus:ring-0 focus:ring-offset-0";

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-22 md:py-35 px-6 md:px-16 lg:px-18">
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
      <div className="w-full max-w-70 shrink-0 bg-white border border-[#E0E0E0] max-lg:mb-8 lg:mt-16 lg:self-start">
        <div className="flex items-center justify-between border-b border-[#E0E0E0] px-5 py-4">
          <p className="text-sm font-bold uppercase tracking-wide text-gray-800">
            FILTERS
          </p>
          <div className="text-[11px] font-medium uppercase tracking-wide text-[#888888]">
            <button
              type="button"
              onClick={() => setOpenFilters(!openFilters)}
              className="cursor-pointer lg:hidden"
            >
              {openFilters ? "Hide" : "Show"}
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="hidden cursor-pointer lg:inline hover:text-black"
            >
              CLEAR
            </button>
          </div>
        </div>

        <div
          className={`${openFilters ? "block" : "hidden"} space-y-6 px-5 py-5 lg:block`}
        >
          <div>
            <p className="mb-3 text-sm font-bold text-gray-800">Popular filters</p>
            <ul className="flex flex-col gap-3">
              {POPULAR_FILTERS.map((label) => (
                <li key={label}>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedPopular.includes(label)}
                      onChange={() => togglePopular(label)}
                      className={checkboxClass}
                    />
                    <span className="text-sm text-[#888888]">{label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold text-gray-800">Price</p>
            <ul className="flex flex-col gap-3">
              {PRICE_RANGES.map(({ id, label }) => (
                <li key={id}>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(id)}
                      onChange={() => togglePrice(id)}
                      className={checkboxClass}
                    />
                    <span className="text-sm text-[#888888]">{label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
              <p className="mb-3 text-sm font-bold text-gray-800">Sort By</p>
            <ul className="flex flex-col gap-3">
              {SORT_OPTIONS.map((option) => (
                <li key={option}>
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={sortBy === option}
                      onChange={() => toggleSort(option)}
                      className={checkboxClass}
                    />
                    <span className="text-sm text-[#888888]">{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
