import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";
import ExclusiveCard from "./ExclusiveCard";

const ExclusiveOffer = () => {
  return (
    <div className="flex flex-col items-center justify-center my-25">
      <div className="flex items-center justify-between w-full px-6 md:px-16 lg:px-18">
        <Title
          title="Exclusive Offers"
          subtitle={
            <>
              Take advantage of our limited-time offers and special packages to
              enhance your <br /> stay and create unforgettable memories.
            </>
          }
          align="left"
          font="playfair"
        />
        <button className="flex items-center gap-2 text-gray-600 text-sm font-medium cursor-pointer hover:text-gray-900 transition-all duration-300">
          View All Offers
          <img src={assets.arrowIcon} alt="arrow" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10 ">
        {exclusiveOffers.map((offer) => (
          <ExclusiveCard
            key={offer._id}
            title={offer.title}
            description={offer.description}
            priceOff={offer.priceOff}
            expiryDate={offer.expiryDate}
            image={offer.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffer;
